import React, { useEffect, useState, useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import { globalContext } from './App';



 const Product = () => {

    const {id} = useParams();
    console.log(id);

    const localStore = useContext(globalContext);

   const [product, setproduct] = useState({});

    const fetchProducts = async() => {
          const response = await fetch(`https://content.newtonschool.co/v1/pr/63b6c911af4f30335b4b3b89/products/${id}`)
          const data = await response.json();
          console.log(data);
          setproduct(data);
    }

    useEffect(() =>{
        fetchProducts();
    }, []);


const addToCart = (obj) => {
console.log('product to be added to cart - ', obj);
 localStore.setStore({
    ...localStore.store,
    cartTemp: [...localStore.store.cartTemp, obj]
})
}

const [cartStatus, setCartStatus] = useState(false);

useEffect(()=>{

  localStore.store.cartTemp.map((item)=>{
    if(item.id===product.id){
    setCartStatus(true);
    }
  })

},[localStore.store])

useEffect(()=>{
    console.log('cartStatus', cartStatus);
})

  return (
    <div className='row'>
         <div className='col-12'>
         <div className='row my-4'>
                <div className='col-4'>
                   <img src={product.image} className="img-responsive img-fluid"/>
                   </div> 
                    <div className='col-4'>
                        <div>{product.title}</div>
                        <br></br>
                        <div> <h6>Product Details : </h6>{product.description}</div>
                        <br></br>
                        <h3>${product.price}</h3>
                        <br></br>
                        <div>{product.rating && product.rating.count} people have purchased this product</div>
                        <h5>Average rating- {product.rating && product.rating.rate}</h5>
                       

                </div>
                <div className='col-4'>
                    {!cartStatus && (<button className='btn btn-primary' onClick={() =>addToCart(product)}>Add to Cart</button>)}
                    <br></br>
                    {cartStatus && (<Link to="/cart" className='btn btn-success'>Move to Cart</Link>)}
                    <button className='btn btn-secondary'>Qty</button>
                    </div>
                </div>  
                </div>
               
            </div>
            
 )
}


export default Product