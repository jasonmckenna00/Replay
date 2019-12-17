import React from 'react'
import LoadingScreen from '../loading_screen';

class VideoIndexItem extends React.Component{


    render(){
        // debugger
    
        const {title, user_id} = this.props.video;
        let {user} = this.props;
        // debugger
        if (!user){
            // debugger
            user = this.props.fetchUser(user_id)
        } 
        if (this.props.loading.videoLoading || this.props.loading.userLoading) return <LoadingScreen />
        const choppedEmail = this.props.user.email.split('@')[0]
        // const choppedEmail = 'fakeemail69'

        return <li className='video'>
            <img src={this.props.video.thumbnailUrl} className='video-thumbnail' alt=""/>
            <div className='video-footer-container'>
                <div className='user-pro-pic'></div>
                <div className='video-details-container'>
                    <div className='video-title'>{title}</div>
                    <div className='video-email'>{choppedEmail}</div>
                    <div className='video-play-info'>
                       <h2 className='video-views'>420 views •</h2>
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