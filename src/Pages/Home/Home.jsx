import React from 'react'
import Navbar from '../../components/NavBar/NavBAr'
import Title from '../../components/Title/Title'
import RecentBlog from '../../components/RecentBlog/RecentBlog'
import AllBlog from '../../components/AllBlog/AllBlog'
import Footer from '../../components/Footer/Footer'

function Home() {
  return (
    <div className={` min-h-screen dark:bg-darkBg bg-white text-black dark:text-white`}>

    <Navbar />
    <Title />
    <RecentBlog /> 
    <AllBlog/>
    <Footer/>
  </div>
  )
}

export default Home