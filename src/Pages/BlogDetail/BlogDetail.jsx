
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom'; 
import Navbar from '../../components/NavBar/NavBAr';
import SuggestesBlog from '../../components/SuggestedBlog/SuggestesBlog';
import Detail from '../../components/Detail/Detail';
import Footer from '../../components/Footer/Footer';
import Newlatters from '../../components/Newlatters/Newlatters';

const BlogDetail = () => {
  const { id } = useParams();  

  useEffect(() => {

    console.log(`Fetching details for blog id: ${id}`);

  }, [id]);

  return (
    <>
    <div  className={` min-h-screen dark:bg-darkBg bg-white text-black dark:text-white`}>
    <Navbar/>
    <div className="flex justify-between  p-8 lg:px-28   xl:px-36 flex-col-reverse md:flex-row pt-37 ">
    <SuggestesBlog/>
    <Detail/>
    </div>
    <div className='w-full px-8 flex mb-7.5 justify-center xl:justify-end xl:pe-37 '>
    <Newlatters/>
    </div>
    <Footer/>
    </div>
    </>
  );
};

export default BlogDetail;
