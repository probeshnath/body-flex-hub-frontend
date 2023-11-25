import img_1 from '../../assets/features/1.png'
import img_2 from '../../assets/features/2.png'
import img_3 from '../../assets/features/3.png'
import img_4 from '../../assets/features/4.png'
import img_5 from '../../assets/features/5.png'
import img_6 from '../../assets/features/6.png'
import img_7 from '../../assets/features/7.png'
import img_8 from '../../assets/features/8.png'
import img_9 from '../../assets/features/9.png'
import img_10 from '../../assets/features/10.png'
import TitleSection from '../shared/TitleSection'

const FeaturedSection = () => {

  const featueds = [
    {
      "id": 1,
      "featured_name": "Strength Mastery",
      "featured_description": "Unlock your true strength potential with our intensive strength training program.",
      "img": img_1
    },
    {
      "id": 2,
      "featured_name": "Cardio Fusion",
      "featured_description": "Experience the perfect blend of cardio workouts that will keep your heart racing and body thriving.",
      "img": img_2
    },
    {
      "id": 3,
      "featured_name": "Yoga Harmony",
      "featured_description": "Find inner peace and flexibility with our rejuvenating yoga classes suitable for all levels.",
      "img": img_3
    },
    {
      "id": 4,
      "featured_name": "High-Intensity Burn",
      "featured_description": "Ignite your metabolism and torch calories with our high-intensity interval training sessions.",
      "img": img_4
    },
    {
      "id": 5,
      "featured_name": "Mindful Meditation",
      "featured_description": "Nurture your mind and soul through guided meditation sessions for complete relaxation.",
      "img": img_5
    },
    {
      "id": 6,
      "featured_name": "Body Sculpting",
      "featured_description": "Craft the physique you desire with our personalized body sculpting programs and expert guidance.",
      "img": img_6
    },
    {
      "id": 7,
      "featured_name": "Spin Revolution",
      "featured_description": "Join the spin revolution for a heart-pumping, music-filled cycling experience like no other.",
      "img": img_7
    },
    {
      "id": 8,
      "featured_name": "Functional Fitness",
      "featured_description": "Enhance your daily activities by focusing on functional movements and overall fitness.",
      "img": img_8
    },
    {
      "id": 9,
      "featured_name": "Pilates Precision",
      "featured_description": "Improve your core strength, flexibility, and posture with our precision-focused Pilates sessions.",
      "img": img_9
    },
    {
      "id": 10,
      "featured_name": "CrossFit Challenge",
      "featured_description": "Take on the CrossFit challenge to push your limits and achieve a new level of fitness excellence.",
      "img": img_10
    }
  ]

  return (
    <div className='bg-gray-200 py-7'>
      <div className='max-w-7xl mx-auto '>
        <TitleSection title="Our Features Services" description="Our provided all the serveice" />
        <div className='grid py-5  px-2 grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-4'>
          {
            featueds.map((feature) => (
              <div  className='border text-center mx-auto border-gray-100 hover:bg-slate-100' key={feature.id}>
                <img className='mx-auto w-20 h-28 pt-4' src={feature.img} alt="" />
                <h3 className='text-2xl font-extrabold text-orange-400'>{feature.featured_name}</h3>
                <p className='text-gray-500 font-medium px-2 pb-4'>{feature.featured_description}</p>

              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default FeaturedSection