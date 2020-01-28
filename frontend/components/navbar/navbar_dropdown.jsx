
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
        const {currUser} = this.props
        if (this.props.displayed){
        return (
         
            <div className='dom' >
                <div className='dropdown-container'>
                    <div className='dropdown-header' >
                        <i className="fas fa-user dropdown-user-icon"></i>
                        <div className='dropdown-header-userinfo'>
                            <h2 className='dropdown-username'>{currUser.first_name}</h2>
                            <h3 className='dropdown-email'>{currUser.email}</h3>
                        </div>
                    </div> 
                    <div className='dropdown-body'>
                        {/* <div className='create-a-channel'>
                            <i className="fas fa-portrait"></i>
                            <h2 >Create a channel</h2>
                        </div> */}

                        <div className='sign-out' onClick={ () => this.props.logout()}>
                            <i className="fas fa-sign-out-alt"></i>
                            <h2 >Sign out</h2>
                        </div>

                        <div>
                            <i className="fab fa-linkedin "></i>
                            <a className={``} href="https://www.linkedin.com/in/jason-mckenna-69b5a1117/"  target='_blank'>LinkedIn</a>
                        </div>

                        <div>
                            <i className="fab fa-github dropdown-icon"></i>
                            <a className={``} href="https://github.com/jasonmckenna00"  target='_blank'>Github</a>
                        </div>

                        <div>
                            <i className="fab fa-angellist "></i>
                            <a className={``} href="https://angel.co/jason-mckenna-4"  target='_blank'>AngelList</a>

                        </div>

                        <div> 
                             <i className="fas fa-desktop "></i>
                             <a className={``} href="https://jasonmckenna00.github.io/jasonmckenna00/"  target='_blank'>Personal Site</a>

                        </div>
                    {/* <a className={`sidebar-item ${extended}`} href="https://www.linkedin.com/in/jason-mckenna-69b5a1117/"  target='_blank'>
                        <i className="fab fa-linkedin sidebar-icon"></i>
                        <h3>LinkedIn</h3>

                    </a>

                    <a className={`sidebar-item ${extended}`} href="https://github.com/jasonmckenna00"  target='_blank'>
                        <i className="fab fa-github sidebar-icon"></i>
                        <h3>Github</h3>
                    </a>

                    <a className={`sidebar-item ${extended}`} href="https://angel.co/jason-mckenna-4"  target='_blank'>
                        <i className="fab fa-angellist sidebar-icon"></i>
                        <h3>AngelList</h3>
                    </a>
                    <a className={`sidebar-item ${extended}`} href="https://jasonmckenna00.github.io/jasonmckenna00/"  target='_blank'>
                        <i className="fas fa-desktop sidebar-icon"></i>
                        <h3>Personal Site</h3>
                    </a> */}
                            
                        
                    </div>
                </div>

            </div>
        )} else {
            return null
        }
    }
}

export default NavbarDropdown
