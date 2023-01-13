import React, { useEffect, useState } from 'react'
import { fetchFromApi } from '../fetchFromApi'
import Sidebar from './Sidebar'
import Videos from './Videos'

const Feed = () => {
  // fetchFromApi
  const [selectedCategory, setSelectedCategory] = useState("New")
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
      <div className='w-24 '>
         <Sidebar/>  
      </div> 
    
    <div className='w-full'>
      <div className=''>
        <span className='bg-gray-200 text-lg  py-1 px-3 rounded-xl'>

        All Videos
        </span>
      </div>
      <Videos videos={videos}/>


    </div>
        



     
    </div>
  )
}

export default Feed