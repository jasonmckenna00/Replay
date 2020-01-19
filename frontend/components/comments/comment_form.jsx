import React from 'react'

class CommentForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {body: ''}
        this.handleComment = this.handleComment.bind(this)
    }

    handleComment(e){
        e.preventDefault();
        if (this.props.currentUser){
            this.props.createComment(this.state, this.props.videoId)
            this.setState({body: ''})
        } else {
            this.props.history.push('/login')
        }
    }

    update(field){
        return e => this.setState( {[field]: e.target.value})
    }

    render(){
        const propic = this.props.currentUser ? this.props.currentUser.first_name[0] :  <i className="fas fa-user-circle comment-loggedout-pro-pic"></i>
        const propicClass = this.props.currentUser ? 'pro-pic-initial' : '';
        return <div className='video-show-comment-form'>
                        <form className='comment-form' onSubmit={this.handleComment}>
                            <div className={`video-show-pro-pic ${propicClass}`}>{propic}</div>
                            <input type="text"
                                    placeholder='Add a public comment...'
                                    onChange={this.update('body')}/>
                            <button type='submit'>Add Comment</button>
                        </form >
                </div>
    }
}

export default CommentForm