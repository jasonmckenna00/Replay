import React from 'react';
import NavbarContainer from '../navbar/navbar_container';
import VideoIndexItem from './video_index_item'
import LoadingScreen from '../loading_screen';
import SideBarContainer from '../sidebar/side_bar_container'

class VideoIndex extends React.Component{
    constructor(props){
        super(props)
        this.recommendedVids;
    }

    componentDidMount(){
        // Promise.all([this.props.fetchAllUsers(), this.props.fetchAllVideos()])
        this.props.fetchAllVideos().then( () => {

            this.recommendedVids = this.random(8,this.props.videos.length)
        })
    }

    random(amount,videoCount){

        let recommended = new Set();
        for (let i = 0; i < amount; i++){
            const rng = Math.floor(Math.random()*videoCount);
            if (recommended.has(rng)){
                i -= 1;
                continue
            }
            recommended.add(rng)
        }
        return recommended
        
    }

    render(){
            if (!this.props.videos.length) return null;
            const { videos, users, searchVids, loading, searched } = this.props
            const allUsersArray = Object.values(users)
            let recommended = this.random(8, videos.length);
            let recommendedLis = [];
            const user0 = allUsersArray[0];
            const user1 = allUsersArray[1];
            const user2 = allUsersArray[2];
            let user0Videos = [];
            let user1Videos = [];
            let user2Videos = [];



            videos.forEach( video => {
                const videoLi = <VideoIndexItem 
                                key={video.id} 
                                video={video} 
                                user={users[video.user_id]} 
                                />

                if (recommended.has(video.id)){
                    recommendedLis.push(videoLi)
                }
    
                if (video.user_id === user0.id && user0Videos.length < 9){
                    user0Videos.push(videoLi)
                }
                if (video.user_id === user1.id  && user1Videos.length < 9){
                    user1Videos.push(videoLi)
                } 
                if (video.user_id === user2.id  && user2Videos.length < 9){
                    user2Videos.push(videoLi)
                }
          
            })

            // console.log(randomUserVideos2)
            return <>
                <div className='splashpage'>
                        <h2 className='video-index-header'> Recommended</h2>
                        <div id='recommendedLis'className='videos-container'> {recommendedLis} </div>

                        <div id='user0'className='videos-container random-user-videos'> 
        
                            <h2 className='video-index-section-header'>{user0.first_name + ' ' + user0.last_name}</h2>
                            <div className='videos-container'> {user0Videos} </div>
                            
                        </div>
                        <div id='user1'className='random-user-videos'>
                            <h2 className='video-index-section-header'>{user1.first_name + ' ' + user1.last_name}</h2>
                            <div className='videos-container' >{user1Videos} </div>
                            
                        </div>
                        <div id='user2'className='videos-container random-user-videos'> 
                            <h2 className='video-index-section-header'>{user2.first_name + ' ' + user2.last_name}</h2>
                            <div className='videos-container'> {user2Videos} </div>
                            
                        </div>


                    
                </div>
            </>
             
    }
}

export default VideoIndex