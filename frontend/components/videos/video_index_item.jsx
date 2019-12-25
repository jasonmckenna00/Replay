import React from 'react'
import LoadingScreen from '../loading_screen';
import { withRouter, Route, Link } from 'react-router-dom';


class VideoIndexItem extends React.Component{


    render(){
        // debugger
    
        const {title, user_id, id} = this.props.video;
        let {user} = this.props;

        const choppedEmail = this.props.user.email.split('@')[0]


        return <li className='video'>
            <Link to={`/videos/${id}`} className='video-thumbnail-link'>
                <img src={this.props.video.thumbnailUrl} className='video-thumbnail' alt="" />
            </Link>

            
            <div className='video-footer-container'>
                <div className='user-pro-pic'><img src={window.peace} className='peace-sign' /></div>
                <div className='video-details-container'>
                    <div className='video-title'>{title}</div>
                    <div className='video-email'>{choppedEmail}</div>
                    <div className='video-play-info'>
                       <h2 className='video-views'>1000 views •</h2>
                       <h2 className='video-posted'> 1 month ago</h2>
                    </div>
                </div>
            </div>
            



            {/* {title} */}
            {/* {user_id} */}
        </li>
        
    }



}

export default VideoIndexItem   