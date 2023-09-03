import { FC } from "react";
import { NavLink } from "react-router-dom";

const Navbar: FC = () => {
  return (
    <>
      <nav className='bg-mantle'>
        <div className='max-w-screen-xl flex felx-wrap items-center justify-between mx-auto p-4'>
          <NavLink className='flex items-center' to='/'>
            <img
              src='https://cdn.dribbble.com/users/5126437/screenshots/17521076/media/c0551f632bfe6ec2f990bf84bc967239.png'
              alt='Michelle Chen logo'
              className='h-12 mr-3 rounded-lg'
            />
          </NavLink>
          <NavLink to='/about' className='text-text'>
            About
          </NavLink>
          <NavLink to='/portfolio' className='text-text'>
            Portfolio
          </NavLink>
          <NavLink to='/contact' className='text-text'>
            Contact
          </NavLink>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
