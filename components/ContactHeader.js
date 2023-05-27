import React from 'react'
import Image from 'next/image'
import {HiOutlineMail} from "react-icons/hi"
import {BsTelephone} from "react-icons/bs"
import {TfiLocationPin} from "react-icons/tfi"
import { useRouter } from 'next/router'
import en from './locales/en'
import gr from './locales/gr'
const ContactHeader = () => {
    const router = useRouter();
    const { locale } = router;
    const t = locale === 'en' ? en : gr;
  return (
    <>
    <div className='flex w-screen sticky top-0 bg-white  invisible md:visible z-30'>
        <div className="flex w-screen  justify-evenly items-center ">
            <div className='flex flex-row items-center w-auto h-auto '>

        <Image src="/logo.png" width={80} height={50} alt="logo"></Image>
        <p className='font-body font-semibold text-1xl -ml-5 mt-3'><span className="text-[#3ab349]">G</span>arden{" "}<span className='text-[#3ab349]'>S</span>ervice</p>
            </div>
        <div className='flex flex-row justify-center  items-center '>
            <div className="flex bg-[#3ab349] rounded-full">

    <HiOutlineMail size={35} className='p-2'/>
            </div>
<div className="flex flex-col justify-center m-2">
    <p className="text-[#3ab349] font-body mt-0 ">Email</p>
    <p className='text-black font-body text-1xl -mt-2'>abc@gmail.com</p>
</div>
        </div>
        <div className='flex flex-row justify-center items-center'>
            <div className="flex bg-[#3ab349] rounded-full">

    <BsTelephone size={35} className='p-2'/>
            </div>
<div className="flex flex-col justify-center m-2">
    <p className="text-[#3ab349] font-body mt-0 ">{t.phone}</p>
    <p className='text-black font-body text-1xl -mt-2'>+1234567890</p>
</div>
        </div>
        <div className='flex flex-row justify-center items-center'>
            <div className="flex bg-[#3ab349] rounded-full">

    <TfiLocationPin size={35} className='p-2'/>
            </div>
<div className="flex flex-col justify-center m-2">
    <p className="text-[#3ab349] font-body mt-0 ">{t.location}</p>
    <p className='text-black font-body text-1xl -mt-2'>germany</p>
</div>
        </div>

        </div>
    </div>
    </>
  )
}

export default ContactHeader