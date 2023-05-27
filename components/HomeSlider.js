import Link from 'next/link';
import { useState, useEffect } from 'react'
import stylebutton from "./styles/buttonStyle.module.css";
import { useRouter } from 'next/router';
import gr from './locales/gr';
import en from './locales/en';
function HomeSlider() {
  const [slideIndex, setSlideIndex] = useState(0)

  const router = useRouter();
  const { locale } = router;
  const t = locale === 'en' ? en : gr;

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((slideIndex + 1) % slides.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [slideIndex])

  const slides = [
    {
      image: '/pic1.jpg',
      caption: 'Slide 1'
    },
    {
      image: '/pic2.jpg',
      caption: 'Slide 2'
    },
    {
      image: '/pic3.jpg',
      caption: 'Slide 3'
    },
    {
        image: '/pic3.jpg',
        caption: 'Slide 3'
      },
  ]

  return (
    <>
    <div className="flex h-screen w-screen flex-col justify-center items-center  ">
      {slides.map((slide, index) => (
        <div
          key={index}
          style={{
            
            
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            opacity: slideIndex === index ? 1 : 0,
            transition: 'opacity 2s',
            // zIndex: ,
            // backgroundColor: 'rgba(0, 0, 0, 0.5)',
            backgroundImage: `url(${slide.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            zIndex: -50
          }}
        >
          
        </div>
      ))}
      

      <div className="bg-black bg-opacity-50 flex w-screen md:h-[81vh] sm:h-[96.5vh] h-[98vh] justify-center items-center flex-col z-0  md:-mt-[8.2rem] sm:-mt-[8.9rem] -mt-[7.2rem] ">
            
           
       <div className="flex flex-col w-1/2 justify-center text-center md:mt-0 mt-10">
              <p className='font-heading md:text-4xl text-3xl text-white -z-30 '>{t.LandingContent}<span className='text-green-500 font-extrabold'>{t.CompanyName}</span>! </p>
            <p className='font-body text-white text-1xl mt-2 -z-30'>{t.LandingSubtitle}</p>
            </div>
    <div className='flex w-screen flex-row justify-center   items-center '>
            
            
            <Link href="/Services">
            <button className={`${stylebutton.button} ml-4 z-20 cursor-pointer `}>
            Services
            </button>
            </Link>
            <Link href="/Contact">
            <button className={`${stylebutton.button}  z-20 cursor-pointer`}>
            Contact US
            </button>
            </Link>
            </div>
            </div>

    </div>
  </>
  )
}

export default HomeSlider
