import React from 'react';
import {Dimensions} from 'react-native'

import { Player } from 'video-react';

class VideoShow extends React.Component{


    componentDidMount(){
        this.props.fetchVideo(this.props.match.params.videoId)
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.videoId !== this.props.match.params.videoId) {
          this.props.fetchVideo(this.props.match.params.videoId);
        }
    }




    render(){
        // debugger
        // if (this.props.loading.videoLoading || this.props.loading.userLoading) return <LoadingScreen />
        if (!this.props.video) return null
        return <div className='video-show-container'>
            <div className='video-group-container'>
                <div className='video-show-left-container'>
                    <div className='video-show-video-container'>
                        <video src={this.props.video.videoUrl} controls autoPlay className='video-show-video' alt="" />

                        
                    </div>
                    <div className='video-show-video-info-container'>
                        <h2 className='video-show-title'>DEMO TITLE</h2>
                        <div className='video-show-video-stats'>
                            <div className='video-play-info vpi-video'>
                                <h2 className='video-views'>420 views •</h2>
                                <h2 className='video-posted'> 1 month ago</h2>
                            </div>
                            <div className='video-likes'></div>
                        </div>
                    </div>
                    <div className='video-show-user-desc-container'>
                        <div className='video-show-user-container'>
                            <div className='video-show-profile-info'>
                                <div className='video-show-pro-pic'></div>
                                <div className='video-show-email-subscribers'>
                                    <h2 className='video-show-email'>demoUser</h2>
                                    <h3 className='video-show-subscribers '>100 subscribers</h3>
                                </div>                      
                            </div>
                            <h2 className='next-button subscribe-button '>Subscribe</h2>
                        </div>
                    </div>
                    <div className='description-container'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                    </div>
                    <div className='video-show-comment-container'>
                        <div className='video-show-comment-form'>
                            <h2 className='comment-counter'>7 Comments</h2>
                            <div className='comment-form'>
                                <div className='video-show-pro-pic'></div>
                                <input type="text" placeholder='Add a public comment...'/>
                            </div>
                        </div>
                        <div className='comments-list'></div>
                    </div>
                </div>
                
            <div className='video-show-right-container'></div>
            </div>
        </div>
    }
}


export default VideoShow