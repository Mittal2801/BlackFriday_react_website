import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { Shop_prod } from '../assets/Asserts'

const CategoryProduct = () => {
    const {category} = useParams()

    const relatedProduct = Shop_prod.filter((p)=> p.category === category)
    console.log(relatedProduct);
    
  return (
    <>
    <div className='bg-black'>
      <div className='text-center text-white font-extrabold text-5xl font-league-gothic pt-10'>{category}</div>
      <div className='text-center text-white py-3'>Home - <span>Products</span><span> - {category}</span></div>
      <div>Showing all 4 results</div>
      <div className='grid grid-cols-4 bg-black'>
        {
            relatedProduct.map((item)=>{
                return(
                    <div className='me-5 my-10'>
                    <Link to={`/more/${item.id}/${item.pro_name}`}>
                        <img src={item.image} alt="" />
                        <div className='text-white font-extrabold text-sm font-league-gothic py-3'>{item.pro_name}</div>
                        <div className='text-gray-400 font-bold'>{item.before_price}<span> {item.price}</span></div>
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

export default CategoryProduct
