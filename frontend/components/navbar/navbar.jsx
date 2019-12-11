import React from 'react';
import LoginContainer from '../session/login_container'
import { withRouter, Route, Link } from 'react-router-dom';
import SignupContainer from '../session/signup_container'




class Navbar extends React.Component{



    render() {
        const  currPath  = this.props.history.location.pathname
        let tempClass = ((currPath === '/login') || (currPath === '/signup')) ? 'navbar-hidden' : '';

    return(
        <div>
            <Route path='/login' component={LoginContainer}/>
            <Route path='/signup' component={SignupContainer}/>
            <div className={`navbar ${tempClass}`} >
                <div className='nav-buttons'>
                    <div className='login-button'>
                        <ul>
                            <li className='login-button-circle'><button> <i class="fas fa-user-circle"></i></button></li> 
                            <li><Link to='/login' className='login-button-link'> Sign In</Link></li> 
                        </ul> 
                    </div>
                </div>
                    
                {/* <Link to='/'>Youtube Logo</Link> */}
            </div>
        </div>

        
    )}
}
//<i class="fas fa-th"></i> // for apps
// // user circle
//<i class="fas fa-video"></i> // video cam
// <i class="fas fa-bars"></i> // left nav bars
//<i class="fas fa-ellipsis-v"></i> // 3 dots
export default withRouter(Navbar)