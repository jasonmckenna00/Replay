import React from 'react';
import convertToOffset from '../../util/date_time_util';


class VideoSearch extends React.Component{

    componentDidMount(){
        this.props.fetchAllVideos()
            .then( () => this.props.match.params.searchInfo)

    }

    searchIndexItem(video){
        return <div className='video-search-index-item'>
                    <div className= 'video-search-index-thumbnail'>
                        <img src={video.thumbnailUrl} className='video-thumbnail' alt="" />
                    </div>
                    <div className='video-search-info-container'>
                        <h2 className='video-show-title'>{video.title}</h2>
                        <div className='video-play-info vpi-video'>
                                <h2 className='video-views'>Demo Demo</h2>
                                <h2 className='video-views'>{video.views} views •</h2>
                                <h2 className='video-posted'> {convertToOffset(video.created_at)}</h2>
                        </div>
                        <div className='description-container-search'>
                            <p>{video.description}</p>
                        </div>
                    </div>
                </div>
    }
    render(){
        if (!this.props.videos) return null;
        const {searchVids} = this.props;
        const searchLis = searchVids.map(video => this.searchIndexItem(video))
        return <div className='video-search-container'>
            <h3> Related Searches </h3>
            {searchLis}

        </div>
    }

}

export default VideoSearch