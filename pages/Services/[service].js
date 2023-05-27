
import { useRouter } from 'next/router'
import en from '../../components/locales/en'
import gr from '../../components/locales/gr';
import Image from 'next/image';
import Form from "../../components/Form"
import style from "../../components/styles/gallery.module.css"
const services = () => {
  const router = useRouter();
  const {locale} = router;
  const servic  = router.asPath;
  let last= servic.slice(-1);
  const t = locale === 'en' ? en : gr;

  return (
   
    <div className=" flex   w-screen  mt-8 flex-col ">
     
    
      <h1 className="font-heading font-bold">{t.ServiceContent.name}</h1>
    <div className="flex justify-center items-center flex-col">
      {t.ServiceContent
        .filter((service) => service.id === parseInt(last))
        .map((filterService) => (
          <div className="flex flex-col justify-center items-center text-center">
            <div className="flex justify-center mb-14  ">
              <h1 className="text-green-600 text-3xl">
                {filterService.name}
              </h1>
            </div>
            <div className="flex justify-center text-center items-center flex-col ">
             
              <div className={style.gallery}>
{filterService.images.map((p)=>(


<img src={p.pict} width="200" height="200"/>

      
))}
</div>
               
             
              <div className="flex md:w-1/2 text-center">
                <p className="text-black text-1xl">{filterService.description}</p>
              </div>
            </div>
          </div>
        ))}
        <div className=' flex justify-center w-screen mt-5'>

        <Form/>
        </div>
    </div>
  </div>
  )
}

export default services