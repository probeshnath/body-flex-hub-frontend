import { useState } from "react";
import { BiSolidBadgeCheck } from "react-icons/bi";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import TrainerSlot from "../../components/TrainerDetails/TrainerSlot";


const TrainerDetails = () => {
  const [tabIndex, setTabIndex] = useState(0);
  return (
    <div className="bg-slate-300">
      <div className="max-w-7xl  mx-auto">
        {/* header */}
        <div className="bg-white">
          <img className="w-full h-52 object-top" src="https://i.ibb.co/CM9hFf5/img-4.webp" alt="" />
          <div className="flex gap-5 -mt-20 ml-10">
            <img className="w-28 border-4 border-white h-28 rounded-full" src="https://i.ibb.co/686tyHs/probesh-deb-nath.jpg" alt="" />
          </div>
          <div className=" px-10 pt-3">
            <div className="flex items-center gap-1">
              <h3 className="text-3xl">Trainer Name</h3>
              <BiSolidBadgeCheck className="mt-3 text-lg text-green-500 " />
            </div>
            <p className="font-bold text-gray-600 ">3 years Experience</p>
            <p className="text-sm text-gray-600 pb-2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque nobis ratione praesentium, tempora perspiciatis aliquid. In ratione sit laborum tenetur neque quia delectus quibusdam iusto nobis eaque quis, labore velit mollitia nihil harum?tam, minus, eveniet sunt asperiores suscipit atque iure aperiam provident nobis. Dolores distinctio ducimus culpa. Voluptates ea modi architecto aperiam, commodi voluptate tempora similique voluptas ipsum non.</p>
            {/* badge */}
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
              <TrainerSlot />
              <TrainerSlot />
              <TrainerSlot />
              <TrainerSlot />
              <TrainerSlot />
              <TrainerSlot />
            </div>
          </TabPanel>
          <TabPanel></TabPanel>
        </Tabs>

        {/* be a trainer page */}
        <div className="flex justify-center">
          <button className="bg-orange-500 py-1 px-5 text-white font-bold mb-4">Be a Trainer Page</button>
        </div>
      </div>
    </div>

  )
}

export default TrainerDetails