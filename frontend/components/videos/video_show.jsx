import React from 'react';
import CommentIndexItem from '../comments/comment_Index_Item'
import CommentForm from '../comments/comment_form';
import CommentFormContainer from '../comments/comment_form_container';
class VideoShow extends React.Component{

    componentDidMount(){
        Promise.all([this.props.fetchAllUsers(), 
            this.props.fetchAllVideos()])
                .then( () => this.props.fetchVideo(this.props.match.params.videoId))
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


    render(){
        if (!this.props.user) return null
        if (!this.props.video) return null
        const { video, user, comments, currentUser, updateComment, deleteComment, addCommentLike, addCommentDisLike, removeCommentLike} = this.props
        
        let editOrSub 
        const edit = <h2 className='next-button subscribe-button ' onClick={() =>this.goToEditPage() }>Edit</h2>
        const subscribe = editOrSub = <h2 className='next-button subscribe-button '>Subscribe</h2>
        

        if (currentUser){
            if (user.id === parseInt(currentUser.id)){
                editOrSub = edit
            } else {
               editOrSub = subscribe
            }
        }
        else {
            editOrSub = subscribe
        } 

        const commentLis = comments.map( (comment,i) => {
                    let commentAuthor = this.props.users[comment.user_id]
            return <CommentIndexItem
                    comment={comment}
                    key={i}
                    updateComment={updateComment}
                    deleteComment={deleteComment}
                    addCommentLike={addCommentLike}
                    addCommentDisLike={addCommentDisLike}
                    removeCommentLike={removeCommentLike}
                    currentUser={currentUser}
                    commentAuthor= {commentAuthor}
                    video={video}/>
        })

        const initial = user.first_name
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
                            <div className='video-likes'></div>
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