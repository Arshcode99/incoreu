import React from 'react';
import Logo from '../public/WebRizen-Studios.webp';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  return (
    <>
    <header class="text-gray-600 body-font">
  <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
    <Image src={Logo} alt='WebRizen Studios' className='w-10 h-10' title='WebRizen Studios'/>
    </a>
    <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
      <a class="mr-5 hover:text-gray-900">Services</a>
      <a class="mr-5 hover:text-gray-900">Portfolio</a>
      <a class="mr-5 hover:text-gray-900">About</a>
    </nav>
    <button class="inline-flex items-center bg-gray-100 border-0 py-2 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Connect
      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </button>
  </div>
</header>
    </>
  );
}

export default Navbar;
