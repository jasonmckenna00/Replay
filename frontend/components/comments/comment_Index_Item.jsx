import React from 'react'

class CommentIndexItem extends React.Component{

    componentDidMount(){
        
    }

    render(){
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
                    <h2 className='comment-body-text'>{this.props.comment.body}</h2>
                <div className='comment-like-reply-container'>
                    <div className='comment-like-buttons'>
                        <i className="fas fa-thumbs-up comment-like"></i>
                        <h2>3</h2>
                        <i className="fas fa-thumbs-down comment-like"></i>
                    </div>
                    <div className='comment-reply-button'></div>
                </div>
            </div>

        </div>

    </>
    
    }

}

export default CommentIndexItem 