import React from 'react'
import Image from "next/image"
import { motion } from 'framer-motion'
import cardh from "./styles/cardheading.module.css"
import { useRouter } from 'next/router'
import en from './locales/en'
import gr from './locales/gr'
import Link from 'next/link'
const Service = () => {

    const router = useRouter();
  const { locale } = router;
  const t = locale === 'en' ? en : gr;

  return (
    <div className='flex flex-col mb-28'>
    
    <div className="flex text-center flex-col mt-6 mb-5">
      <p className='font-heading text-green-500 text-4xl font-extrabold mb-2'>{t.Service}</p>
<p className=' font-body text-black '>
Reach Your Goals with Our Professional Services
</p>
    </div>

    <div className="flex  flex-wrap justify-evenly items-center   ">
{t.ServiceContent.map((service,index)=>(
 <motion.div
 whileInView={{ x: [-100, 0], opacity: [0, 1] }}
 transition={{ duration: 0.5 }}
 key={index}
>
    <Link href={`/Services/${service.id}`}>
    <div  className='flex  flex-col   justify-center items-center mt-10 '>
    <div className='flex w-98 h-32 bo'>
    <Image src={`${service.image}`}width="400" height="10" alt='image'></Image>
    </div>
    <div className={`${cardh.card} justify-center`} >
<p className='text-green-500 p-4 font-heading'>{service.name}</p>
    </div>
</div>
    </Link>
</motion.div>
))}
{/* <div className='flex  flex-col   justify-center items-center '>
    <div className='flex w-88 h-32'>
    <Image src={services} width="350" height="10" alt='image'></Image>
    </div>
    <div className={cardh.card} >
<p className='text-black p-4 '>service 1</p>
    </div>
</div>
<div className='flex  flex-col   justify-center items-center '>
    <div className='flex w-88 h-32'>
    <Image src={services} width="350" height="10" alt='image'></Image>
    </div>
    <div className={cardh.card} >
<p className='text-black p-4 '>service 1</p>
    </div>
</div>
<div className='flex  flex-col   justify-center items-center '>
    <div className='flex w-88 h-32'>
    <Image src={services} width="350" height="10" alt='image'></Image>
    </div>
    <div className={cardh.card} >
<p className='text-black p-4 '>service 1</p>
    </div>
</div>
<div className='flex  flex-col   justify-center items-center '>
    <div className='flex w-88 h-32'>
    <Image src={services} width="350" height="10" alt='image'></Image>
    </div>
    <div className={cardh.card} >
<p className='text-black p-4 '>service 1</p>
    </div>
</div>
  <div className='flex  flex-col   justify-center items-center '>
    <div className='flex w-88 h-32'>
    <Image src={services} width="350" height="10" alt='image'></Image>
    </div>
    <div className={cardh.card} >
<p className='text-black p-4 '>service 1</p>
    </div>
</div> */}
    </div>
   
    </div>
  )
}

export default Service