import React from 'react'

class UserShowIndexItem extends React.Component{




    render(){


        return <div className='user-show-index-item'>
                    <div className='user-show-index-item-video'>
                        {/* <video src={firstVid.videoUrl} controls autoPlay className='video-show-video' alt="" /> */}
                    </div>
                    <div className='user-show-index-video-info'>
                        <h2 className='user-show-index-video-title'>my test video</h2>
                        <h3 className='user-show-index-video-stats'>34 views • 2 weeks ago</h3>
                    </div>
                </div>
    }
}

export default UserShowIndexItem