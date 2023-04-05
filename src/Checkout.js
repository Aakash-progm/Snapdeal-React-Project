import React, {useState} from 'react'

 const Checkout = () => {
  const [userAddress, setUserAddress] = useState("");
    const [msg, setMsg] = useState(false);
    const [showToast, setShowToast] = useState(false);
  
    function handleSubmit(event) {
      event.preventDefault();
      console.log("User address:", userAddress);
    }
    function handleAddressChange(event) {
      setUserAddress(event.target.value);
    }
    
    const paymentUpdate =() =>{
        setMsg(true);
    }
    const placeOrder = () => {
        if(msg){
          setShowToast(true);
        } 
        }     
  return (
    <>
    <div className='row'>
        <div className='col-12'>
        <div className="row">
        <div className="col-3">
          <h3>Complete Payment</h3>
          <form onSubmit={handleSubmit}>
            <label>
              User Address:
              <input
                type="text"
                value={userAddress}
                onChange={handleAddressChange}
              />
            </label>
            <label>
              Payment Type:
              <select>
                <option value="credit">Credit Card</option>
                <option value="debit">Debit Card</option>
              </select>
            </label>
            <button type="submit" onClick={paymentUpdate}>Complete Payment</button>
            {msg && (<div
         class="alert alert-info" role="alert">
         Payment done.
        </div>
            )}
          </form>
        </div>
      </div>
            
            <br></br>  <br></br>
            <button onClick={placeOrder}>Place order</button>
            <br></br>
      {showToast && (
        <div
         class="alert alert-success" role="alert">
         Congratulations! Order has been placed successfully.
        </div>
      )}
        </div>
    </div>
    </>
  )
}

export default Checkout