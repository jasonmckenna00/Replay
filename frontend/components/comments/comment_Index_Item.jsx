import React from 'react'
// import { updateComment } from '../../actions/comment_actions'
import EditCommentForm from './edit_comment_form'

class CommentIndexItem extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            body: this.props.comment.body,
            commentEditForm: false
        }
        this.handleComment = this.handleComment.bind(this)
    }

    handleComment(e){
        const {id, user_id} = this.props.comment
        e.preventDefault()
        this.props.updateComment({id: id, user_id: user_id, body: this.state.body}, this.props.comment)
        this.setState({commentEditForm: false})
    }
    update(){
        // debugger
        return e => this.setState( {body: e.target.value})
    }

    editCommentForm(){
        return <>
            <form onSubmit={this.handleComment}>
                <input type="text" 
                    onChange={this.update()}
                    value={this.state.body}/>
                    <button type='submit'>Edit Comment</button>
            </form>
        </>
    }

    render(){
        const {currentUser, deleteComment, comment, video, updateComment} = this.props
        // const removeComment = this.props.currentUser ? :
        let removeComment 
        let editComment
        if (currentUser){
            if (comment.user_id === parseInt(currentUser.id)){
                removeComment = <i className="fas fa-trash-alt" onClick={() => deleteComment(video.id, comment.id)}></i>
                editComment = <h2 className="fas fa-trash-alt" onClick={() => this.setState({commentEditForm: true})}>Edit</h2>

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
        

    return <>
        <div className='comment-index-item'>
            <div className='comment-pro-pic-container'>
            <div className='video-show-pro-pic'><img src={window.peace}/></div>
            </div>
            <div className='comment-body-container'>
                <div className='comment-user-name-container'>
                    <h2 className='comment-user-name'>demoUser</h2>
                    <h2 className='comment-date-posted'>2 days ago</h2>
                </div>
                {commentBody}
                <div className='comment-like-reply-container'>
                    <div className='comment-like-buttons'>
                        {/* <i className="fas fa-thumbs-up comment-like"></i>
                        <h2>3</h2>
                        <i className="fas fa-thumbs-down comment-like"></i> */}
                    </div>
                    <div className='comment-reply-button'></div>
                </div>
            </div>
            {removeComment}
            {editComment}
        </div>

    </>
    
    }

}

export default CommentIndexItem 