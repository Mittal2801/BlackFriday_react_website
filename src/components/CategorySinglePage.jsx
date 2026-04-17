import React, { useContext } from 'react'
import { Category, Shop_prod } from '../assets/Asserts';
import { Link, useParams } from 'react-router-dom';
import { UserContext } from '../context/UserContext';

const CategorySinglePage = () => {
     const{id,category} = useParams();
     console.log(category);
    const {addCart} = useContext(UserContext)
     
     const ProductDetails = Category.find((p) => p.id === parseInt(id))

     const relatedProduct = Shop_prod.filter((p)=> p.category === category)
    //  console.log(relatedProduct);
     
  return (
    <>
      <div className='bg-black py-20'>
        <div className='grid grid-cols-2 mx-30 text-white'>
        <div>
            <img src={ProductDetails.image} alt="" className='w-[570px]'/>
            <div className='grid grid-cols-2 mt-5'>
              <div className='me-15'><img src={ProductDetails.image_2} alt=""  /></div>
              <div className='me-15'><img src={ProductDetails.image_3} alt="" /></div>
            </div>
        </div>
        
        <div className='ms-10'>
            <div className='text-gray-400'>Home / <Link to={`/cat/${ProductDetails.category}`}>{ProductDetails.category}</Link> / {ProductDetails.pro_name}</div>
            <div className='text-[#fc3746] py-5'><Link to={`/cat/${ProductDetails.category}`}>{ProductDetails.category}</Link></div>
            <div className='text-white font-extrabold text-4xl font-league-gothic'>{ProductDetails.pro_name}</div>
            <div className='pt-10 text-gray-400 text-2xl'>{ ProductDetails.price } <span className='text-white line'>  { ProductDetails.before_price } </span> & Free Shipping </div>
            <div className='pt-2 font-medium'>{ ProductDetails.description }</div>
            <div className='my-10'><span className='border p-4 px-5'>-</span><span className='border p-4 px-5 bg-white text-gray-500'>1</span><span className='border p-4 px-5'>+</span><span className='bg-[#fc3746] text-white font-bold p-4 mx-10' onClick={()=>addCart(ProductDetails)}>ADD TO CART</span></div>
            <div className='text-white py-2'>
              <hr />
            </div>
            <div>Category : <span className='text-[#fc3746]'><Link to={`/cat/${ProductDetails.category}`}>{ProductDetails.category}</Link></span></div>
            <div className='text-gray-400 font-bold py-5'>Free shipping on orders over $50!</div>
            <div>No-Risk Money Back Guarantee!</div>
            <div>No Hassle Refunds</div>
            <div>Secure Payments</div>
           
        </div>
        
      </div>
       <div className='border text-white mt-20 p-5 mx-30'>
        <div className='text-[#fc3746] font-bold text-2xl font-kaushan'>Description</div>
        <p className='text-white py-10'>{ProductDetails.next_description}</p>
      </div>
      <div className='border text-white p-5 mx-30'>
        <div className='text-[#fc3746] font-bold text-2xl font-kaushan'>Reviews(0)</div>
      </div>
       <div className='text-white font-extrabold text-4xl font-league-gothic pt-10 ps-30'>RELATED PRODUCTS</div>
            <div className='grid grid-cols-4 px-30'>
              {
                relatedProduct.map((p)=>{
                  return(
                    <div className='me-5 my-10'>
                      <Link to={`/more/${p.id}/${p.category}`}>
                        <img src={p.image} alt="" />
                        <div className='text-white font-extrabold text-sm font-league-gothic py-3'>{p.pro_name}</div>
                        <div className='text-gray-400 font-bold'>{p.price} <span className='line text-white'> {p.before_price}</span></div>
                      </Link>
                    </div>
                  )
                })
              }
              </div>
      </div>
    </>
  )
}

export default CategorySinglePage
