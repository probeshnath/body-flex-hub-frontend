import React from 'react'
import SingleTeamTrainer from './SingleTeamTrainer'
import TitleSection from '../shared/TitleSection'

const TeamSection = () => {
  return (
    <div className="bg-black py-10" >
      <TitleSection title={"All Trainer"} description={"Our all Best traniers are ready to fit your Body"} />
      <div className='grid grid-cols-1 px-3 md:grid-cols-2 pt-8 lg:grid-cols-4 gap-4 '>
        <SingleTeamTrainer />
        <SingleTeamTrainer />
        <SingleTeamTrainer />
        <SingleTeamTrainer />
        <SingleTeamTrainer />
        <SingleTeamTrainer />
      </div>
    </div>
  )
}

export default TeamSection