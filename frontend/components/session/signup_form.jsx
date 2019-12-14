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
    componentWillUnmount(){
        this.props.clearErrors()
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

    renderError(field){
        // debugger
        const errorLis = this.props.errors.map( (error,i) => {
            return error
        })
        switch(field){
            case 'fname':
                // debugger
                return this.firstNameError(errorLis);
            case 'lname':
                return this.lastNameError(errorLis);
            case 'email':
                return this.emailError(errorLis);
            case 'password':
                return this.passwordError(errorLis);
            default: return '';

        }
    }

    firstNameError(errors){
        let errMessage =''
        errors.forEach( error => {
            if (error.split(' ')[0] === 'First') errMessage = 'Enter first name';
        })
        // debugger
        return errMessage
    }

    lastNameError(errors){
        let errMessage =''
        errors.forEach( error => {
            if (error.split(' ')[0] === 'Last') errMessage = 'Enter last name';
        })
        return errMessage;
    }

    passwordError(errors){
        let errMessage =''
        errors.forEach( error => {
            if (error.split(' ')[0] === 'Password') errMessage = 'Enter a password';
        })
        return errMessage 
    }

    emailError(errors){
        let errMessage = ''
        errors.forEach( error => {
            if ((error.split(' ')[0] === 'Email') && (error.split(' ')[1] === 'has') ){
                errMessage = 'That username is taken. Try another.';
            } else if  ((error.split(' ')[0] === 'Email') && (error.split(' ')[1] === "can't") ){
                errMessage = 'Enter an email address'
            };
        })
        return errMessage 
    }


    renderEmailConfirm(){
        return <p className='email-belongs-to'> You'll need to confirm that this email belongs to you</p>
    }

    renderEmailError(emailErr){
        return <h2 className='email-err-message error-message '><p>{emailErr}</p></h2>
    }
    
    renderPassError(passErr){
        return <h2 className='pass-err-message error-message '><p>{passErr}</p></h2>
    }

    renderPassReq(){
        return <h3 className='password-requirements-container'><p className='password-requirements'> User 6 or more characters with a mix of letters, numbers & symbols</p></h3>
    }


    render(){
        const fnameErr = this.renderError('fname')
        const lnameErr = this.renderError('lname')
        const passErr = this.renderError('password')
        const emailErr = this.renderError('email')
        const fnameClass = fnameErr ? 'errors' : ''
        const lnameClass = lnameErr ? 'errors' : ''
        const passClass = passErr ? 'errors' : ''
        const emailClass = emailErr ? 'errors' : ''
        const emailConfirmErr = emailErr ? this.renderEmailError(emailErr) : this.renderEmailConfirm();
        const passConfirmErr = passErr ? this.renderPassError(passErr) : this.renderPassReq();
        return (
        <>
            <section className='signup-form'>
                <div className='signup-form-left'>
                    <img src={window.replay_logo} className='logo-signup' onClick={() =>this.props.history.push('/')}/> 
                        <h1 className='signup-header'>Create Your RePlay Account</h1>
                        <p className='signup-header-text'>to continue to RePlay</p>
                        

                       
                        <form onSubmit={this.handleSubmit}>
                            
                            <div className='name-container'>
                                <div>
                                    <input type="text" 
                                    onChange={this.update('first_name')}
                                    placeholder='First name'
                                    className={`name-input ${fnameClass}`}
                                
                                    />   
                                    <h2 className='fname-err-message error-message '><p>{fnameErr}</p></h2>
                                </div>
                                <div>
                                    <input type="text" 
                                    onChange={this.update('last_name')}
                                    placeholder='Last name'
                                    className={`name-input-right ${lnameClass}`}
                                    />
                                    <h2 className='lname-err-message error-message '><p>{lnameErr}</p></h2>

                                </div>
                                
                            </div>
                            <div>

                                <div className='email-container'>
                                    <input type="text" 
                                    onChange={this.update('email')}
                                    placeholder='Your Email Address'
                                    className={`email-address ${emailClass}`}
                                    /> 
                                </div>
                                    {emailConfirmErr}
                            </div>
                             <div className='password-parent-container'>

                                <div className='password-container'>
                                    <input type="password"
                                    onChange={this.update('password')}
                                    placeholder='Password'
                                    className= {`password-left ${passClass}`}
                                    />  
                                </div>
                                {passConfirmErr}
                            </div>   

                           
                            
                            <div className='next-form-container-password'>
                                <Link to='/login' className='create-account-link'>Sign in instead</Link>
                                <h2 onClick={this.handleSubmit} className='next-button'><p>Next</p></h2>
                            </div>    
                        </form>
                </div>

                <div className='signup-form-right'>
                    <img src={window.shield} className='logo-shield'/> 
                </div>
            </section>
        </>
        )
    }
}

export default SignupForm