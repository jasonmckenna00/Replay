import React from 'react'

class Sidebar extends React.Component{


    // sideBarOpen(){
    //     return <div className='sidebar-open '>
    //               <div className='OP-links'>
    //                     <h2>Linked-in</h2>
    //                 </div>
    //                 <div className='OP-links'>
    //                     <h2>Github</h2>
    //                 </div>
    //                 <div className='OP-links'>
    //                     <h2>Angel List</h2>
    //                 </div>
    //         </div>
        
    // }

    // sideBarClosed(){ 
    //     return <div className='sidebar-closed'> 
    //                 <div className='sidebar-item'>
    //                     <i class="fab fa-linkedin sidebar-icon"></i>
    //                     <h3>LinkedIn</h3>
    //                 </div>
    //                 <div className='sidebar-item'>
    //                     <i class="fab fa-github sidebar-icon"></i>
    //                     <h3>Github</h3>
    //                 </div>
    //                 <div className='sidebar-item'>
    //                     <i class="fab fa-angellist sidebar-icon"></i>
    //                     <h3>AngelList</h3>
    //                 </div>
        
    //             </div>
    // }

    render(){
        // debugger
        const display = this.props.isOpen ? 'sidebar-open' : 'sidebar-closed';
        const extended = this.props.isOpen ? 'sidebar-extended' : ''
        return <div className={display}> 
                    <a className={`sidebar-item ${extended}`} href="https://www.linkedin.com/in/jason-mckenna-69b5a1117/"  target='_blank'>
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
                    </a>

    </div>
    }

}

export default Sidebar