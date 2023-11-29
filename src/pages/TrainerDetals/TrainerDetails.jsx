import { useEffect, useState } from "react";
import { BiSolidBadgeCheck } from "react-icons/bi";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import TrainerSlot from "../../components/TrainerDetails/TrainerSlot";
import { Link, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import usePublicAxios from "../../hooks/usePublicAxios";
import { HiOutlineHashtag } from "react-icons/hi2";


const TrainerDetails = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [trainer, setTrainer] = useState(null)
  const publicAxios = usePublicAxios()
  const { id } = useParams()

  useEffect(() => {
    publicAxios.get(`/trainers/${id}`)
      .then(res => {
        // console.log(res.data)
        setTrainer(res.data)
      })
      .catch(error => {
        console.log(error)
      })
  }, [])



  return (
    <div className="bg-slate-300">
      <Helmet>
        <title>BodyFlex Hub || Trainer Details Page</title>
      </Helmet>
      <div className="max-w-7xl px-2  mx-auto">
        {/* header */}
        <div className="bg-white">
          <img className="w-full h-52 object-top" src="https://i.ibb.co/CM9hFf5/img-4.webp" alt="" />
          <div className="flex gap-5 -mt-20 ml-10">
            <img className="w-28 border-4 border-white h-28 rounded-full" src={trainer?.img} alt="" />
          </div>
          <div className=" px-10 pt-3">
            <div className="flex items-center gap-1">
              <h3 className="text-3xl capitalize">{trainer?.name}</h3>
              <BiSolidBadgeCheck className="mt-3 text-lg text-green-500 " />
            </div>
            <p className="font-bold text-gray-600 ">{trainer?.age} years experience</p>
            <p className="text-sm text-gray-600 pb-2">The Fitness Trainer will instruct or coach groups or individuals in exercise activities, demonstrate techniques and form, observe participants, and explain to them corrective measures to improve their skills.</p>
            {/* badge */}
            <h2 className="text-3xl">My Skills:</h2>
            <div className="py-2 px-5">
              {trainer?.skills?.map((skill,inx) =>(
                <p key={inx} className="flex items-center font-semibold gap-2"><HiOutlineHashtag /> {skill}</p>
              ))}
            </div>
          </div>
        </div>
        {/* body */}
        <Tabs className="py-10" selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList>
            <Tab>All Slot</Tab>
            <Tab>About</Tab>
          </TabList>
          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

              {
                trainer?.slots?.map((solt,inx) => <TrainerSlot key={inx} solt={solt} /> )
              }
              
            </div>
          </TabPanel>
          <TabPanel className="py-5  px-3">
            {/* about section */}
            <div className="flex flex-col gap-3">
              <h3 className="text-2xl bg-white py-1 px-2 rounded-md capitalize">Trainer Name: {trainer?.name}</h3>
              <h3 className="text-2xl  bg-white py-1 px-2 rounded-md capitalize">Trainer email: {trainer?.email}</h3>
              <h3 className="text-2xl  bg-white py-1 px-2 rounded-md capitalize">available Time: {trainer?.available_day} Hours</h3>
              <h3 className="text-2xl  bg-white py-1 px-2 rounded-md capitalize">available Day: {trainer?.available_week} days</h3>
            </div>

          </TabPanel>
        </Tabs>

        {/* be a trainer page */}
        <div className="flex justify-center">
          <Link to="/beTrainer"> <button className="bg-orange-500 py-1 px-5 text-white font-bold mb-4 rounded-md">Be a Trainer Page</button></Link>
        </div>
      </div>
    </div>

  )
}

export default TrainerDetails