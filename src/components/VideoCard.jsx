import React from 'react'
import { Link } from 'react-router-dom'

const VideoCard = ({video:{id:{videoId},snippet}}) => {
  // console.log(videoId,snippet)
  return (
    <div className='flex-1'>
      <Link to={videoId? `/video/${videoId}`:""} className='flex flex-col justify-start '>
        <img src={snippet.thumbnails.medium.url} alt={snippet.description}  className=" object-cover rounded-2xl"/>
      </Link>
    </div>
  ) 
}

export default VideoCard