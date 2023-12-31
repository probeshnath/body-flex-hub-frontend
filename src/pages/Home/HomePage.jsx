import React from 'react'
import Carusal from '../../components/Home/Carusal'
import FeaturedSection from '../../components/Home/FeaturedSection'
import About from '../../components/Home/About'
import FeaturedClass from '../../components/Home/FeaturedClass'
import Testimonials from '../../components/Home/Testimonials'
import BlogArticles from '../../components/Home/BlogArticles'
import Newseltter from '../../components/Home/Newseltter'
import TeamSection from '../../components/Home/TeamSection'
import { Helmet } from 'react-helmet-async'

const HomePage = () => {
  return (
    <div>
      <Helmet>
        <title>BodyFlex Hub || Home Page</title>
      </Helmet>
      <Carusal />
      <FeaturedSection />
      <About />
      <FeaturedClass />
      <Testimonials />
      <BlogArticles />
      <Newseltter />
      <TeamSection />
    </div>
  )
}

export default HomePage