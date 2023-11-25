import React from 'react'
import TitleSection from '../shared/TitleSection'
import img_1 from '../../assets/aboutUs/1.png'
import img_2 from '../../assets/aboutUs/2.png'
import img_3 from '../../assets/aboutUs/3.png'

const About = () => {

  const aboutUs = [
    {
      "id": 1,
      "img": img_1,
      "title": "Our Fitness Philosophy",
      "short_description": "Discover a holistic approach to fitness that goes beyond the gym, focusing on mind, body, and soul integration."
    },
    {
      "id": 2,
      "img": img_2,
      "title": "Passionate Trainers",
      "short_description": "Meet our team of dedicated trainers who are committed to helping you achieve your fitness goals with personalized guidance and motivation."
    },
    {
      "id": 3,
      "img": img_3,
      "title": "Community Connection",
      "short_description": "Join a supportive community of fitness enthusiasts, where encouragement and camaraderie inspire everyone to reach new heights together."
    }
  ]


  return (
    <div className='bg-black'>
    <div className='max-w-7xl mx-auto py-10'>
      <TitleSection title="About Us" description="Honesty is the best policy" />
      <div className='flex px-3 flex-col-reverse justify-center items-center  lg:flex-row gap-4 py-8'>

        <div className=''>
          <h2 className='text-4xl font-bold items-center text-orange-600 mb-4'>Sweat Today & Smile <br />Tomorrow</h2>
          <div className='w-2/3'>
            {/* single */}
            {
              aboutUs.map(about => (
                <div key={about.id} className='flex gap-3 pb-4 items-center'>
                  <img className='w-8' src={about.img} alt={about.title} />
                  <div>
                    <h4 className='font-bold text-white text-xl'>{about.title}</h4>
                    <p className='text-sm text-gray-500'>{about.short_description}</p>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
        <div className='flex-1'>
          <img src="https://i.ibb.co/wwgYwvc/website-template-preview-90551-removebg-preview.png" alt="" />
        </div>

      </div>
    </div>
    </div>
  )
}

export default About