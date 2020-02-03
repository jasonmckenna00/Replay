import React from 'react';
import convertToOffset from '../../util/date_time_util';


class VideoSearch extends React.Component{

    componentDidMount(){
        const searchInfo = this.props.match.params.searchInfo
        const that = this;
        this.props.fetchAllVideos()
            .then( () => that.props.searchVideos(searchInfo))

    }

    render(){
        if (!this.props.videos) return null;
        const {searchVids} = this.props;
        const searchLis = searchVids.map((video,i) => <SearchIndexItem video={video} key={i}/>)
        return <div className='video-search-container'>
            <h3> Related Searches </h3>
            {searchLis}

        </div>
    }

}



class SearchIndexItem extends React.Component{

    render(){
        const {video} = this.props
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
}

export default VideoSearch