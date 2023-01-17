import React, { useEffect, useState } from 'react'
import { Category } from '../data'

import { fetchFromApi } from '../fetchFromApi'
import Sidebar from './Sidebar'
import Videos from './Videos'

const Feed = () => {
  // fetchFromApi
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [nav, setNav] = useState("Home")
  const [videos, setVideos] = useState([])
  useEffect(() => {
    const fetchData=async()=>{

      const data= await fetchFromApi(`search?part=snippet&q=${selectedCategory}`);
      // console.log(data.items)  
      setVideos(data.items)
    }
   
    fetchData();
  }, [selectedCategory])
  
  return (
    <div className="flex w-full">
      <div className='w-0 sm:w-28  z-10'>
         <Sidebar nav={nav} setNav={setNav}/>  
      </div> 

      
    
    <div className='w-full'>
      <div className='fixed border z-20 bg-white w-full p-2'>
        <div className='flex  gap-2 overflow-x-scroll hide-scrollbar w-full bg-screen'>
            {
              Category.map((category,id)=>{
                return  <span key={id} className={`${selectedCategory === category ?"bg-black text-white" :"bg-gray-200" }  text-sm  py-1 px-4 rounded-lg  min-w-fit max-w-fit cursor-pointer  `} onClick={()=>setSelectedCategory(category)}>
                <p > {category}</p>
              </span>
              })
            }
          </div>
      </div>
      <Videos videos={videos}/>


    </div>
        



     
    </div>
  )
}

export default Feed