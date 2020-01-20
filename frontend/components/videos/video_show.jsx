import React from 'react';
import CommentFormContainer from '../comments/comment_form_container';
import CommentIndexItemContainer from '../comments/comment_index_item_container';
import VideoShowPreview from './video_show_preview';
import convertToOffset from '../../util/date_time_util';

class VideoShow extends React.Component{
    constructor(props){
        super(props)
        this.state= {
            isLiked: false,
            upVoted: null
        }
        this.handleLike = this.handleLike.bind(this)
        this.handleDisLike = this.handleDisLike.bind(this)
    }
    componentDidMount(){
        this.props.fetchAllVideos()
            .then( () => this.props.fetchVideo(this.props.match.params.videoId))
            .then( () => {
                let that = this
                return Object.values(this.props.video.likes.likers)
                        .forEach( liker => {
                            if (liker.user_id === that.props.currentUser.id){
                                that.setState({isLiked: true, upVoted: liker.liked})
                            }
                        })
            })   
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.videoId !== this.props.match.params.videoId) {
          this.props.fetchVideo(this.props.match.params.videoId);
        }
    }


    update(field){
        return e => this.setState( {[field]: e.target.value})
    }

    goToEditPage(){
        this.props.history.push(`/videos/${this.props.video.id}/edit`)
    }

    handleLike(e){
        e.preventDefault();
        if (this.state.upVoted) return
        if (this.state.isLiked){
            this.props.removeVideoLike(this.props.video.id)
        }
        this.props.addVideoLike(this.props.video);
        this.setState({isLiked: true, upVoted: true})
    }

    handleDisLike(e){
        e.preventDefault();
        if (this.state.upVoted === false) return
        if (this.state.isLiked){
            this.props.removeVideoLike(this.props.video.id)
        }
        this.props.addVideoDisLike(this.props.video);
        this.setState({isLiked: true, upVoted: false})
    }

    render(){
        // if (!!this.props.user) return null
        if (!this.props.video || !this.props.users) return null
        const { video, user, comments, currentUser, videos, users} = this.props
        let editOrSub 
        const edit = <h2 className='next-button subscribe-button ' onClick={() =>this.goToEditPage() }>Edit</h2>
        const subscribe = <h2 className='next-button subscribe-button '>Subscribe</h2>
    

        if (currentUser){
            (user.id === parseInt(currentUser.id)) ? editOrSub = edit : editOrSub = subscribe;
        } else {
            editOrSub = subscribe
        } 

        
        const videosLis = videos.map( video => {
            if (video.id !== this.props.video.id){
                return <VideoShowPreview 
                        key={video.id} 
                        video={video} 
                        user={users[video.user_id]} 
                        />  
            }
        })
        
        
        

        const commentLis = comments.map( (comment,i) => {
                    let commentAuthor = this.props.users[comment.user_id]
            return <CommentIndexItemContainer
                    comment={comment}
                    key={i}
                    commentAuthor= {commentAuthor}
                    video={video}/>
        })

        const initial = user.first_name ? (user.first_name)[0] : null;
        const upvotes = video.likes ? video.likes.upvotes : null;
        const downvotes = video.likes ? video.likes.downvotes : null;
        const upVoted = this.state.upVoted ? 'upvoted' : '';
        const downVoted = (this.state.upVoted === false )? 'downvoted' : '';

        // console.log(videosLis)
        return <div className='video-show-container'>
            <div className='video-group-container'>
                <div className='video-show-left-container'>
                    <div className='video-show-video-container'>
                        <video src={this.props.video.videoUrl} controls autoPlay className='video-show-video' alt="" />    
                    </div>
                    <div className='video-show-video-info-container'>
                        <h2 className='video-show-title'>{video.title}</h2>
                        <div className='video-show-video-stats'>
                            <div className='video-play-info vpi-video'>
                                <h2 className='video-views'>{video.views} views •</h2>
                                <h2 className='video-posted'> {convertToOffset(video.created_at)}</h2>
                                {/* <h2> {convertToOffset(video.created_at)}</h2> */}
                            </div>
                            <div className='video-likes'>
                                <i className={`fas fa-thumbs-up video-like-button ${upVoted}`} onClick={this.handleLike}></i>
                                <h2>{upvotes}</h2>
                                <i className={`fas fa-thumbs-down video-like-button ${downVoted}`} onClick={this.handleDisLike}></i>
                                <h2>{downvotes}</h2>

                            </div>
                        </div>
                    </div>
                    <div className='video-show-user-desc-container'>
                        <div className='video-show-user-container'>
                            <div className='video-show-profile-info'>
                                {/* <div className='video-show-pro-pic'><img src={window.peace}/></div> */}
                                <h2 className='pro-pic-initial-video'>{initial}</h2>
                                <div className='video-show-email-subscribers'>
                                    <h2 className='video-show-email'>{user.first_name +' ' + user.last_name}</h2>
                                    <h3 className='video-show-subscribers '>100 subscribers</h3>
                                </div>                      
                            </div>
                            {editOrSub}
                        </div>
                    </div>
                    <div className='description-container'>
                        <p>{video.description}</p>
                        {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p> */}
                    </div>
                    <div className='video-show-comment-container'>
                            <h2 className='comment-counter'>{commentLis.length} Comments</h2>
                            <CommentFormContainer videoId={video.id}/>
                            <div className='comments-list' >{commentLis}</div>
                    </div>
                </div>
                
            <div className='video-show-right-container'>
                <h2 className='up-next'>Up next</h2>
                {videosLis}
            </div>
            </div>
        </div>
    }
}


export default VideoShow