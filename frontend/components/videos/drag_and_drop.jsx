// import React from 'react'

// class DragAndDrop extends React.Component{
//     constructor(props){
//         super(props)
//         state = {
//             dragging: false
//         }
//     }


//     dragAndDrop = React.createRef();




//     componentDidMount() {
//         let div = this.dragAndDrop.current
//         div.addEventListener('dragEnter', this.handleDragIn)
//         div.addEventListener('dragLeave', this.handleDragOut)
//         div.addEventListener('dragOver', this.handleDrag)
//         div.addEventListener('drop', this.handleDrop)
//     }


//     componentWillUnmount(){
//         let div = this.dragAndDrop.current
//         div.removeEventListener('dragEnter', this.handleDragIn)
//         div.removeEventListener('dragLeave', this.handleDragOut)
//         div.removeEventListener('dragOver', this.handleDrag)
//         div.removeEventListener('drop', this.handleDrop)
//     }

//     handleDragIn = event => {
//         event.preventDefault()
//         event.stopPropagation()
//         this.dragCounter++
//         if (event.dataTransfer.items && event.dataTransfer.items.length > 0) {
//             this.setState({dragging: true})
//         }
//     }

//     handleDragOut = event => {
//         event.preventDefault()
//         event.stopPropagation()
//         this.dragCounter--
//         if (this.dragCounter > 0) return
//         this.setState({dragging: false})
//     }

//     handleDrag = event => {
//         event.preventDefault()
//         event.stopPropagation()
//     }

//     handleDrop = event => {
//         event.preventDefault()
//         event.stopPropagation()
//     }


//     render(){
//         return <div ref={this.dragAndDrop}>
//             {this.props.children}
//         </div>
//     }
// }

// export default DragAndDrop