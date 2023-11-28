import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';


const Carusal = () => {

    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">'  + '</span>';
        }
      }
    

  return (
    <div className='bg-gray-200'>
      <Swiper
        pagination={pagination}
        modules={[Pagination]}
        className="mySwiper max-w-7xl h-[400px] mx-auto z-10"
      >
        <SwiperSlide className='relative text-white'>
            <img className='w-full h-full object-cover md:object-top '  src="https://i.ibb.co/pzPCBgr/photo-1546817372-628669db4655-q-80-w-1471-auto-format-fit-crop-ixlib-rb-4-0.jpg" alt="" />
            <div className='absolute px-10 flex flex-col  justify-center h-full top-0 left-0'>
                <h2 data-aos="fade-up" className='text-4xl font-bold md:w-2/5 mb-3'>Elevate Your Fitness Journey at <span  className='text-orange-300'>BodyFlex Hub</span></h2>
                <p data-aos="fade-left" className='font-bold text-gray-300 md:w-2/5'>Empower your body, elevate your spirit. Join us at BodyFlex Hub for a fitness experience like no other. Unleash the strength within!</p>
               <Link data-aos="zoom-in" to="/class"> <button className='text-left my-2 bg-orange-400 w-fit py-1 font-medium rounded-md hover:bg-black transition-opacity px-4'> All Class </button></Link>
            </div>
        </SwiperSlide>
        
        <SwiperSlide className='relative text-black'>
            <img className='w-full h-full object-cover ' src="https://i.ibb.co/CM9hFf5/img-4.webp" alt="" />
            <div className='absolute px-10 flex flex-col md:w-2/5 justify-center h-full top-0 text-right right-0'>
                <h2  className='text-4xl font-bold mb-3'>Unleash Your Strength and Transform at <span  className='text-orange-800'>BodyFlex Hub</span></h2>
                <p className='font-bold text-gray-500'>Transform your fitness journey with BodyFlex Hub. Our state-of-the-art facility and expert trainers are here to guide you towards a healthier, stronger you. Your goals, our passion!</p>
               <Link to="/class"> <button className='text-left my-2 bg-orange-400 w-fit py-1 font-medium rounded-md hover:bg-black hover:text-white transition-opacity px-4'> All Class </button></Link>
            </div>
        </SwiperSlide>

        <SwiperSlide className='relative text-white'>
            <img className='w-full h-full object-cover' src="https://i.ibb.co/rF6mqGL/premium-photo-1663036263525-3059e0c47b96-q-80-w-1492-auto-format-fit-crop-ixlib-rb-4-0.jpg" alt="" />
            <div className='absolute px-10 flex flex-col w-full justify-center h-full bg-black opacity-70 top-0 left-0'>
                <h2  className='text-4xl font-bold mb-3 md:w-2/5'>Discover a New Level of Wellness at <span  className='text-orange-300'>BodyFlex Hub</span></h2>
                <p className='font-bold text-gray-300 md:w-2/5'>At BodyFlex Hub for we blend cutting-edge workouts with a supportive community. Step into a world where every drop of sweat brings you closer to your best self. It's not just a gym; it's a lifestyle.</p>
               <Link to="/class"> <button className='text-left my-2 bg-orange-400 w-fit py-1 font-medium rounded-md hover:bg-black transition-opacity px-4'> All Class </button></Link>
            </div>
        </SwiperSlide>
      
       
      </Swiper>
    </div>
  )
}

export default Carusal