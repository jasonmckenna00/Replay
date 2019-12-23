import {connect} from 'react-redux'
import CommentForm from './comment_form'
import {createComment} from '../../actions/comment_actions'
import {withRouter} from 'react-router-dom'


const msp = state => ({
    currentUser: state.session.currentUser
})

const mdp = dispatch => ({
    createComment: (comment, videoId) => dispatch(createComment(comment, videoId)),

})

const CommentFormContainer = connect(msp, mdp)(CommentForm)
export default withRouter(CommentFormContainer)
