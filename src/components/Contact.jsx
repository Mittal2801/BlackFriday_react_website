import React from 'react'
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";



const Contact = () => {
  return (
    <>
      <div>
        <div className='bg-[url(https://websitedemos.net/black-friday-04/wp-content/uploads/sites/1419/2023/11/bg-01-b.jpg)] bg-cover'>
            <div className="border h-[1000px] bg-linear-to-t from-black to-transparent">
                <div className='text-[#fc3746] mx-120 pt-20 text-center font-bold text-2xl font-kaushan'>Let's Talk</div>
                <div className='text-center text-white font-extrabold text-7xl py-5 font-league-gothic'>CONTACT US</div>
                <div className='grid grid-cols-2 px-30'>
                    <div>
                        <div className='text-white font-extrabold text-5xl pt-20 font-league-gothic'>GET IN TOUCH</div>
                        <p className='text-[#888888] pt-5 pb-10'>Have questions or need assistance? Click the 'Contact Us' icon to get in touch with our friendly and responsive customer support team</p>
                        <div className='text-white font-extrabold pt-20 font-league-gothi flex'><FaMapMarkerAlt className='text-[#fc3746] pt-2 text-3xl' />ADDRESS</div>
                        <div className='text-[#888888] ps-8'>2972 Westheimer Rd. Santa Ana, Illinois 85486</div>
                        <hr className='text-[#888888] my-5'/>
                        <div className='text-white font-extrabold font-league-gothi flex'><FaPhoneAlt className='text-[#fc3746] pt-2 text-3xl' />PHONE</div>
                        <div className='text-[#888888] ps-8'>(405) 555-0128</div>
                        <hr className='text-[#888888] my-5'/>
                        <div className='text-white font-extrabold font-league-gothi flex'><MdEmail className='text-[#fc3746] pt-2 text-3xl' />EMAIL</div>
                        <div className='text-[#888888] ps-8'>hello@example.com</div>
                        <hr className='text-[#888888] my-5'/>
                    </div>
                    <div className='pt-20 ps-10'>
                        <div className='grid grid-cols-2'>
                            <div className='mx-2'>
                                <div className='text-white'>First Name*</div>
                                <div className='border rounded-sm mt-3 text-[#888888] p-5'></div>
                            </div>
                            <div className='mx-2'>
                                <div className='text-white'>Last Name*</div>
                                <div className='border rounded-sm mt-3 text-[#888888] p-5'></div>
                            </div>
                        </div>
                        <div className='mx-2 mt-10'>
                            <div className='text-white'>Email*</div>
                            <div className='border rounded-sm mt-3 text-[#888888] p-5'></div>
                        </div>
                        <div className='mx-2 mt-10'>
                            <div className='text-white'>Message</div>
                            <div className='border rounded-sm mt-3 text-[#888888] p-5 py-15'></div>
                        </div>
                        <div className='text-white font-extrabold bg-[#fc3746] rounded-sm me-105 mt-10 p-3 ms-3 py-2 font-league-gothic'>SUBMIT</div>
                    </div>
                </div>
            </div>    
        </div>
        <div className='bg-[url(https://websitedemos.net/black-friday-04/wp-content/uploads/sites/1419/2023/11/bg-01-b.jpg)] py-20 pb-20'>
              <div className='text-[#fc3746] pt-20  font-bold text-4xl font-kaushan text-center '>Black Friday Sale</div>
              <div className='font-league-gothic text-center font-extrabold text-white text-5xl pt-10'>SAVE BIG: UP TO <span className='text-[#fc3746]'>60% OFF</span> ON ALL</div>
              <div className='font-league-gothic text-center font-extrabold text-white text-5xl pb-10'>PRODUCTS</div>
              <p className='text-white text-center px-80'>Don’t miss this exclusive opportunity to embark on a journey of unbeatable savings and cutting-edge technology. It’s time to secure the best deals and upgrade your experience, so seize the moment and start shopping now!</p>
              <div className='bg-[#fc3746] text-white text-sm w-[150px] text-center mx-160 mt-5 p-1 py-2 font-bold font-league-gothic'>SHOP DEALS</div>
            </div>
      </div>
    </>
  )
}

export default Contact
