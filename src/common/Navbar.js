import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (

    <div className='row' style={{ backgroundColor: '#e40046' }}>
    <div className='col-12'>
      
        <Link className='btn btn-primary' style={{marginRight:'10px'}}to="/home">Home</Link>


        <Link className='btn btn-warning' style={{
        position: 'absolute',
        top: '50px',
        right: '150px',
        borderRadius: '5px',
        color: 'white',
        border: 'none'
      }}to="/cart">Cart</Link>
        <Link className='btn btn-dark'style={{
        position: 'absolute',
        top: '50px',
        right: '70px',
        borderRadius: '5px',
        color: 'white',
        border: 'none'
      }} to="/">Sign In</Link>
        <Link to=""></Link>


    </div>
</div>
  )
}

export default Navbar