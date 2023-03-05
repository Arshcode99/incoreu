import Image from 'next/image';
import Link from 'next/link';
import { FaWhatsapp, FaGoogleDrive } from 'react-icons/fa';
import UnderLine from '../public/arrow.svg';

export default function Home() {
  return (
    <>
     <section class="text-gray-600 body-font">
  <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center w-4/5">
    <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">We Design, Build & Deploy Web Applications.</h1>
      <p class="mb-8 leading-relaxed">At WebRizen Studios, we understand that your website is the face of your business and it's crucial to make a great first impression. We are a full-service website development agency that is dedicated to creating visually stunning and highly functional websites that are tailored to meet the specific needs of our clients.</p>
      <div class="flex w-full md:justify-start justify-center items-end">
        <div class="relative mr-4 md:w-full lg:w-full xl:w-1/2 w-2/4">
          <label for="hero-field" class="leading-7 text-sm text-gray-600">Email*</label>
          <input type="text" id="hero-field" name="hero-field" class="w-full bg-gray-100 rounded border bg-opacity-50 border-gray-300 focus:ring-2 focus:ring-yellow-200 focus:bg-transparent focus:border-yellow-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
        </div>
        <button class="inline-flex text-white bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded text-lg">Connect</button>
      </div>
      <p class="text-sm mt-2 text-gray-500 mb-8 w-full">Connect Instantly on our platform & get quick response.</p>
      <div class="flex lg:flex-row md:flex-col">
        <button class="bg-gray-100 inline-flex py-3 px-5 rounded-lg items-center hover:bg-gray-200 focus:outline-none">
          <FaWhatsapp className='w-6 h-6' />
          <span class="ml-4 flex items-start flex-col leading-none">
            <span class="text-xs text-gray-600 mb-1">Talk On</span>
            <span class="title-font font-medium">Whatsapp</span>
          </span>
        </button>
        <button class="bg-gray-100 inline-flex py-3 px-5 rounded-lg items-center lg:ml-4 md:ml-0 ml-4 md:mt-4 mt-0 lg:mt-0 hover:bg-gray-200 focus:outline-none">
          <FaGoogleDrive className='w-6 h-6' />
          <span class="ml-4 flex items-start flex-col leading-none">
            <span class="text-xs text-gray-600 mb-1">Download Success Report</span>
            <span class="title-font font-medium">Google Drive</span>
          </span>
        </button>
      </div>
    </div>
    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img class="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600" />
    </div>
  </div>
</section>
    </>
  )
}
