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

    render(){
        
        const errorsLis = this.props.errors.map( (error,i) => {
            return  <li key= {i}> {error} </li>
        })
        

        return (
        <div className='login-form'>
            <img src={window.replay_logo} className='google_logo'/>
            <h1 className='signin-header'>Sign in</h1>
            <h2 className='signin-header-text'>to continue to RePlay</h2>
            <ul>{errorsLis}</ul>
            <form onSubmit={this.handleSubmit}>
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
                
            </form>
            
            <h3 className='learn-more'>Not your computer? Use Guest mode to sign in privately.</h3>
            <h3 className='learn-more-link'> Learn More </h3>
    
                <div className='next-form-container'>

            <Link to='/signup' className='create-account-link'>Create account</Link>
            <h2 onClick={this.handleSubmit} className='next-button'><p>Next</p></h2>
            
                </div>
        </div>
        )
    }
}

export default LoginForm