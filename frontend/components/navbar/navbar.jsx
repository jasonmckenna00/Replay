import React from 'react';
import LoginContainer from '../session/login_container'
import { withRouter, Route, Link } from 'react-router-dom';
import SignupContainer from '../session/signup_container'




class Navbar extends React.Component{
    constructor(props){
        super(props)
        this.signIn = this.signIn.bind(this)
    }

    signIn(){
        return this.props.history.push('/login')
    }

    loginStatus(){  
    
        if (this.props.currUser){
            return (
            <div>
                <i class="fas fa-play-circle"></i>
            </div>)
        }   else {
            return (
            <div className='signin-button-container' onClick={()=> this.signIn()}>
                <i className="fas fa-user-circle"></i>
                <h2 className='signin-button-link'>SIGN IN</h2>
            </div>
            )
        }
    }



    render() {
        const  currPath  = this.props.history.location.pathname
        let tempClass = ((currPath === '/login') || (currPath === '/signup')) ? 'navbar-hidden' : '';

    return(
        <>
            <Route path='/login' component={LoginContainer}/>
            <Route path='/signup' component={SignupContainer}/>


            <div className={`navbar-container ${tempClass}`} >
                <div className='navbar'>
                    <div className='side-bar-and-replay-logo'>

                        <div className='side-bar-button'>
                            <i className="fas fa-bars"></i>
                        </div>
                        <div className='replay-logo'>
                            <img src={window.replay_logo} className='logo-signup'/> 
                        </div>
                    </div>
                    
                    <div className='search-bar-container'>
                        <div className='search-bar'>
                            <input type="text" className='search-bar-input' placeholder='Search'/>
                            <i className="fas fa-search"></i>
                        </div>
                    </div>

                    <div className='right-buttons'>
                        <div className='camera-icon'>
                            <i className="fas fa-video"></i>
                        </div>
                        <div className='apps-icon'>
                            <i className="fas fa-th"></i> 
                        </div>
                        <div className='settings-icon'>
                            
                            <i className="fas fa-ellipsis-v"></i>
                        </div>
                        {this.loginStatus()}
                    </div>
                </div>
                    
                {/* <Link to='/'>Youtube Logo</Link> */}











            </div>
        </>

        
    )}
}
//<i class="fas fa-th"></i> // for apps
// // user circle
//<i class="fas fa-video"></i> // video cam
// <i class="fas fa-bars"></i> // left nav bars
//<i class="fas fa-ellipsis-v"></i> // 3 dots
export default withRouter(Navbar)