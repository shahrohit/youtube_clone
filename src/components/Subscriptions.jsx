import React, { useState } from 'react'
import Sidebar from './Sidebar'

const Subscriptions = () => {
    const [nav, setNav] = useState("Subscriptions")
    return (
      <div>
          <div className='w-0 sm:w-28  z-10'>
           <Sidebar nav={nav} setNav={setNav}/>  
        </div> 
      </div>
    )
  }

export default Subscriptions