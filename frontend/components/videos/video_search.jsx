import React from 'react';
import convertToOffset from '../../util/date_time_util';
import { Link } from 'react-router-dom';


class VideoSearch extends React.Component{

    componentDidMount(){
        const searchInfo = this.props.match.params.searchInfo
        const that = this;
        this.props.fetchAllVideos()
            .then( () => that.props.searchVideos(searchInfo))

    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.searchInfo !== this.props.match.params.searchInfo) {
          this.props.searchVideos(this.props.match.params.searchInfo);
        }
    }

    render(){
        if (!this.props.videos) return null;
        const {searchVids, users} = this.props;
        const searchLis = searchVids.map((video,i) => <SearchIndexItem 
                                                        video={video} 
                                                        user={users[video.user_id]} 
                                                        key={i}
                                                        />)
        return <div className='video-search-container'>
            <h3> Related Searches </h3>
            {searchLis}

        </div>
    }

}



class SearchIndexItem extends React.Component{
    render(){

        const {video, user} = this.props
        const name = user.first_name + ' ' + user.last_name

        return <div className='video-search-index-item'>
                    <Link to={`/videos/${video.id}`} className= 'video-search-index-thumbnail'>
                        <img src={video.thumbnailUrl} className='video-thumbnail' alt="" />
                    </Link>
                    <div className='video-search-info-container'>
                        <h2 className='video-show-title'>{video.title}</h2>
                        <div className='video-play-info vpi-video vpi-search-video'>
                                <Link to={`/users/${user.id}`}>
                                    <h2 className='video-views video-search-user'>{name}</h2>

                                </Link>
                                <h2 className='video-views'>{video.views} views •</h2>
                                <h2 className='video-posted'> {convertToOffset(video.created_at)}</h2>
                        </div>
                        <div className='description-container-search'>
                            <p>{video.description}</p>
                        </div>
                    </div>
                </div>
    }
}

export default VideoSearch