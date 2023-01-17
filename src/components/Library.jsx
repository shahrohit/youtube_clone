import React, { useState } from 'react'
import Sidebar from './Sidebar'

const Library = () => {
  const [nav, setNav] = useState("Library")
  return (
    <div>
        <div className='w-0 sm:w-28  z-10'>
         <Sidebar nav={nav} setNav={setNav}/>  
      </div> 
    </div>
  )
}

export default Library