import React from 'react'
import Image from 'next/image'
import en from './locales/en'
import gr from './locales/gr'
import { motion } from 'framer-motion'
import { useRouter } from 'next/router'
const About = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === 'en' ? en : gr;

  return (
        <div className='flex flex-col mb-28'>
        <div className="flex text-center justify-center  mt-8 mb-10">
      <p className='font-heading text-green-500 text-4xl font-extrabold mb-2'>{t.About}</p>
    </div>
    

   
  <motion.div
   className='flex justify-evenly flex-col-reverse md:flex-row items-center text-center'
  whileInView={{ x: [-100, 0], opacity: [0, 1] }}
  transition={{ duration: 0.5 }}
    >
            <div className="flex md:w-1/2">

            <p>{t.AboutUsContent}</p>
            </div>

            <Image src="/image.jpg" width="400" height="400" alt="image"className='z-[-1] mb-4 md:mb-0'></Image>
                 </motion.div>
        </div>
    
      

    
  )
}

export default About