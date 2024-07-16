import React from "react";

const Header = () => {
  return (
    // <div className='flex  justify-between container items-center cursor-pointer  py-5'>
    //   <div className='w-[200px] h-[60px] bg-cover bg-center'>
    //     <img  src="https://animares.com/clickandbuilds/ANIMARES3DmedicalanimationIARIMRIVR/wp-content/uploads/2017/09/ANIMARES_black_375px.png" alt="" />
    //   </div>
    //   <div>
    //     <ul className='flex gap-8 font-medium'>
    //       <li>HOME</li>
    //       <li>SERVICES</li>
    //       <li>LICENSES</li>
    //       <li>PORTFOLIO</li>
    //       <li>TEAM</li>
    //       <li>CONTACT</li>
    //     </ul>
    //   </div>
    // </div>

    <div className="navbar bg-base-100 container ">
      <div className="navbar-start ">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
        </div>
        
          <img
            src="https://animares.com/clickandbuilds/ANIMARES3DmedicalanimationIARIMRIVR/wp-content/uploads/2017/09/ANIMARES_black_375px.png"
            className="w-[200px] h-[60px] "
            alt=""
          />
        
      </div>
      {/* <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>Item 1</a>
          </li>
          <li>
            <details>
              <summary>Parent</summary>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <a>Item 3</a>
          </li>
        </ul>
      </div> */}
      <div className="navbar-end">
        
          <ul className="hidden lg:flex gap-8 font-medium">
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
