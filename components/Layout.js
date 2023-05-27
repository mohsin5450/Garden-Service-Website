import React from 'react'
import ContactHeader from './ContactHeader'
import Footer from './Footer'
import NavBar from './Navbar'
import Whatsapp from './Whatsapp'
import LanguageButton from './LanguageButton'

const Layout = ({ children }) => {
  return (
    <div>
<ContactHeader/>
<NavBar/>
{/* <LanguageButton/> */}
<Whatsapp/>
<main>{children}</main>
<Footer/>
</div>
  )
}

export default Layout