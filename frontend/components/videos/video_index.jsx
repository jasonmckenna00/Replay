import React from 'react';
import NavbarContainer from '../navbar/navbar_container';
import VideoIndexItem from './video_index_item'
import LoadingScreen from '../loading_screen';
import SideBarContainer from '../sidebar/side_bar_container'

class VideoIndex extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        // Promise.all([this.props.fetchAllUsers(), this.props.fetchAllVideos()])
        this.props.fetchAllVideos()
    }

    // componentDidUpdate(prevProps) {
    //     if (prevProps.location.pathname !== this.props.history.location.pathname) {
    //         Promise.all([this.props.fetchAllUsers(), this.props.fetchAllVideos()]);
    //     }
    //   }  


    render(){
            const { videos, users, searchVids, loading, searched } = this.props
            const videosLis = videos.map( video => <VideoIndexItem 
                                                    key={video.id} 
                                                    video={video} 
                                                    user={users[video.user_id]} 
                                                    loading={loading}/>)  
            const searchLis = searchVids.map ( (video,i) => {
                return <VideoIndexItem 
                            key={i} 
                            video={video} 
                            user={users[video.user_id]} 
                            loading={loading}/>  
                })
            
            
            // debugger  
            const videoOutput = searched ? searchLis : videosLis;
            return <>
                <div className='splashpage'>
                    {/* <SideBarContainer /> */}
                    <div>
                        <h2 className='video-index-header'> Recommended</h2>
                        <ul className='videos-container'> {videoOutput} </ul>
                    </div>
                </div>
            </>
             
                
            // }
    }
}

export default VideoIndex