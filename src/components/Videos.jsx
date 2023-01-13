import React from 'react'
import ChannelCard from './ChannelCard'
import VideoCard from './VideoCard'

const Videos = ({videos}) => {
  return (
    <div className='flex flex-wrap gap-6  w-full ' >
      {
        videos.map((video,id)=>{
         return <div key={id}>
            {
              video.id.videoId&&<VideoCard video={video} />
            }
            {/* {video.id.channelId&& <ChannelCard channel={video}/>} */}
         </div>
        })
      }
    </div>
  )
}

export default Videos