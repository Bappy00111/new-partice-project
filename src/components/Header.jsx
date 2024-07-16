import React from 'react';

const Header = () => {
  return (
    <div className='flex  justify-between container items-center cursor-pointer  py-5'>
      <div className='w-[200px] h-[60px]'>
        <img  src="https://animares.com/clickandbuilds/ANIMARES3DmedicalanimationIARIMRIVR/wp-content/uploads/2017/09/ANIMARES_black_375px.png" alt="" />
      </div>
      <div>
        <ul className='flex gap-8 font-medium'>
          <li>HOME</li>
          <li>SERVICES</li>
          <li>LICENSES</li>
          <li>PORTFOLIO</li>
          <li>TEAM</li>
          <li>CONTACT</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;