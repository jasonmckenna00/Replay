
import React from 'react';
class NavbarDropdown extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            dropdownOpen: false,
            currentUser: this.props.currUser
        }
    }









    render(){
        // debugger
        const {currUser} = this.props
        if (this.props.displayed){
        return (
         
            <div className='dom'>
                <div className='dropdown-container'>
                    <div className='dropdown-header'>
                        <i className="fas fa-user dropdown-user-icon"></i>
                        <div className='dropdown-header-userinfo'>
                            <h2 className='dropdown-username'>{currUser.first_name}</h2>
                            <h3 className='dropdown-email'>{currUser.email}</h3>
                        </div>
                    </div> 
                    <div className='dropdown-body'>
                        <div className='create-a-channel'>
                            <i className="fas fa-portrait"></i>
                            <h2 >Create a channel</h2>
                        </div>
                        <div className='sign-out' onClick={ () => this.props.logout()}>
                            <i className="fas fa-sign-out-alt"></i>
                            <h2 >Sign out</h2>
                        </div>
                            
                        
                    </div>
                </div>

            </div>
        )} else {
            return null
        }
    }
}

export default NavbarDropdown