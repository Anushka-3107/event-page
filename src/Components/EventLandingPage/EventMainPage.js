import React from 'react'
import '../../style/eventPage.css'
import Branding from '../../Images/Astrix Branding.png'
import Logo from "../../Images/Logo.png"
import EventBg from "../../Images/ASTRIX EVENTS.png"


const EventMainPage = () => {
  return (
    <div
    className='eventMainPage'>
       {/* header */}
        <div className='header-logo'>
          <img src={Branding} 
            alt='Branding' className='branding'/>
          <h1 className='logo'>Astrix.</h1>
        </div>
{/* inner banner */}
        <div className='inner-banner'>
        {/* <h1 className='header-one'>ASTR<br />IX</h1>
        <h1 className='header-two'>EVE<br />NTS</h1> */}
        <img 
          src={EventBg}
          alt='event bg'
          className='eventBg'
        />
        </div>
    </div>
  )
}

export default EventMainPage