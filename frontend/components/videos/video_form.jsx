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
        // debugger
        const vid = e.target.files[0].name.split('.')
        // if (vid[vid.length-1] !== 'mp4'){
        //     return <h2>Must Upload an mp4 file</h2>
        // } else {

            return this.setState({ videoUrl: e.target.files[0]}) 
    //     }
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
                {/* <label htmlFor='videoupload' className='video-upload-input' >
                    <i className="fas fa-photo-video"></i>
                    <h3>Upload video</h3> 

                </label> */}


                
                    <input type="file" onChange={this.handleVideoFile} id='videoupload'/> 
                </div>

            
        </>

    }


    handleSubmit(e){
        e.preventDefault()

        const formData = new FormData();
        if (this.state.thumbnailUrl) {
            formData.append('video[thumbnail_url]', this.state.thumbnailUrl)

        }
        
        
        
        if (this.state.videoUrl && (this.props.formType === 'Upload Video')){
            formData.append('video[video_url]', this.state.videoUrl)
        }
        formData.append('video[title]', this.state.title)
        formData.append('video[description]', this.state.description)
        let videoId = this.state.id ? this.state.id : null
        this.props.submitVideo(formData,videoId)
            .then( (action) =>{
                if (this.props.formType === 'Upload Video') return this.props.history.push(`/videos/${action.payload.video.id}`)
                else this.props.history.push(`/videos/${action.payload.video.id}`)
            })
            
            
            
    }

    renderError(field){
        // debugger
        const errorLis = this.props.errors.map( (error,i) => {
            return error
        })
        switch(field){
            case 'title':
                return this.titleError(errorLis);
            case 'descrip':
                return this.descriptionError(errorLis);
            case 'thumb':
                return this.thumbnail(errorLis);
            default: return '';

        }
    }

    titleError(errors){
        let errMessage =''
        errors.forEach( error => {
            if (error.split(' ')[0] === 'Title') errMessage = "Title can't be blank";
        })
        // debugger
        return errMessage
    }
    descriptionError(errors){
        let errMessage =''
        errors.forEach( error => {
            if (error.split(' ')[0] === 'Description') errMessage = "Description can't be blank";
        })
        // debugger
        return errMessage
    }

    thumbnail(errors){
        let errMessage =''
        errors.forEach( error => {
            if (error.split(' ')[0] === 'Videos') errMessage = "Thumbnail can't be blank";
        })
        // debugger
        return errMessage
    }


    infoForm(){
        let optionButton;
        if (this.props.formType === 'Edit Video'){
           optionButton = <h2 onClick={()=>this.deleteCurrVideo(this.props.video.id)} className='next-button video-form-next-button'><p>Delete Video</p></h2>
        } else {
            optionButton = <h2 onClick={()=>this.goBack()} className='next-button video-form-next-button'><p>Go Back</p></h2>
        }



        const titleErr = this.renderError('title')
        const descripErr = this.renderError('descrip')
        const thumbErr = this.renderError('thumb')
        const titleClass = titleErr ? 'vid-errors' : ''
        const descripClass = descripErr ? 'vid-errors' : ''
        const thumbClass = thumbErr ? 'vid-errors' : ''


        return <>

            <form className='video-info-form-container'>
                <div className='video-form-details-container'>
                    <h2 className='video-details-header'> Details</h2>
                    <div className={`${titleClass} video-form-title-container `}>
                        <h3>Title (required)</h3>
                        <input type="text" 
                            className={`video-form-title `}
                            onChange={this.update('title')}
                            placeholder='Add a title that describes your video'
                            value={this.state.title}
                            />
                    </div>
                            <h2 className='title-err-message error-message '><p>{titleErr}</p></h2>

                    <div className={`${descripClass} video-form-description-container `}>
                        <h3>Description</h3>
                        <textarea className={`video-description `}
                            onChange={this.update('description')}  
                            placeholder='Tell viewers about your video'
                            value={this.state.description}>
                               
                        </textarea>

                    </div>
                        <h2 className='descrip-err-message error-message '><p>{descripErr}</p></h2>

                    <div className='video-form-thumbnail-container'>
                            <h2>Thumbnail</h2>
                            <h3>Select or upload a picture that shows what's in your video. A good thumbnail stands out and draws viewers' attention</h3>
                            <label htmlFor='thumbnail' className={`${thumbClass} video-thumbnail-input`}>
                                <i className="far fa-images"></i>
                                <h3>Upload thumbnail</h3> 
                            
                            </label>
                                <input type="file" id='thumbnail'
                                onChange={this.handleThumbnailFile}/>
                            <h4 className='thumb-err-message error-message '><p>{thumbErr}</p></h4> 
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
            
            return this.props.history.push('/')
        })
    }

    render(){
        const createForm = this.state.videoUrl ? this.infoForm() :this.videoForm()
        // const errorLis = this.props.errors.map( (error,i) => {
        //     return error
        // })
        // const renderErrorMsg = errorLis.length ? this.errorMsg() : null

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
                </div>
                
            </div>
        </>
        
        
    }
}

export default VideoForm