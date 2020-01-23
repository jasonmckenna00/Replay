import React from 'react'
import {Link} from 'react-router-dom'

class UserShowIndexItem extends React.Component{




    render(){

        const { title, views, created_at, thumbnailUrl, id } = this.props.video;
        const date = this.props.convertToOffset(created_at);
        return <div className='user-show-index-item'>
                    <div className='user-show-index-item-video'>
                        {/* <video src={firstVid.videoUrl} controls autoPlay className='video-show-video' alt="" /> */}
                        <Link to={`/videos/${id}`} className='video-thumbnail-link'>
                            <img src={thumbnailUrl} className='video-thumbnail' alt="" />
                        </Link>
                    </div>
                    <div className='user-show-index-video-info'>
                        <h2 className='user-show-index-video-title'>{title}</h2>
                        <h3 className='user-show-index-video-stats'>{views} views • {date}</h3>
                    </div>
                </div>
    }
}

export default UserShowIndexItem