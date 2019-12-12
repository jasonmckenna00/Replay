import React from 'react';
import { withRouter, Route, Link } from 'react-router-dom';

class SignupForm extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            first_name: '',
            last_name: '',
            email: "",
            password: "",
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e){
        e.preventDefault()
        // debugger
        this.props.createNewUser(this.state)
            .then( () =>this.props.history.push('/'))
    }

    update(field){
        return e => this.setState( {[field]: e.target.value})
    }

    render(){
        const errorsLis = this.props.errors.map( (error,i) => {
            return  <li key= {i}> {error} </li>
        })

        return (
        <>
            <section className='signup-form'>
                <div className='signup-form-left'>
                    <img src={window.replay_logo} className='logo-signup'/> 
                        <h1 className='signup-header'>Create Your RePlay Account</h1>
                        <p className='signup-header-text'>to continue to RePlay</p>
                        <ul>{errorsLis}</ul>
                       
                        <form onSubmit={this.handleSubmit}>
                             <div className='name-container'>
                                <input type="text" 
                                onChange={this.update('first_name')}
                                placeholder='First name'
                                className='name-input'
                               
                                />   
                                <input type="text" 
                                onChange={this.update('last_name')}
                                placeholder='Last name'
                                className='name-input-right'
                                
                                />   
                            </div>
                            <div className='email-container'>
                                <input type="text" 
                                onChange={this.update('email')}
                                placeholder='Your Email Address'
                                className='email-address'
                                /> 
                            </div>
                                <p className='email-belongs-to'> You'll need to confirm that this email belongs to you</p>
                                
                            <div className='password-container'>
                                <input type="password"
                                 onChange={this.update('password')}
                                 placeholder='Password'
                                 className='password-left'/>

                                 <input type="password"
                                 placeholder='Confirm'
                                 className='password-right'/>      
                            </div>
                            <p className='password-requirements'> User 6 or more characters with a mix of letters, numbers and symbols</p>

                           
                            
                            <div className='next-form-container-password'>
                                <Link to='/login' className='create-account-link'>Sign in instead</Link>
                                <h2 onClick={this.handleSubmit} className='next-button'><p>Next</p></h2>
                            </div>    
                        </form>
                </div>

                <div className='signup-form-right'>
                    <img src={window.shield} className='logo-signup'/> 
                </div>
            </section>
        </>
        )
    }
}

export default SignupForm