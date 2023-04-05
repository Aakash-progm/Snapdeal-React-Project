import React, {useState} from 'react'
import { useLocation } from "react-router-dom";


const Searchbar = ({ handleSearch }) => {
  const location = useLocation();
  const isHomePage = location.pathname === "/home";
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    handleSearch(searchTerm);
  };

    return (
      <div>
      {isHomePage && (
        <div>
          {<div className='row' style={{ backgroundColor: '#e40046' }}>
        <div className='col-12 my-2'  style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>       
        <input type="text" placeholder="Search Products" onChange={(event) => setSearchTerm(event.target.value)} />
        
        <button >Search</button>

      </div>
      </div>}
        </div>
      )}
    </div>
  );
  };
  


export default Searchbar
