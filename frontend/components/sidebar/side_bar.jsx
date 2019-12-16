import React from 'react'

class Sidebar extends React.Component{


    sideBarOpen(){
        return <div className='sidebar-open-container'>
                 <div className='sidebar-open'>

            </div>
        </div>
        
    }

    sideBarClosed(){ return <div> </div>
    }

    render(){
        // debugger
        const display = this.props.isOpen ? this.sideBarOpen() : this.sideBarClosed()
        return display
    }

}

export default Sidebar