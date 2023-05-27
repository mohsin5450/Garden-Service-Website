import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const Footer = () => {
  return (
   

    <div  style={{
        backgroundImage: "url(/grass.jpeg)",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        zIndex: -1
      }} className="flex flex-col flex-end">
        <div className='bg-white bg-opacity-20'>

<div className='flex justify-evenly items-center mt-8 mb-8 '>
    
<div className='flex flex-row items-center w-1/8  h-1/8 bg-white '>

<Image src="/logo.png" width={80} height={50} alt="logo"></Image>
<p className='font-body font-semibold text-1xl -ml-5 mt-3 pr-3'><span className="text-[#3ab349]">G</span>arden{" "}<span className='text-[#3ab349]'>S</span>ervice</p>
    </div>
    <div>
        <p className='text-black font-heading text-1xl font-bold'>Contact</p>
<p className='text-black font-body  text-1xl'>+12345567</p>
<p className='text-black font-body  text-1xl'>abc@gmail.com</p>
<p className='text-black font-body  text-1xl'>germany</p>
    </div>
    <div>
<p className='text-black font-heading text-1xl font-bold'>Links</p>
<Link href="/" >
<p className='text-blue-700 font-body  text-1xl'>Home</p>
</Link>

<Link href="/Services">

<p className='text-blue-700 font-body  text-1xl'>Service</p>
</Link>
<Link href="/AboutUs">

<p className='text-blue-700 font-body  text-1xl'>AboutUS</p>
</Link>
<Link href="/Contact">
<p className='text-blue-700 font-body  text-1xl'>Contact</p>
</Link>
    </div>
</div>
        </div>

    </div>
    
  )
}

export default Footer