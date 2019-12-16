import React from 'react'


class VideoCreateForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            video_url: '',
            thumbnail_url: '',
            title: '',
            description: '',
        }
        this.handleVideoFile = this.handleVideoFile.bind(this);
        this.handleThumbnailFile = this.handleThumbnailFile.bind(this);

        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleVideoFile(e){
        return this.setState({ video_url: e.target.files[0].name }) 
    }

    componentWillUnmount(){
        this.props.clearErrors()
    }

    handleThumbnailFile(e){

        return this.setState({ thumbnail_url: e.target.files[0].name })
    }

    update(field){
        return e => this.setState( {[field]: e.target.value})
    }

    // renderError(field){
    //     debugger
    //     const errorLis = this.props.errors.map( (error,i) => {
    //         return error
    //     })

    //     switch(field){
    //         case 'title':
    //             return
    //     }
    // }


    videoForm(){
        return <>
                <div className='video-url-upload-container'>
                <label for='videoupload' className='video-upload-input' >
                    <i className="fas fa-photo-video"></i>
                    <h3>Upload video</h3> 
                </label>

                    <input type="file" onChange={this.handleVideoFile} id='videoupload'/> 
                </div>

            
        </>

    }


    handleSubmit(e){
        e.preventDefault()
        // debugger
        this.props.createVideo(this.state)
            .then( () =>this.props.history.push('/'))
    }




    infoForm(){
        return <>

            <form className='video-info-form-container'>
                <div className='video-form-details-container'>
                    <h2 className='video-details-header'> Details</h2>
                    <div className='video-form-title-container'>
                        <h3>Title (required)</h3>
                        <input type="text" 
                            className='video-form-title' 
                            onChange={this.update('title')}
                            placeholder='Add a title that describes your video'
                            />
                    </div>

                    <div className='video-form-description-container'>
                        <h3>Description</h3>
                        <textarea className='video-description'
                            onChange={this.update('description')}  
                            placeholder='Tell viewers about your video'>
                        </textarea>
                    </div>

                    <div className='video-form-thumbnail-container'>
                            <h2>Thumbnail</h2>
                            <h3>Select or upload a picture that shows what's in your video. A good thumbnail stands out and draws viewers' attention</h3>
                            <label for='thumbnail' className='video-thumbnail-input' >
                                <i className="far fa-images"></i>
                                <h3>Upload thumbnail</h3> 
                            
                            </label>
                                <input type="file" id='thumbnail'
                                onChange={this.handleThumbnailFile}/> 
                    </div>
                    <div className='video-form-channel-container'>
                        <h2>Channel</h2>
                        <h3>Add your video to one or more channels. Channels can help viewers discover your content</h3>   
                    </div>
                    <div className='video-form-footer-container'>
                    <h2 onClick={()=>this.goBack()} className='next-button video-form-next-button'><p>Go Back</p></h2>
                    <h2 onClick={this.handleSubmit} className='next-button video-form-next-button'><p>Next</p></h2>
                    </div>
                </div>
                    
            </form>
            
        </>
    }

    errorMsg(){
        return <div className='video-form-error-message'>
            <h2>Make sure all fields are filled</h2>
        </div>
    }

    leavePage(){
        this.props.clearErrors()
        this.props.history.push('/')
    }

    goBack(){
        // debugger
        this.props.clearVideoErrors()
        this.setState({video_url: ''})
    }


    render(){
        const createForm = this.state.video_url ? this.infoForm() :this.videoForm()
        // debugger
        const errorLis = this.props.errors.map( (error,i) => {
            return error
        })
        const renderErrorMsg = errorLis.length ? this.errorMsg() : null
        return <>
            <div className='video-create-container'>
                <div className='video-file-form'>
                    <div className='video-file-header'>
                        <h2 className='video-file-header-text'>Upload Video</h2>
                        <i className="fas fa-times" onClick={() => this.leavePage()}></i>
                    </div>
                    <div className='video-file-body'>
                        {createForm}
                        {/* {this.infoForm()} */}
                    </div>
                    {renderErrorMsg}
                </div>
                
            </div>
        </>
        
        
    }
}

export default VideoCreateForm