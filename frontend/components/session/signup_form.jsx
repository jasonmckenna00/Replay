import React from 'react';

class SignupForm extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            first_name: '',
            last_name: '',
            email: "",
            password: ""
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
        <div className='signup-form'>
            <h1>Sign Up Form</h1>
            <ul>{errorsLis}</ul>
            <form onSubmit={this.handleSubmit}>

            <label> First Name 
                <input type="text" onChange={this.update('first_name')}/>   
            </label>
            <label> Last Name 
                <input type="text" onChange={this.update('last_name')}/>   
            </label>

            <label> Email 
                <input type="text" onChange={this.update('email')}/>   
            </label>

            <label> Password 
                <input type="password" onChange={this.update('password')}/>   
            </label>
            <button onClick={this.handleSubmit}>Sign Up</button>


            </form>
        </div>
        )
    }
}

export default SignupForm