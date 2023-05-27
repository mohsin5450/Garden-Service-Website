import Link from 'next/link'
import { useState } from 'react'
import { FaBars, FaTimes } from "react-icons/fa";
import { useRouter } from 'next/router';
import en from './locales/en';
import gr from './locales/gr';
import Image from 'next/image'
function Navbar() {
  // State for the navbar menu visibility
  const [open, setopen] = useState(false);
 
  const router = useRouter();
  const { locale } = router;
  const t = locale === 'en' ? en : gr;

  const changeLanguage = (e) => {
    const locale = e.target.value;
    router.push(router.pathname, router.asPath, { locale });
  };
  return (
    <nav className="flex items-center justify-evenly  md:-ml-5   border-double md:border-b-2  md:bg-[#3ab349] md:bg-opacity-70 ">
    <div
      className="flex flex-row-reverse w-screen md:hidden justify-between items-center fixed  cursor-pointer z-20 top-0 md:top-4 bg-white "
    >
      <div onClick={() => setopen(!open)} className=" bg-[#3ab349] rounded-full mr-2">

      {open ? <FaTimes size={50} className="p-3 " color='#ffff' /> : <FaBars size={50} className=" p-3 " color='#ffff'/>}
      </div>
      <div className='flex flex-row items-center '>

<Image src="/logo.png" width={80} height={50} alt="logo"></Image>
<p className='font-body font-semibold text-1xl -ml-5 mt-3'><span className="text-[#3ab349]">G</span>arden{" "}<span className='text-[#3ab349]'>S</span>ervice</p>
    </div>
    </div>
    <ul
      className={` md:pl-10 pr-28 md:static fixed duration-300 ease-linear top-0 md:h-auto h-screen z-10  bg-white md:bg-transparent ${
        !open ? "right-[-100%] " : "right-0 "
      }`}
    >
      <div className="mt-24 md:mt-0">

      
        <li
          
          className="  md:inline-block  md:ml-36 ml-5 md:my-0  border-b-4 border-transparent hover:border-[#3ab349] duration-300 "
        >
          <Link
          href="/"
            className=" text-[#3ab349] md:text-white cursor-pointer font-body font-bold text-1xl inline-block py-3"
          >
            Home
          </Link>
          </li>
          <li
          
          className="  md:inline-block  md:ml-36 ml-5 md:my-0  border-b-4 border-transparent hover:border-[#3ab349] duration-300 "
        >
          
          <Link
          href="/Services"
            className=" text-[#3ab349] md:text-white cursor-pointer font-body font-bold text-1xl inline-block py-3"
          >
            Services
          </Link>
        </li>

        <li
          
          className="  md:inline-block  md:ml-36 ml-5 md:my-0  border-b-4 border-transparent hover:border-[#3ab349] duration-300 "
        >

          <Link
          href="/AboutUs"
            className=" text-[#3ab349] md:text-white cursor-pointer font-body font-bold text-1xl inline-block py-3"
          >
            About Us
          </Link>
        </li>

        <li
          
          className="  md:inline-block  md:ml-36 ml-5 md:my-0  border-b-4 border-transparent hover:border-[#3ab349] duration-300 "
        >

        
          <Link
          href="/Contact"
            className=" text-[#3ab349] md:text-white cursor-pointer font-body font-bold text-1xl inline-block py-3"
          >
            Contact
          </Link>
        </li>
        <li
          
          className="  md:inline-block  md:ml-36 ml-5 md:my-0  border-b-4 border-transparent hover:border-[#3ab349] duration-300 "
        >
        <select
            onChange={changeLanguage}
            defaultValue={locale}
            className="text-white text-shadow-sm text-lg bg-transparent tracking-wide"
          >
            <option className="text-black" value="en">EN</option>
            <option className="text-black" value="gr">GR</option>
          </select>
          
          </li>
      </div>
    </ul>
  </nav>
  )
}

export default Navbar
