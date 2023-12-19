import React from 'react';
import { Navbar } from 'flowbite-react';

function Header() {
  return (
    <div style={{fontFamily:"Montserrat"}}>
    <Navbar fluid className="bg-teal-800 lg:h-16 md:h-16">
      <Navbar.Brand href="/">
      <span className="self-center whitespace-nowrap text-xl font-semibold md:ml-10 lg:ml-10 text-white lg:mt-2 md:mt-2">Saakshi's Portfolio</span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse className='ml-auto mr-10'>
        <Navbar.Link href="/" className='text-lg text-white lg:mt-2 md:mt-2 hover:text-teal-800 md:hover:text-white md:hover:underline lg:hover:underline'>
          About
        </Navbar.Link>
        <Navbar.Link href="#" className="text-lg text-white lg:mt-2 md:mt-2 hover:text-teal-800 md:hover:text-white md:hover:underline lg:hover:underline">Projects</Navbar.Link>
        <Navbar.Link href="#" className='text-lg text-white lg:mt-2 md:mt-2 hover:text-teal-800 md:hover:text-white md:hover:underline lg:hover:underline'>Experience</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
    </div>
  );
}

export default Header;
