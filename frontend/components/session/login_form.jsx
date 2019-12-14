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
        this.checkEmail = this.checkEmail.bind(this);
        this.backToLogin = this.backToLogin.bind(this)
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

    backToLogin(){
        this.props.resetUserState();
    }


    emailError(){
        const errors = this.props.emailErrors;
        // debugger
        let errMessage = ''
        errors.forEach( error => {
            if ((error.split(' ')[0] === "Couldn't")){
                errMessage = "Couldn't find your RePlay Account";
            }
            //  else if (error.split(' ')[0] === 'Enter') {
            //     errMessage = 'Enter an email address'
            // };
        }
        )
        return errMessage 
    }

    passError(){
        const errors = this.props.passwordErrors;
        // debugger
        let errMessage = ''
        errors.forEach( error => {
            if ((error.split(' ')[0] === "Invalid")){
                errMessage = "Wrong Password. Try again";
            }
            //  else if (error.split(' ')[0] === 'Enter') {
            //     errMessage = 'Enter an email address'
            // };
        }
        )
        return errMessage 
    }


    emailForm(){
        const errClass = this.emailError() ? 'errors' : '';
        // debugger
        return <>
        
            <h1 className='signin-header'>Sign in</h1>
            <h2 className='signin-header-text'>to continue to RePlay</h2>
            <form >
                <div>
                    <div className='form-input-container'> 
                        <input type="text" 
                        onChange={this.update('email')} 
                        className={`form-input ${errClass}`}
                        placeholder='Your email address'
                        />   
                    </div>
                    <h2 className='invalid-message error-message '><p>{this.emailError()}</p></h2>

                </div>
                <h2 onClick={()=> this.demoUser()} className='demo-user-button'>Try Demo User</h2>
                <br/>
                
            
                <div className='learn-more-container'>

                    <h3 className='learn-more'>Not familiar with YouTube? Check out the original site!</h3>
                    <h3 className='learn-more-link' onClick={()=> window.location = 'http://youtube.com'}> Learn More </h3>
                </div>
        
                <div className='next-form-container-email'>
                    <Link to='/signup' className='create-account-link'>Create account</Link>
                    <h2 onClick={this.checkEmail} className='next-button'><p>Next</p></h2>
                </div>
            </form>
        </>
    }

    passwordForm(){
        const errClass = this.passError() ? 'errors' : '';

        const {email, first_name} = this.props.currUser[0]
        // debugger
        return(<>

            <div className='signin-header'>
                <h2 className='user-name'>Hi {first_name}</h2>
                <h2 className='user-email'><p>{email}</p></h2>
            </div>
            
            <form onSubmit={this.handleSubmit}>
                <div>

                    <div className='form-input-container'> 
                        <input type="password" 
                        onChange={this.update('password')} 
                        className={`form-input ${errClass}`}
                        placeholder='Password'
                        />   
                    </div>
                    <h2 className='invalid-message error-message '><p>{this.passError()}</p></h2>
                </div>

                <div className='next-form-container'>
                    <Link to='/login' className='create-account-link' onClick={() => this.backToLogin()}>Back to login</Link>
                    {/* <p className='create-account-link'></p> */}
                    <h2 onClick={this.handleSubmit} className='next-button'><p>Next</p></h2>
                </div>
            </form>
        </>
        )
    }

    goToYoutube(){

    }
    checkEmail(e){
        e.preventDefault;
        this.props.fetchUserByEmail(this.state.email)
    }



    render(){
        const display = this.props.currUser.length ? this.passwordForm() : this.emailForm()
        

        return (
        <section className='login-form'>
            <img src={window.replay_logo} className='logo-login' onClick={() =>this.props.history.push('/')}/>
            {display}


        </section>
        )
    }
}

export default LoginForm