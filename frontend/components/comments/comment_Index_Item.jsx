import React from 'react'
// import { updateComment } from '../../actions/comment_actions'
import EditCommentForm from './edit_comment_form'

class CommentIndexItem extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            body: this.props.comment.body,
            commentEditForm: false,
            isLiked: false,
            upVoted: null
        }
        this.handleComment = this.handleComment.bind(this)
        this.handleLike = this.handleLike.bind(this)
        this.handleDisLike = this.handleDisLike.bind(this)
    }

    componentDidMount(){
        // debugger
        if (!this.props.currentUser) return null
        Object.values(this.props.comment.likes.likers).forEach( liker => {
            if (liker.user_id === this.props.currentUser.id){
                this.setState({isLiked: true, upVoted: liker.liked})
            }
        })   
    }

    handleComment(e){
        e.preventDefault()
        const {id, user_id} = this.props.comment
        this.props.updateComment({id: id, user_id: user_id, body: this.state.body}, this.props.comment);
        this.setState({commentEditForm: false});
    }

    handleLike(e){
        e.preventDefault();
        if (this.state.upVoted) return
        if (this.state.isLiked){
            this.props.removeCommentLike(this.props.comment.id)
        }
        this.props.addCommentLike(this.props.comment);
        this.setState({isLiked: true, upVoted: true})
    }

    handleDisLike(e){
        e.preventDefault();
        if (this.state.upVoted === false) return
        if (this.state.isLiked){
            this.props.removeCommentLike(this.props.comment.id)
        }
        this.props.addCommentDisLike(this.props.comment);
        this.setState({isLiked: true, upVoted: false})
    }
    update(){
        return e => this.setState( {body: e.target.value});
    }

    cancelComment(){
        this.setState({commentEditForm: false, body: this.props.comment.body});
    }

    editCommentForm(){
        return <>
            <form onSubmit={this.handleComment} className='comment-form edit-comment-form'>
                <input type="text" 
                    onChange={this.update()}
                    value={this.state.body}/>
                    <button type='submit'>Save</button>
                    <button onClick={()=> this.cancelComment()}>Cancel</button>
            </form>
        </>
    }

    render(){
        // if (!this.props.commentAuthor) return null
        const {currentUser, deleteComment, comment, video, commentAuthor} = this.props
        let removeComment 
        let editComment
        if (currentUser && !this.state.commentEditForm){
            if (comment.user_id === currentUser.id){
                removeComment = <i className="fas fa-trash-alt" onClick={() => deleteComment(video.id, comment.id)}></i>
                editComment = <i className="fas fa-edit" onClick={() => this.setState({commentEditForm: true})}></i>
            } else {
               removeComment = null
               editComment = null
            }
        }
        else {
            removeComment = null
            editComment = null
        } 
        
        let commentBody = this.state.commentEditForm ? this.editCommentForm()
                        : <h2 className='comment-body-text'>{comment.body}</h2>
        
        const commenter = `${commentAuthor.first_name} ${commentAuthor.last_name}`;
        const letter = `${commentAuthor.first_name[0]}`;
        const upVoted = this.state.upVoted ? 'upvoted' : '';
        const downVoted = (this.state.upVoted === false )? 'downvoted' : '';
        
    return <>
        <div className='comment-index-item'>
            <div className='comment-pro-pic-container'>
            {/* <div className='comment-pro-pic'><img src={window.peace}/></div> */}
                <h2 className='pro-pic-initial'>{letter}</h2>
            </div>
            <div className='comment-body-container'>
                <div className='comment-user-name-container'>
                    <h2 className='comment-user-name'>{commenter}</h2>
                    <h2 className='comment-date-posted'>2 days ago</h2>
                </div>
                {commentBody}
                <div className='comment-like-reply-container'>
                    <div className='comment-like-buttons'>
                        <i className={`fas fa-thumbs-up comment-like ${upVoted}`} onClick={this.handleLike}></i>
                        <h2>{this.props.comment.likes.counter}</h2>
                        <i className={`fas fa-thumbs-up comment-like ${downVoted}`} onClick={this.handleDisLike}></i>
                    </div>
                    <div className='comment-reply-button'></div>
                </div>
            </div>
            {editComment}
            {removeComment}
        </div>

    </>
    
    }

}

export default CommentIndexItem 