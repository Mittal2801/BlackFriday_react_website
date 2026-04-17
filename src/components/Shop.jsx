import React from 'react'
import { Link } from 'react-router-dom'
import { Shop_prod } from '../assets/Asserts'

const Shop = () => {
  return (
    <>
      <div className='bg-[url(https://websitedemos.net/black-friday-04/wp-content/uploads/sites/1419/2023/11/bg-01-b.jpg)] bg-cover h-[400px]'>
        <div className="border h-[400px] bg-linear-to-t from-black to-transparent">
          <div className='text-center text-white font-extrabold text-8xl pt-20 font-league-gothic'>SHOP</div>
          <div className='text-center text-white pb-15'><Link to='/' className=''>Home</Link> -  <Link to='/shop' className=''>Shop </Link></div>
          <div className='text-white pt-5 px-5'>Showing 1-8 of 16 results</div>
        </div>

        <div className='grid grid-cols-4 bg-black mt-0 pb-50'>
            {
                Shop_prod.map((item) =>{
                return( 
                  <div className=''>
                    <div className='mx-2 mt-20'>
                      <Link to={`/more/${item.id}/${item.category}`}>
                      <div>
                        <img src={item.image} alt="" />
                        <div className='text-[#888888] bg-[#2a2a2a] rounded-full p-1 px-3 font-bold me-50 pro_percentage'>{item.percentage}</div>
                      </div>
                      <div className='text-white font-bold font-league-gothic py-2'>{item.pro_name}</div>
                      <div className='text-gray-500 font-bold'>${item.price} <span className='text-white ps-3 line'>${item.before_price}</span></div>
                      </Link>
                      </div> 
                  </div>  
                )
              })
            }
        </div>
    
      </div>
    </>
  )
}

export default Shop