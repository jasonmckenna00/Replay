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
            <h1>Login Form</h1>
            <h2>This is not the sign up form</h2>
            <ul>{errorsLis}</ul>
            <form onSubmit={this.handleSubmit}>
                <label> Email 
                    <input type="email" onChange={this.update('email')}/>   
                </label>

                <label> Password 
                    <input type="password" onChange={this.update('password')}/>   
                </label>
                <button onClick={this.handleSubmit}>Login</button>
            </form>
            <br/>
            <Link to='/signup'>Sign Up</Link>
            <button onClick={()=> this.demoUser()}>Try Demo User</button>
        </div>
        )
    }
}

export default LoginForm