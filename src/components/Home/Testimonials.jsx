import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';
import TitleSection from '../shared/TitleSection'

const Testimonials = () => {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + '</span>';
    }
  }
  return (
    <div className=' bg-blue-200 py-10'>
      <div className="max-w-7xl px-3 mx-auto">
        <TitleSection title={"Testimonials"} description={"Your satisfaction Make us Happy"} />

        {/* clicnt review */}
        <div className='pt-10'>
          {/*  */}
          {/* <div className="carousel carousel-center max-w-2/3 mx-auto p-4 space-x-4 bg-blue-200  rounded-box"> */}
          <Swiper
            pagination={pagination}
            modules={[Pagination]}
            className="mySwiper max-w-7xl h-[400px] mx-auto z-10"
          >

            <SwiperSlide >
              <div className="carousel-item w-full md:w-3/4 mx-auto py-5 justify-center text-center flex-col">
                <img src="https://i.ibb.co/686tyHs/probesh-deb-nath.jpg" className="w-20 border-2 border-white  h-20 mx-auto rounded-full" />
                <h2 className="capitalize font-bold text-2xl pt-2" >Probesh deb nath</h2>
                <p className='capitalize pb-4 text-gray-500 font-medium'>Full stack web developer</p>
                <p className='bg-white py-4 px-7 rounded-lg'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam nemo corrupti praesentium maxime tempore vero? Molestiae officiis at nulla esse maxime dolorem, suscipit sunt magnam ipsam repellendus est animi provident nobis quos sint possimus beatae optio ipsum blanditiis expedita? Esse excepturi nobis cumque inventore, aliquam sed eos, voluptatibus ipsam ex consequuntur dolore temporibus eveniet maxime dolorei aut.</p>
              </div>
            </SwiperSlide>
            <SwiperSlide >
              <div className="carousel-item w-full md:w-3/4 mx-auto py-5 justify-center text-center flex-col">
                <img src="https://i.ibb.co/686tyHs/probesh-deb-nath.jpg" className="w-20  h-20 mx-auto rounded-full" />
                <h2 className="capitalize font-bold text-2xl pt-2" >Probesh deb nath</h2>
                <p className='capitalize pb-4 text-gray-500 font-medium'>Full stack web developer</p>
                <p className='bg-white py-4 px-7 rounded-lg'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam nemo corrupti praesentium maxime tempore vero? Molestiae officiis at nulla esse maxime dolorem, suscipit sunt magnam ipsam repellendus est animi provident nobis quos sint possimus beatae optio ipsum blanditiis expedita?ut.</p>
              </div>
            </SwiperSlide>
            <SwiperSlide >
              <div className="carousel-item w-full md:w-3/4 mx-auto py-5 justify-center text-center flex-col">
                <img src="https://i.ibb.co/686tyHs/probesh-deb-nath.jpg" className="w-20  h-20 mx-auto rounded-full" />
                <h2 className="capitalize font-bold text-2xl pt-2" >Probesh deb nath</h2>
                <p className='capitalize pb-4 text-gray-500 font-medium'>Full stack web developer</p>
                <p className='bg-white py-4 px-7 rounded-lg'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam nemo corrupti praesentium maxime tempore vero? Molestiae officiis at nulla eut velit porro non voluptas! Commodi blanditiis aliquid, eum magnam reprehenderit odio veritatis a natus maiores cumque quis ratione eligendi quasi aut.</p>
              </div>
            </SwiperSlide>


          </Swiper>
          {/* </div> */}
        </div>
      </div>

    </div>
  )
}

export default Testimonials