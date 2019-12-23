import React from 'react'

class EditCommentForm extends React.Component{
    constructor(props){
        super(props)
        this.state = this.props.comment
        this.handleComment = this.handleComment.bind(this)
    }

    update(){
        return e => this.setState( {body: e.target.value})
    }

    handleComment(e){
        this.props.updateComment(this.state, this.props.comment)

    }

    render(){

        return <>
            <form onSubmit={this.handleComment}>
                <input type="text" 
                    onChange={this.update('body')}
                    value={this.state.body}/>
                    <button type='submit'>Edit Comment</button>
            </form>
        </>
    }
}

export default EditCommentForm