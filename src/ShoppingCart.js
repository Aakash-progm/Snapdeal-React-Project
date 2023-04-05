import React, { useContext, useState } from 'react'
import { globalContext } from './App'
import { Link } from 'react-router-dom';

 const ShoppingCart = () => {
    const localStore = useContext(globalContext);
    const {store, setStore} = localStore;
    const [showModal, setShowModal] = useState(false);
    const [userAddress, setUserAddress] = useState("");
    const totalPrice = store.cartTemp.reduce((acc, item) => acc + item.price, 0);

    function handleSubmit(event) {
      event.preventDefault();
      console.log("User address:", userAddress);
    }

    function handleAddressChange(event) {
      setUserAddress(event.target.value);
    }
  
  return (
    <div>
    <div className='row'>
        <div className='col-12'>
       <table>
        <thead>
            <tr>
                <th>SrNo</th>
                <th>Title</th>
                <th>Image</th>
                <th>Price</th>
                <th>Qty</th>
         </tr>
         </thead>
         <tbody>
            {
                store.cartTemp && store.cartTemp.map((item, index) =>(
                    <tr>
                      <td>{index+1}</td>
                      <td>{item.title}</td>
                      <td><img src={item.image} style={{width:'50px', height:'auto'}}/></td>
                      <td>${item.price}</td>
                      <td></td>
                    </tr>
                ))
            }
         </tbody>
       </table>
       <br></br>
      <h3>Subtotal: ${totalPrice.toFixed(2)}</h3>
        
       <Link to="/home" className='btn btn-info'>Continue Shopping</Link>
       {totalPrice > 0 && <Link to="/checkout" className='btn btn-success'>Proceed to Checkout</Link>
        }
        </div>
    </div>
    </div>
  )
}


export default ShoppingCart