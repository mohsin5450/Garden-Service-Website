import React from 'react'
import HomeSlider from './homeSlider'
import Service from './Service'
import About from './About'
import Form from './Form'

const HomeComponent = () => {
  return (
    <div>
<section className="h-screen">
<HomeSlider/>
</section>
<section>
<Service/>
</section>
<section>
<About/>
</section>
<section className='flex justify-center'>
<Form/>
</section>



    </div>
  )
}

export default HomeComponent