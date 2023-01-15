import React from 'react'
// import ChannelCard from './ChannelCard'
import VideoCard from './VideoCard'

const Videos = ({videos}) => {
  console.log(videos)
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5   w-full py-3 relative top-11' >
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