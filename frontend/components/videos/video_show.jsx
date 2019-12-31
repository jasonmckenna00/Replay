import React from 'react';
import CommentFormContainer from '../comments/comment_form_container';
import CommentIndexItemContainer from '../comments/comment_index_item_container';
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
        Promise.all([this.props.fetchAllUsers(), this.props.fetchAllVideos()])
            .then( () => this.props.fetchVideo(this.props.match.params.videoId))
            // .then( () => Object.values(this.props.video.likes.likers)
            //     .forEach( liker => {
            //         if (liker.user_id === this.props.currentUser.id){
            //             this.setState({isLiked: true, upVoted: liker.liked})
            //         }
            //     })
            // )   
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
        this.props.addVideoLike(this.props.video);
        this.setState({isLiked: true, upVoted: false})
    }

    render(){
        // if (!!this.props.user) return null
        if (!this.props.video) return null
        const { video, user, comments, currentUser, updateComment, deleteComment, addCommentLike, addCommentDisLike, removeCommentLike} = this.props
        let editOrSub 
        const edit = <h2 className='next-button subscribe-button ' onClick={() =>this.goToEditPage() }>Edit</h2>
        const subscribe = <h2 className='next-button subscribe-button '>Subscribe</h2>
    

        if (currentUser){
            (user.id === parseInt(currentUser.id)) ? editOrSub = edit : editOrSub = subscribe;
        } else {
            editOrSub = subscribe
        } 

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

        // debugger
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
                                <h2 className='video-views'>40 views •</h2>
                                <h2 className='video-posted'> 1 month ago</h2>
                            </div>
                            <div className='video-likes'>
                                <i className="fas fa-thumbs-up comment-like" onClick={this.handleLike}></i>
                                <h2>{upvotes}</h2>
                                <i className="fas fa-thumbs-down comment-like" onClick={this.handleDisLike}></i>
                                <h2>{downvotes}</h2>

                            </div>
                        </div>
                    </div>
                    <div className='video-show-user-desc-container'>
                        <div className='video-show-user-container'>
                            <div className='video-show-profile-info'>
                                {/* <div className='video-show-pro-pic'><img src={window.peace}/></div> */}
                                <h2 className='pro-pic-initial'>{initial}</h2>
                                <div className='video-show-email-subscribers'>
                                    <h2 className='video-show-email'>{user.email}</h2>
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
                
            <div className='video-show-right-container'></div>
            </div>
        </div>
    }
}


export default VideoShow