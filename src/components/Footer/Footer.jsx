import React from 'react';

function Footer() {
  return (
    <div className="flex flex-col items-center py-7.5 mx-8 lg:mx-28 sm:flex-row sm:justify-start">
      

      <p className="hidden sm:block sm:mr-3.5">© 2023</p>
      
 
      <div className="flex flex-col items-center space-y-4 sm:space-y-0 sm:flex-row sm:space-x-3.5">
        <a href="#" className="sm:ms-3.5">Twitter</a>
        <a href="#" className="sm:ms-3.5">LinkedIn</a>
        <a href="#" className="sm:ms-3.5">Email</a>
        <p className="sm:ms-3.5">RSS feed</p>
        <p className="sm:ms-3.5">Add to Feedly</p>
      </div>


      <p className="block sm:hidden mt-7.5">© 2023</p>
    </div>
  );
}

export default Footer;
