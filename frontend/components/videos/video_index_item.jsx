import React from 'react';
import { Link } from 'react-router-dom';
import convertToOffset from '../../util/date_time_util';



class VideoIndexItem extends React.Component{


    render(){
        const {title, user_id, id, views, created_at} = this.props.video;
        let {user} = this.props;

        const name = user.first_name + ' ' + user.last_name
        const initial = this.props.user.first_name[0]


        return <li className='video'>
            <Link to={`/videos/${id}`} className='video-thumbnail-link'>
                <img src={this.props.video.thumbnailUrl} className='video-thumbnail' alt="" />
            </Link>

            
            <div className='video-footer-container'>
                {/* <div className='user-pro-pic'><img src={window.peace} className='peace-sign' /></div> */}
                <h2 className='pro-pic-initial'>{initial}</h2>
                <div className='video-details-container'>
                    <div className='video-title'>{title}</div>
                    <Link to={`/users/${user.id}`} >
                        <div className='video-username'>{name}</div>
                    </Link>

                    <div className='video-play-info'>
                       <h2 className='video-views'>{views} views •</h2>
                       <h2 className='video-posted'> {convertToOffset(created_at)}</h2>
                    </div>
                </div>
            </div>
        </li>
    }
}

export default VideoIndexItem   