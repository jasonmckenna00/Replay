import React from 'react';
import UserShowIndexItem from './user_show_index_item';
import convertToOffset from '../../util/date_time_util';

class UserShow extends React.Component{
    constructor(props){
        super(props)
        // this.state = {
        //     userVideos = {}
        // }
    }

    componentDidMount(){
        this.props.fetchAllVideos()
            .then( () => this.props.fetchVideo(this.props.firstVideoId));
    }



    render(){
        if (!this.props.user) return null;
        // const {first_name, last_name} = this.props.user;
        const {user, videos, firstVid} = this.props
        const {first_name, last_name} = user;
        const vid = firstVid ? 
                <video src={firstVid.videoUrl} controls autoPlay className='video-show-video' alt="" />
                :
                <h2 className = 'no-video'> User doesn't have any videos</h2>;
        
        let firstVidTitle = '';
        let firstVidViews = '';
        let firstVidCreatedAt = '';
        let firstVidDescription = '';

        if (firstVid){
            firstVidTitle = firstVid.title;
            firstVidViews = firstVid.views;
            firstVidCreatedAt = convertToOffset(firstVid.created_at);
            firstVidDescription = firstVid.description;
        }

        
        let videoLis = this.props.userVideos.map( (video,i) => {
            if (i !== 0 ){
                return <UserShowIndexItem key={i}/>

            }

        })
        // 

        
        return <>
            <div className='user-show-container'>
                <div className='user-show-header'>
                    <div className='user-show-profile-info'>
                        <div className='user-show-pro-pic'>
                            <i className="fas fa-user-circle user-show-pic"></i>
                        </div>
                        <div className='user-show-user-info'>
                            <h1 className='user-show-username'>{first_name + ' ' + last_name}</h1>
                            <h3 className='user-show-subscriber-count'>100 subscribers</h3>
                        </div>
                    </div>
                    {/* <button className='user-show-subscribe-button' >subscribe</button> */}
                    <div className='user-show-subscribe-button-container'>
                        <h2 className='user-show-subscribe-button'>SUBSCRIBE</h2>

                    </div>
                </div>

                <div className='user-show-videos-container'>
                    <div className='user-show-first-video-container'>
                        <div className='user-show-first-video'>
                            {vid}
                            {/* <video src={firstVid.videoUrl} controls autoPlay className='video-show-video' alt="" /> */}
                        </div>
                        <div className='user-show-first-video-info'>
                            <h2 className='user-show-first-video-title'>{firstVidTitle}</h2>
                            <h3 className='user-show-first-video-stats'> {firstVidViews + ' views' } • {firstVidCreatedAt}</h3>
                            <p className='user-show-first-video-description'>
                            {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.  */}
                            {firstVidDescription}
                            </p>
                        </div>
                    </div>

                    <h3>Uploads</h3>
                    <div className='user-show-index-container'>
                        {videoLis}
                    </div>
                </div>
            </div>
        </>
    }
}

export default UserShow

