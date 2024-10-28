import React from 'react';
import { useLocation } from 'react-router-dom';

function Newlatters() {
  const location = useLocation();

  const textWidth = location.pathname === '/newsletter' ? 'sm:w-[35%]' : 'sm:w-[55%]';

  return (
    <div>
      <p className='text-center text-[#7F56D9] mb-3'>Newlatters</p>
      <h2 className='sm:text-center text-5xl font-semibold mb-6'>Stories and interviews</h2>
      <p className='sm:text-center text-[#C0C5D0] text-xl w-[75.66%] mb-10 sm:mx-auto'>
        Subscribe to learn about new product features, the latest in technology, solutions, and updates.
      </p>
      <div className='flex sm:justify-center mb-2 flex-wrap'>
        <input
          type="email"
          placeholder='Enter your email'
          className='py-3 px-4 w-[326px] sm:w-[360px] border border-[#D0D5DD] rounded-lg mb-3 sm:mb-0 me-4'
        />
        <button className='bg-[#7F56D9] py-3 px-5 rounded-lg text-white'>Subscribe</button>
      </div>
      <div className='w-full flex sm:justify-center'>
        <p className={`${textWidth} `}>
          We care about your data in our privacy policy
        </p>
      </div>
    </div>
  );
}

export default Newlatters;
