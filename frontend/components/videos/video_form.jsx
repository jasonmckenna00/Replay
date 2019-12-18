import React from 'react'


class VideoForm extends React.Component{
    constructor(props){
        super(props)
        this.state = this.props.video
        this.handleVideoFile = this.handleVideoFile.bind(this);
        this.handleThumbnailFile = this.handleThumbnailFile.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.update = this.update.bind(this)
        this.deleteCurrVideo = this.deleteCurrVideo.bind(this)
    }

    handleVideoFile(e){
        return this.setState({ videoUrl: e.target.files[0]}) 
    }

    componentWillUnmount(){
        this.props.clearErrors()
    }

    handleThumbnailFile(e){

        return this.setState({ thumbnailUrl: e.target.files[0] })
    }

    update(field){
        return e => this.setState( {[field]: e.target.value})
    }


    videoForm(){
        return <>
                <div className='video-url-upload-container'>
                <label htmlFor='videoupload' className='video-upload-input' >
                    <i className="fas fa-photo-video"></i>
                    <h3>Upload video</h3> 
                </label>

                    <input type="file" onChange={this.handleVideoFile} id='videoupload'/> 
                </div>

            
        </>

    }


    handleSubmit(e){
        e.preventDefault()

        const formData = new FormData();
        if (this.state.thumbnailUrl) formData.append('video[thumbnail_url]', this.state.thumbnailUrl)

        if (this.state.videoUrl && (this.props.formType === 'Upload Video')){
            formData.append('video[video_url]', this.state.videoUrl)
        }
        formData.append('video[title]', this.state.title)
        formData.append('video[description]', this.state.description)
        debugger
        let videoId = this.state.id ? this.state.id : null
        this.props.submitVideo(formData,videoId)
            .then( (action) =>{
                debugger
                if (this.props.formType === 'Upload Video') return this.props.history.push(`/videos/${action.payload.video.id}`)
                else this.props.history.push(`/videos/${action.payload.video.id}`)
            })
            
            
            
    }




    infoForm(){
        let optionButton;
        if (this.props.formType === 'Edit Video'){
           optionButton = <h2 onClick={()=>this.deleteCurrVideo(this.props.video.id)} className='next-button video-form-next-button'><p>Delete Video</p></h2>
        } else {
            optionButton = <h2 onClick={()=>this.goBack()} className='next-button video-form-next-button'><p>Go Back</p></h2>
        }

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
                            value={this.state.title}
                            />
                    </div>

                    <div className='video-form-description-container'>
                        <h3>Description</h3>
                        <textarea className='video-description'
                            onChange={this.update('description')}  
                            placeholder='Tell viewers about your video'
                            value={this.state.description}>
                               
                        </textarea>
                    </div>

                    <div className='video-form-thumbnail-container'>
                            <h2>Thumbnail</h2>
                            <h3>Select or upload a picture that shows what's in your video. A good thumbnail stands out and draws viewers' attention</h3>
                            <label htmlFor='thumbnail' className='video-thumbnail-input' >
                                <i className="far fa-images"></i>
                                <h3>Upload thumbnail</h3> 
                            
                            </label>
                                <input type="file" id='thumbnail'
                                onChange={this.handleThumbnailFile}/> 
                    </div>
                    <div className='video-form-channel-container'>
                        {/* <h2>Channel</h2> */}
                        {/* <h3>Add your video to one or more channels. Channels can help viewers discover your content</h3>    */}
                    </div>
                    <div className='video-form-footer-container'>
                    {optionButton}
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
        this.setState({videoUrl: ''})
    }

    deleteCurrVideo(videoId){
        this.props.deleteVideo(videoId).then( () => {
            debugger
            return this.props.history.push('/')
        })
    }

    render(){
        // debugger
        const createForm = this.state.videoUrl ? this.infoForm() :this.videoForm()
        // debugger
        const errorLis = this.props.errors.map( (error,i) => {
            return error
        })
        const renderErrorMsg = errorLis.length ? this.errorMsg() : null
        return <>
            <div className='video-create-container'>
                <div className='video-file-form'>
                    <div className='video-file-header'>
                        <h2 className='video-file-header-text'>{this.props.formType}</h2>
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

export default VideoForm