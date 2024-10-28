import React from 'react'
import Navbar from '../../components/NavBar/NavBAr'
import Newlatters from '../../components/Newlatters/Newlatters'
import NewsCard from '../../components/NewsCard/NewsCard'
import Footer from '../../components/Footer/Footer'

function NewsLatters() {
    return (
        <div className='pt-[150px] min-h-screen dark:bg-darkBg bg-white text-black dark:text-white '>
            <Navbar />
            <div className='px-8 mb-[50px] sm:mb-[72px] lg:mb-[124px]'>
                <Newlatters />
            </div>
            <div className='px-8 lg:px-28'>
            <NewsCard/>
            </div>
            <Footer/>
        </div>
    )
}

export default NewsLatters