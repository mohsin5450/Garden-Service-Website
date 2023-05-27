import React from 'react'
import cardStyle from "./styles/contactCard.module.css"
import { BsTelephone } from 'react-icons/bs'
import {HiOutlineMail} from 'react-icons/hi'
import {TfiLocationPin} from 'react-icons/tfi'
import Form from './Form'

const Contacts = () => {
  return (
    <div className='flex flex-col mb-5 '>

         <div className="flex text-center flex-col mt-8 mb-8">
      <p className='font-heading text-green-500 text-4xl font-extrabold mb-2'>Contact Us</p>
<p className=' font-body text-black '>

You can Contact us through different ways!
</p>
    </div>
    <div className='flex md:flex-row justify-around md:ml-44  flex-col   items-center'>
        <div className="flex flex-col md:mt-36 ">

        <div className={cardStyle.card}>
        <div className='flex flex-col justify-center items-center'>
            <div className="flex bg-[#3ab349] rounded-full">

    <BsTelephone size={35} className='p-2'/>
            </div>
<div className="flex flex-col justify-center m-2">
    <p className="text-[#3ab349] font-body mt-0 mb-2 ">Phone</p>
    <p className='text-black font-body text-1xl -mt-2 font-bold'>+42242452223</p>
</div>
        </div>  
</div>
        <div className={cardStyle.card}>
        <div className='flex flex-col justify-center items-center'>
            <div className="flex bg-[#3ab349] rounded-full">

            <HiOutlineMail size={35} className='p-2'/>
            </div>
<div className="flex flex-col justify-center m-2">
    <p className="text-[#3ab349] font-body mt-0 mb-2 ">Email</p>
    <p className='text-black font-body text-1xl -mt-2 font-bold'>gardening</p>
</div>
        </div>  
</div>
        <div className={cardStyle.card}>
        <div className='flex flex-col justify-center items-center'>
            <div className="flex bg-[#3ab349] rounded-full">
            <TfiLocationPin size={35} className='p-2'/>
            </div>
<div className="flex flex-col justify-center m-2">
    <p className="text-[#3ab349] font-body mt-0 mb-2 ">Phone</p>
    <p className='text-black font-body text-1xl -mt-2 font-bold'>+42242452223</p>
</div>
        </div>  
</div>
        </div>
<Form/>
    </div>
    </div>
  )
}

export default Contacts