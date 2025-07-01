import React from 'react'
import { NavLink } from 'react-router-dom'
import { assets} from '../assets/assets'

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = React.useState(false);
  const [sidebarOpen, setSidebarOpen] = React.useState(false);

  return (
    <div className='flex items-center justify-between py-5 font-medium relative'>
      <span className='w-36'>Luxora</span>
      <ul className='hidden sm:flex gap-5 text-sm text-gray-500'>
        <NavLink to='/' className="flex flex-col gap-1 items-center">
          <p>HOME</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
        </NavLink>
        <NavLink to='/collection' className="flex flex-col gap-1 items-center">
          <p>COLLECTIONS</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
        </NavLink>
        <NavLink to='/about' className="flex flex-col gap-1 items-center">
          <p>ABOUT</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
        </NavLink>
        <NavLink to='/contact' className="flex flex-col gap-1 items-center">
          <p>CONTACT</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
        </NavLink>
      </ul>
      <div className='flex items-center gap-6 relative'>
        <img src={assets.search_icon} alt="Search" className='w-5 cursor-pointer' />
        <div
          className="relative"
          onMouseEnter={() => setDropdownOpen(true)}
          onMouseLeave={() => setDropdownOpen(false)}
        >
          <img
            src={assets.profile_icon}
            alt="profile icon"
            className='w-5 cursor-pointer'
          />
          <div
            className={`absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg p-4 z-20 transition-all duration-200 ${
              dropdownOpen ? 'block' : 'hidden'
            }`}
          >
            <ul>
              <li className='py-2 px-4 hover:bg-gray-100 cursor-pointer'>My Profile</li>
              <li className='py-2 px-4 hover:bg-gray-100 cursor-pointer'>Orders</li>
              <li className='py-2 px-4 hover:bg-gray-100 cursor-pointer'>Logout</li>
            </ul>
          </div>
        </div>
        <NavLink to='/cart' className='relative'>
          <img src={assets.cart_icon} alt="Cart" className='w-5 cursor-pointer' />
          <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white rounded-full text-[8px]'>10</p>
        </NavLink>
        {/* Sidebar menu icon for small screens */}
        <img
          src={assets.menu_icon}
          alt="Menu"
          className='w-5 cursor-pointer sm:hidden'
          onClick={() => setSidebarOpen(true)}
        />
      </div>
      {/* Sidebar for small screens */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ${
          sidebarOpen ? 'translate-x-0' : 'translate-x-full'
        } sm:hidden`}
      >
        <div className="flex justify-end p-4">
          <button onClick={() => setSidebarOpen(false)} className="text-2xl font-bold">&times;</button>
        </div>
        <ul className="flex flex-col gap-4 text-gray-700 px-8">
          <NavLink to='/' className="py-2" onClick={() => setSidebarOpen(false)}>HOME</NavLink>
          <NavLink to='/collection' className="py-2" onClick={() => setSidebarOpen(false)}>COLLECTIONS</NavLink>
          <NavLink to='/about' className="py-2" onClick={() => setSidebarOpen(false)}>ABOUT</NavLink>
          <NavLink to='/contact' className="py-2" onClick={() => setSidebarOpen(false)}>CONTACT</NavLink>
        </ul>
      </div>
    </div>
  )
}

export default Navbar