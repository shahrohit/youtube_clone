import React from 'react'
import { Link } from 'react-router-dom'

const VideoCard = ({video:{id:{videoId},snippet}}) => {
  // console.log(videoId,snippet)
  return (
    <div className='   '>
      <Link to={videoId? `/video/${videoId}`:""} className='flex flex-col justify-start '>
        <img src={snippet.thumbnails.medium.url} alt={snippet.description}  className=" object-cover sm:rounded-2xl"/>
        <div>

        </div>
      </Link>
    </div>
  ) 
}

export default VideoCard