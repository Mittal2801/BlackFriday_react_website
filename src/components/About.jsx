import React from 'react'
import { MdLocalShipping } from "react-icons/md";
import { FaLock } from "react-icons/fa6";
import { FaMapMarkerAlt } from "react-icons/fa";
import { GrFormRefresh } from "react-icons/gr";




const About = () => {
  return (
    <>
      <div>
        <div className='bg-[url(https://websitedemos.net/black-friday-04/wp-content/uploads/sites/1419/2023/11/bg-01-b.jpg)] bg-cover'>
        <div className="border h-[1000px] bg-linear-to-t from-black to-transparent">
            <div className='text-[#fc3746] mx-120 pt-20 text-center font-bold text-2xl font-kaushan'>A Few Words</div>
            <div className='text-center text-white font-extrabold text-7xl py-5 font-league-gothic'>ABOUT US</div>
            <div className='mx-30 about-img bg-center bg-cover mt-20'></div>
            <div className='grid grid-cols-2 bg-black'>
                <div>
                    <div className='text-[#fc3746] pt-20 ps-30 font-bold text-2xl font-kaushan'>Our Story</div>
                    <div className='text-white font-extrabold text-4xl pt-5 ps-30 font-league-gothic'>OUR STORY IS ONE OF</div>
                    <div className='text-[#fc3746] font-extrabold text-4xl ps-30 font-league-gothic'>PASSION,PERSEVERANCE,</div>
                    <div className='text-[#fc3746] font-extrabold text-4xl ps-30 font-league-gothic'>AND COMMITMENT</div>
                </div>
                <div>
                    <div className='text-white font-extrabold text-l pt-20 px-15 font-league-gothic'>OUR JOURNEY BEGAN WHEN A GROUP OF DEDICATED INDIVIDUALS,FUELED BY A SHARED LOVE FOR EXCEPTIONAL DEALS AND UNMATCHED SAVINGS,CAME TOGETHER TO CREATE A SHOPPING EXPERIENCE LIKE NO OTHER</div>
                    <p className='text-[#888888] px-15 pt-5'>Founded in 2008, BlackFridayShop set out with a simple mission – to make Black Friday accessible to everyone, delivering the thrill of unbeatable discounts to your fingertips. Over the years, we've dedicated ourselves to curating the finest selection of products, from electronics and fashion to home essentials and more, all with one goal in mind: providing you with the ultimate shopping experience.</p>
                    <p className='text-[#888888] px-15'>What sets us apart is our relentless pursuit of quality and value. We've scoured the market for the finest products, establishing partnerships with trusted brands that share our commitment to excellence. This dedication ensures that every item you find at BlackFridayShop meets the highest standards of quality.</p>
                </div>
                <div className="bg-[url(https://websitedemos.net/black-friday-04/wp-content/uploads/sites/1419/2023/11/about-01.jpg)] w-[1200px] h-150 bg-center bg-cover mx-30 my-20">
                    <div className=" bg-black/70 pb-60">
                    <div className='text-white text-xl font-extrabold font-league-gothic text-center pt-50'>BOUNDLESS LOVE FOR SAVING</div>
                    <div className='font-kaushan font-extrabold text-white text-4xl text-center pt-5'>We've scoured the market for the finest products, establishing partnerships</div>
                    <div className='font-kaushan font-extrabold text-white text-4xl text-center pb-8'>with trusted brands that share our commitment to excellence!</div>
                    </div>
                </div>
                
            </div>
            <div className='grid grid-cols-2 bg-black py-10'>
            <div className=''>
              <div className='text-[#fc3746] pt-20 ps-30 font-bold text-2xl font-kaushan'>Our Values</div>
                <div className='text-white text-4xl font-extrabold font-league-gothic pt-10 ps-30'>OUR VALUES ARE AT THE</div>
                <div className='text-white text-4xl font-extrabold font-league-gothic ps-30'>HEART OF EVERYTHING</div>
                <div className='text-white text-4xl font-extrabold font-league-gothic ps-30'>WE DO</div>
                <p className='text-[#888888] ps-30 py-10'>Our values are the foundation upon which BlackFridayShop is built. They’re not just words on a page; they’re the principles that drive our everyday actions and decisions. We are dedicated to upholding these values and ensuring that they shine through in every aspect of your experience with us.</p>
                <p className='text-[#888888] ps-30'>Thank you for choosing BlackFridayShop, where our values meet your expectations.</p>
              </div>
              <div className='px-10'>
                <img src="https://websitedemos.net/black-friday-04/wp-content/uploads/sites/1419/2023/11/about-03.jpg" alt="" />
              </div>
            </div>
            <div className='grid grid-cols-2 bg-black py-10'>
              <div>
                <div className='text-[#fc3746] pt-20 ps-30 font-bold text-2xl font-kaushan'>Why Choose BlackFridayShop?</div>
                <div className='text-white text-4xl font-extrabold font-league-gothic pt-10 ps-30'>THE JOY OF SHOPPING</div>
                <div className='text-white text-4xl font-extrabold font-league-gothic ps-30'>AT ITS BEST</div>
              </div>
              <div>
                <div className='grid grid-cols-2 px-10'>
                  <div className='pe-5'>
                    <div className='text-white text-4xl'><MdLocalShipping /></div>
                    <div className='font-league-gothic font-extrabold text-white text-sm pt-2'>FREE SHIPPING</div>
                    <div className='text-[#888888] pt-10'>Delight in seamless free shipping, enhancing your shopping experience. Navigate our diverse collection, where cost savings meet product joy</div>
                  </div>
                  <div>
                    <div className='text-white text-4xl'><FaLock /></div>
                    <div className='font-league-gothic font-extrabold text-white text-sm pt-2'>SECURE PAYMENTS</div>
                    <div className='text-[#888888] pt-10'>Shop with confidence using our secure payment methods. Your transactions are protected, providing peace of mind for a worry-free shopping</div>
                  </div>
                </div>
                <div className='grid grid-cols-2 px-10 py-10'>
                  <div className='pe-5'>
                    <div className='text-white text-4xl'><FaMapMarkerAlt /></div>
                    <div className='font-league-gothic font-extrabold text-white text-sm pt-2'>ORDER TRACKING</div>
                    <div className='text-[#888888] pt-10'>Track your order effortlessly with our streamlined system. Stay informed and in control as your purchase makes its way to your doorstep</div>
                  </div>
                  <div>
                    <div className='text-white text-4xl'><GrFormRefresh /></div>
                    <div className='font-league-gothic font-extrabold text-white text-sm pt-2'>EASY RETURNS</div>
                    <div className='text-[#888888] pt-10'>Celebrate worry-free shopping with our hassle-free returns – because we're here to make your shopping experience as smooth as possible</div>
                  </div>
                </div>
              </div>
            </div>
            <div className='bg-[url(https://websitedemos.net/black-friday-04/wp-content/uploads/sites/1419/2023/11/bg-01-b.jpg)] py-20 pb-50'>
              <div className='text-[#fc3746] pt-20  font-bold text-4xl font-kaushan text-center '>Black Friday Sale</div>
              <div className='font-league-gothic text-center font-extrabold text-white text-5xl pt-10'>SAVE BIG: UP TO <span className='text-[#fc3746]'>60% OFF</span> ON ALL</div>
              <div className='font-league-gothic text-center font-extrabold text-white text-5xl pb-10'>PRODUCTS</div>
              <p className='text-white text-center px-80'>Don’t miss this exclusive opportunity to embark on a journey of unbeatable savings and cutting-edge technology. It’s time to secure the best deals and upgrade your experience, so seize the moment and start shopping now!</p>
              <div className='bg-[#fc3746] text-white text-sm w-[150px] text-center mx-160 mt-5 p-1 py-2 font-bold font-league-gothic'>SHOP DEALS</div>
            </div>
        </div>
        </div>
      </div>
    </>
  )
}

export default About
