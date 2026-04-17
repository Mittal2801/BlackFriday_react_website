import React, { useEffect, useRef, useState } from 'react'
import { Category } from '../assets/Asserts'
import { MdLocalShipping } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosRefresh } from "react-icons/io";
import { FaStar } from "react-icons/fa";
import { Link } from 'react-router-dom';



const Home = () => {
  const [timeDays, setTimerDays] = useState('00');
  const [timeHours, setTimerHours] = useState('00');
  const [timerMinutes, setTimerMinutes] = useState('00');
  const [timerSeconds, setTimerSeconds] = useState('00');

  let interval = useRef();

  const startTimer = ()=>{
    const countDownDate = new Date("July 01, 2026 00:00:00").getTime();

    interval = setInterval(() =>{
      let nowTime = new Date().getTime();
      let distance = countDownDate - nowTime;

      const days = Math.floor (distance/(24*60*60*1000)),
      hours = Math.floor ((distance % (24*60*60*1000))/(60*60*1000)),
      minutes = Math.floor ((distance % (60*60*1000))/ (60*1000)),
      seconds = Math.floor ((distance % (60*1000))/ (1000));

      if(distance < 0){
        clearInterval(interval.current);
      } else {
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds)
      }
    },1000);
  };

  useEffect(()=>{
    startTimer();
    return()=>{
      clearInterval(interval.current);
    }
  })

  return (
    <>
      <div className='bg-[url(https://websitedemos.net/black-friday-04/wp-content/uploads/sites/1419/2023/11/bg-01-b.jpg)] h-[830px] bg-cover ' >
      <div className='pt-40'>
        <div className='text-[#fc3746] mx-120 py-3 text-center font-bold text-2xl font-kaushan'>Hurry, Black Friday is Almost Here!</div>
        <div className='text-center text-white font-extrabold text-6xl mx-25 font-league-gothic'>
          TIME LEFT UNTIL OUR <span className='text-[#fc3746]'>BIGGEST SALE</span>
          <span className='text-[#fc3746]'> OF THE YEAR BEGINS</span>
        </div>
        <div className='bg-[#fc3746] text-white text-center mt-10 p-3 mx-150 font-league-gothic font-bold'>SET REMINDER</div>
        <div className='grid grid-cols-4 mx-20 mt-20  text-9xl font-extrabold'>
          <div className='border border-white text-white font-league-gothic text-center mx-5 py-15'>{timeDays}
            <div className='text-xl font-light mt-5'>DAYS</div>
          </div>
          <div className='border border-white text-white font-league-gothic text-center mx-5 pt-15'>{timeHours}
            <div className='text-xl font-light mt-5'>HOURS</div>
          </div>
          <div className='border border-white text-white font-league-gothic text-center mx-5 pt-15'>{timerMinutes}
            <div className='text-xl font-light mt-5'>MINUTES</div>
          </div>
          <div className='border border-white text-white font-league-gothic text-center mx-5 pt-15'>{timerSeconds}
            <div className='text-xl font-light mt-5'>SECONDS</div>
          </div>
        </div>

        <div className='bg-black py-10'>
          <div className='grid grid-cols-2 bg-[url(https://websitedemos.net/black-friday-04/wp-content/uploads/sites/1419/2023/11/bg-006.jpg)]  mt-20 mx-40 py-20'>
            <div className='py-40 px-20'>
              <div className='text-[#fc3746] text-2xl font-kaushan'>Up To 50% Off</div>
              <div className='text-white text-4xl py-5 font-league-gothic font-bold'>GRAB YOUR FAVORITES BEFORE THEY'RE GONE</div>
              <p className='text-white text-sm font-light'>You can trust us to bring you the latest technology at unbeatable prices. Don’t miss this limited-time opportunity to upgrade your audio game. Grab your perfect pair now!</p>
              <div className='bg-[#fc3746] text-white text-sm me-60 text-center mt-5 p-2 font-bold font-league-gothic font-bold'>SHOP NOW</div>
            </div>
            <div>
              <img src="https://websitedemos.net/black-friday-04/wp-content/uploads/sites/1419/2023/11/headphone-01.png" alt="" />
            </div>
           
          </div>
        </div>

        <div className='bg-black grid grid-cols-2 py-40 pt-1'>
          <div>
            <div className='text-[#fc3746] font-kaushan text-3xl ps-30 pt-150'>Black Friday Exclusive</div>
            <div className='font-league-gothic font-extrabold text-white text-4xl ps-30 pt-10'>SAVE BIG:<span className='text-[#fc3746]'> UP TO 75% OFF</span></div>
            <div className='font-league-gothic font-extrabold text-white text-4xl ps-30'>ON HEADPHONES</div>
            <p className='text-white ps-30 pt-10 w-[700px]'>You can trust us to bring you the latest technology at unbeatable prices. Don’t miss this limited-time opportunity to upgrade your audio game.</p>
            <div className='bg-[#fc3746] text-white text-sm w-[100px] ms-30 mt-5 p-2 font-bold font-league-gothic'>SHOP NOW</div>
          </div>
          
          <div>
            <img src="https://websitedemos.net/black-friday-04/wp-content/uploads/sites/1419/2023/11/image.jpg" alt="" className='next_img'/>
            <img src="https://websitedemos.net/black-friday-04/wp-content/uploads/sites/1419/2023/11/headphones-img-02.jpg" alt="" className='pe-30'/>
          </div>
           
        </div>

        <div className='bg-black py-30'>
          <div className='text-[#fc3746] font-kaushan text-3xl text-center'>Unbelievable Discounts Await You</div>
          <div className='font-league-gothic font-extrabold text-white text-5xl text-center py-5'>BLACK FRIDAY MADNESS IS HERE!</div>
          <div className='text-white py-10 text-center mx-180'><hr /></div>
          <div className='grid grid-cols-4 mx-30'>
            {
              Category.map((item) =>{
                return(
                  <div className='mx-3'>
                  <Link to={`/homecat/${item.id}/${item.category}`}>
                  <div>
                    <img src={item.image} alt="" className='pro_img'/>
                    <div className='text-[#888888] bg-[#2a2a2a] rounded-full p-1 px-3 font-bold me-50 pro_percentage'>{item.percentage}</div>
                  </div>
                  <div className='text-white font-bold font-league-gothic py-2'>{item.pro_name}</div>
                  <div className='text-gray-500 font-bold'>${item.price} <span className='line text-white ps-3'>${item.before_price}</span></div>
                  </Link>
                  </div>   
                )
              })
            }
          </div>
        </div>

        <div className='bg-black py-30'>
          <div className="mx-30 bg-[url(https://websitedemos.net/black-friday-04/wp-content/uploads/sites/1419/2023/11/bg-07.jpg)] h-150 bg-center bg-cover">
            <div className=" bg-black/70 pb-60">
              <div className='text-[#fc3746] text-3xl font-extrabold font-kaushan text-center pt-50'>Limited-Time Offer</div>
              <div className='font-league-gothic font-extrabold text-white text-4xl text-center pt-5 pb-8'>SAVE BIG: UP TO <span className='text-[#fc3746]'>60% OFF</span> ON ALL HEADPHONES</div>
              <div className='font-league-gothic font-extrabold text-white text-2xl text-center'>ACT FAST BEFORE THEY'RE GONE</div>
              <div className='bg-[#fc3746] text-white text-sm w-[100px] text-center ms-130 mt-5 p-2 font-bold font-league-gothic'>SHOP NOW</div>
            </div>
          </div>
        </div>

        <div className='bg-black'>
            <div className='grid grid-cols-2'>
              <div></div>
              <div>
                <div className='text-[#fc3746] text-3xl font-extrabold font-kaushan'>Why Choose BlackFridayShop?</div>
                <div className='font-league-gothic font-extrabold text-white text-4xl pt-5'>THE JOY OF SHOPPING</div>
                <div className='font-league-gothic font-extrabold text-white text-4xl pb-5'>AT ITS BEST</div>
                <div className='text-white text-4xl'><MdLocalShipping /></div>
                <div className='font-league-gothic font-extrabold text-white text-sm'>FREE SHIPPING</div>
                <div className='text-white w-[300px] pb-10 pt-5'>Delight in seamless free shipping, enhancing your shopping experience. Navigate our diverse collection, where cost savings meet product joy</div>
                <div className='text-white text-4xl'><FaLock /></div>
                <div className='font-league-gothic font-extrabold text-white text-sm'>SECURE PAYMENTS</div>
                <div className='text-white w-[300px] pb-10 pt-5'>Shop with confidence using our secure payment methods. Your transactions are protected, providing peace of mind for a worry-free shopping</div>
                <div className='text-white text-4xl'><FaLocationDot /></div>
                <div className='font-league-gothic font-extrabold text-white text-sm'>ORDER TRACKING</div>
                <div className='text-white w-[300px] pb-10 pt-5'>Track your order effortlessly with our streamlined system. Stay informed and in control as your purchase makes its way to your doorstep</div>
                <div className='text-white text-4xl'><IoIosRefresh /></div>
                <div className='font-league-gothic font-extrabold text-white text-sm'>EASY RETURNS</div>
                <div className='text-white w-[300px] pb-10 pt-5'>Celebrate worry-free shopping with our hassle-free returns – because we're here to make your shopping experience as smooth as possible</div>
              </div>
            </div>
        </div>

        <div className="bg-black py-30">
          <div className='mx-30 slide h-180 bg-center bg-cover'>
            <div className='h-full w-full bg-black/60'>
              <div className='text-[#fc3746] text-4xl font-extrabold font-kaushan pt-40 pl-20'>What Our Clients Say</div>
              <div className='font-league-gothic font-extrabold text-white text-4xl pl-20'>CUSTOMER TESTIMONIALS</div>
              <div className='grid grid-cols-2'>
                <div className='pt-40 pl-20'>
                  <div className='text-[#f0ad4e] flex pb-5'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></div>
                  <div className='text-white w-[500px]'>I couldn't be happier with my Black Friday Shop experience. The deals were incredible, and the quality of the products I purchased exceeded my expectations. I was particularly impressed with the seamless shopping process and the quick, hassle-free delivery.</div>
                  <div className='text-white py-5'>James Oliver</div>
                </div>
                <div className='pt-40 pl-20'>
                  <div className='text-[#f0ad4e] flex pb-5'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></div>
                  <div className='text-white w-[500px]'>Absolutely thrilled with my experience at this online store! The selection is fantastic, the prices are unbeatable, and the customer service is top-notch. I recently purchased a camera, and not only did it arrive quickly, but the quality exceeded my expectations. Highly recommended!</div>
                  <div className='text-white py-5'>Daniel Taylor</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='bg-[url(https://websitedemos.net/black-friday-04/wp-content/uploads/sites/1419/2023/11/bg-01-b.jpg)]'>
            <div className='text-[#fc3746] text-3xl font-extrabold font-kaushan text-center pt-20'>Black Friday Sale</div>
            <div className='font-league-gothic font-extrabold text-white text-4xl text-center pt-5'>SAVE BIG: UP TO <span className='text-[#fc3746]'>60% OFF</span> ON ALL</div>
            <div className='font-league-gothic font-extrabold text-white text-4xl text-center pb-8'>PRODUCTS</div>
            <div className='text-white px-90 text-center '>Don’t miss this exclusive opportunity to embark on a journey of unbeatable savings and cutting-edge technology. It’s time to secure the best deals and upgrade your experience, so seize the moment and start shopping now!</div>
            <div className='bg-[#fc3746] text-white text-sm w-[140px] mx-160 mt-5 text-center p-2 font-bold font-league-gothic'>SHOP DEALS</div>
            <div className='pt-50 text-white'><hr /></div>
        </div>    

      </div>
      </div>
    </>
  )
}

export default Home