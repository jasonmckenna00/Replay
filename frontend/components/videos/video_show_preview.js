import React from 'react'
import { Link } from 'react-router-dom';

class VideoShowPreview extends React.Component{



    render(){
        const {title,id} = this.props.video;
        let {user} = this.props;
        const name = user.first_name + ' ' + user.last_name;
        const initial = this.props.user.first_name[0];

        return <li className='video-preview'>
            <Link to={`/videos/${id}`} className='video-preview-thumbnail-link'>
                <img src={this.props.video.thumbnailUrl} className='video-preview-thumbnail' alt="" />
            </Link>
            <div className='video-preview-info'>
                <Link to={`/videos/${id}`}><h3 className='video-preview-title'>{title}</h3></Link>
                
                <h3 className='video-preview-username'>{name}</h3>
                <h3 className='video-preview-username'>Recommended for you</h3>
            </div>

        </li>
    }

}

export default VideoShowPreview