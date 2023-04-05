import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'



const Home = () => {


    const [products, setproducts] = useState([]);

    const fetchProducts = async() => {
          const response = await fetch('https://content.newtonschool.co/v1/pr/63b6c911af4f30335b4b3b89/products')
          const data = await response.json();
          console.log(data);
          setproducts(data);
    }

    useEffect(() =>{
        fetchProducts();
    }, []);
  return (
    <div className='row'>
        <div className='col-12' >
            <div className='row' >
            {
                products && products.map((item) => (
                    <Link className="col-4 card" to={`/product/${item.id}`} key={item.id}>
                        <img src={item.image} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{item.title}</h5>
                            <p className="card-text">{item.price}</p>
                        </div>
                        </Link>
                ))
            }
        </div>
        </div>
    </div>
   
  )
}


export default Home