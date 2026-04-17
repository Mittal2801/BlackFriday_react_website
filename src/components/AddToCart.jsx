import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext'
import { Link } from 'react-router-dom';
import { RxCrossCircled } from "react-icons/rx";


const AddToCart = () => {
    const {cart,itemDelete,increaseQTY,decreaseQTY} = useContext(UserContext);
    console.log(cart);
    
    let  totalPrice = cart.reduce((total, p) => {
      return total + p.price * p.quantity;
    }, 0);


  return cart.length > 0 ? (
    <>
    <div className='bg-[url(https://websitedemos.net/black-friday-04/wp-content/uploads/sites/1419/2023/11/bg-01-b.jpg)] bg-cover h-[400px]'>
     <div className='border h-[400px] bg-linear-to-t from-black to-transparent'>
        <div className='text-center text-white font-extrabold text-8xl pt-20 font-league-gothic'>CART</div>
        <div className='text-center text-[#888888]'><Link to='/'>Home</Link> - Cart</div>
        <div className='bg-black pb-30 '>
        <div className="flex mt-10 gap-10 text-[#888888] mx-30">
          <div className='border w-[70%] py-2'>
            <div className="flex justify-between border-b px-10 text-[#888888] font-bold py-2">
              <p className=''>Product</p>
              <p className=''>Price</p>
              <p className=''>Quantity</p>
              <p className=''>Subtotal</p>
            </div>
            {cart.map((items,i)=>{
              return(
                <div className="flex mt-3 border-b justify-between items-center px-8 py-5
                " key={items.id}>
                    <div className="w-[100px] flex items-center">
                      <RxCrossCircled /><img src={items.image} width="80%" alt="" /><Link to={`/more/${items.id}/${items.category}`} className='ps-5'><span className='text-[#fc3746] pt-5'>{items.pro_name}</span></Link>
                    </div>
                    <p className=''>${items.price}</p>
                    <div className="flex items-center">
                      <button className='border w-10 h-10' onClick={() => {items.quantity > 1 ? decreaseQTY(items.id) : itemDelete(i)}}>-</button>
                        <p className=' w-10 h-10 flex justify-center items-center'>{items.quantity}</p>
                      <button className='border w-10 h-10' onClick={() => increaseQTY(items.id)}>+</button>
                    </div>
                  
                  <p className='w-[10%]  flex items-center justify-center'>{items.price * items.quantity}</p>
                </div>
              )
            })}
          </div>
          <div className='bg-black border pb-10  w-[30%]'>
            <div className='font-extrabold py-3 ps-3 font-league-gothic text-white'>CART TOTALS</div>
            <hr className=''></hr>
            <div className='ps-5 pt-7 pb-5'>Subtotal <span className='ps-40'>${totalPrice}</span></div>
            <hr className='mx-5'></hr>
            <div className='ps-5 py-5'>Total <span className='ps-47'>${totalPrice}</span></div>
           <hr className='mx-5'></hr>
           <div className='text-white ps-5 pt-10 pb-5'>Have a coupon ?</div>
           <div className='bg-[#fc3746] text-white text-sm w-[300px] mx-5  py-5 text-center font-bold font-league-gothic'>PROCEED TO CHECKOUT</div>
          </div>
        </div>
        </div>
      </div>
      </div>
    </>
  ): (

    <div className="border h-screen flex flex-col justify-center items-center bg-[url(https://websitedemos.net/black-friday-04/wp-content/uploads/sites/1419/2023/11/bg-01-b.jpg)] bg-cover">
      <p className='font-extrabold text-5xl text-center text-white font-league-gothic'>NO CART DATA AVAILABLE</p>
    </div>
    
  )
}

export default AddToCart
