import React from 'react';
import { withRouter, Route, Link } from 'react-router-dom';

class LoginForm extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            email: "",
            password: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.demoUser = this.demoUser.bind(this)
        this.checkEmail = this.checkEmail.bind(this)
    }

    handleSubmit(e){
        e.preventDefault()
        // debugger
        this.props.login(this.state)
            .then( () =>this.props.history.push('/'))
    }

    update(field){
        return e => this.setState( {[field]: e.target.value})
    }

    demoUser(){
        return this.props.login({
                first_name: 'Demo',
                 last_name: 'User',
                 email:'demo@trialaccount.com', 
                 password: 'hunter2'
             })
            .then( () => this.props.history.push('/'))
    }


    emailForm(){

        return <>
        
            <h1 className='signin-header'>Sign in</h1>
            <h2 className='signin-header-text'>to continue to RePlay</h2>
            <form >
                <div className='form-input-container'> 
                    <input type="text" 
                    onChange={this.update('email')} 
                    className='form-input'
                    placeholder='Your email address'
                    />   
                </div>
                <h2 onClick={()=> this.demoUser()} className='demo-user-button'>Try Demo User</h2>
                {/* <label> Password 
                    <input type="password" onChange={this.update('password')}/>   
                </label> */}
                <br/>
                
            
            
                <h3 className='learn-more'>Not your computer? Use Guest mode to sign in privately.</h3>
                <h3 className='learn-more-link'> Learn More </h3>
        
                <div className='next-form-container'>
                    <Link to='/signup' className='create-account-link'>Create account</Link>
                    <h2 onClick={this.checkEmail} className='next-button'><p>Next</p></h2>
                </div>
            </form>
        </>
    }

    passwordForm(){
        return(<>

            <div className='signin-header'>
                <h2 className='user-name'>Hi Jason</h2>
                <h2 className='user-email'><p>jasonmckenna00@gmail.com</p></h2>
            </div>
            
            <form onSubmit={this.handleSubmit}>
                <div className='form-input-container'> 
                    <input type="password" 
                    onChange={this.update('password')} 
                    className='form-input'
                    placeholder='Password'
                    />   
                </div>
                <div className='next-form-container'>
                    <p className='create-account-link'>Forgot Password?</p>
                    <h2 onClick={this.handleSubmit} className='next-button'><p>Next</p></h2>
                </div>
            </form>
        </>
        )
    }


    checkEmail(e){
        e.preventDefault;
        this.props.fetchUserByEmail(this.state.email)
    }



    render(){
        const display = this.props.currUser.length ? this.passwordForm() : this.emailForm()
        const errorsLis = this.props.errors.map( (error,i) => {
            return  <li key= {i}> {error} </li>
        })
        

        return (
        <div className='login-form'>
            <img src={window.replay_logo} className='google_logo'/>
            
            <ul>{errorsLis}</ul>
            {display}


        </div>
        )
    }
}

export default LoginForm