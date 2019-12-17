import React from 'react'

class Sidebar extends React.Component{


    sideBarOpen(){
        return <div className='sidebar-body dropdown-body '>
                  <div className='linked-in'>
                        <h2>Linked-in</h2>
                    </div>
                    <div className='github'>
                        <h2>Github</h2>
                    </div>
                    <div className='angellist'>
                        <h2>Angel List</h2>
                    </div>
            </div>
        
    }

    sideBarClosed(){ 
        return <div className='sidebar-closed'> 
                   
                </div>
    }

    render(){
        // debugger
        const display = this.props.isOpen ? this.sideBarOpen() : this.sideBarClosed()
        return display
    }

}

export default Sidebar