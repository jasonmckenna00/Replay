import React from 'react'


class VideoForm extends React.Component{
    constructor(props){
        super(props)
        this.state = this.props.video
        // this.thumbnailErrors = false;
        // this.videoErrors = false;
        this.handleVideoFile = this.handleVideoFile.bind(this);
        this.handleThumbnailFile = this.handleThumbnailFile.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.update = this.update.bind(this)
        this.deleteCurrVideo = this.deleteCurrVideo.bind(this)
    }

    handleVideoFile(e){
        
        const file = e.target.files[0];
        // if (file.type !== 'video/mp4'){
        //     
        //     this.videoErrors = true;
        //     return 
        // } 
        this.videoErrors = false;

        const fileReader = new FileReader();
        fileReader.onloadend = () => {
            this.setState({ videoUrl: file, videoPreview: fileReader.result })
        }
        if (file){
            fileReader.readAsDataURL(file);
        }
   
    }

    // checkFileFormat(file){
    //     const arr = file.name.split('.').split('.');
    //     file
    // }

    componentWillUnmount(){
        this.props.clearErrors()
    }

    handleThumbnailFile(e){
        const file = e.target.files[0];
        const fileReader = new FileReader();
        fileReader.onloadend = () => {

            this.setState({ thumbnailUrl: file, thumbnailPreview: fileReader.result })
        }
        if (file) {
            fileReader.readAsDataURL(file);
        }
    }

    update(field){
        return e => this.setState( {[field]: e.target.value})
    }


    videoForm(){
        const videoErr = this.renderError('video')
        const videoClass = (videoErr) ? 'vid-errors' : ''
        const videoPreview = this.state.videoPreview ? 
                    <video src={this.state.videoPreview} controls  
                    className='video-show-video ' alt="" /> : 
                    <>
                        <i className="fas fa-file-video"></i>
                        <h3>Upload video</h3> 
                    </>

        return <>
                <div className={`video-url-upload-container`}>
                    <div className='video-header-text'>
                        <h2>Video</h2>
                        <h3>Select or upload a video that is less than 10 Mb and .mp4 format.</h3>
                        <h3>Larger files may take longer to upload.</h3>
                    </div>
                    <label htmlFor='video' className={` video-url-input ${videoClass} `}>
                            {videoPreview}
                    </label>
                    <input type="file" id='video' onChange={e => this.handleVideoFile(e)}/>
                    <h4 className='thumb-err-message error-message '><p>{videoErr}</p></h4> 

                    {/* <div className='video-url'></div> */}
                </div>

            
        </>

    }


    handleSubmit(e){
        e.preventDefault()
        this.props.clearErrors()
        const formData = new FormData();
        if (typeof this.state.thumbnailUrl === 'object') {
            formData.append('video[thumbnail_url]', this.state.thumbnailUrl)
        }

        if (this.state.videoUrl && (this.props.formType === 'Upload Video')){
            formData.append('video[video_url]', this.state.videoUrl)
        }

        formData.append('video[title]', this.state.title)
        formData.append('video[description]', this.state.description)
        let videoId = this.state.id ? this.state.id : null
        this.props.startLoadingSingleVideo();
        this.props.submitVideo(formData,videoId)
            .then( (action) =>{
                if (this.props.formType === 'Upload Video'){
                   return this.props.history.push(`/videos/${action.payload.video.id}`) 
                } else {
                    this.props.history.push(`/videos/${videoId}`)
                }
            })
            
            
            
    }

    renderError(field){
        // 
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
            case 'video':
                return this.videoError(errorLis)
            default: return '';

        }
    }

    titleError(errors){
        let errMessage =''
        errors.forEach( error => {
            if (error.split(' ')[0] === 'Title') errMessage = "Title can't be blank";
        })
        // 
        return errMessage
    }

    videoError(errors){
        let errMessage =''
        // 
        errors.forEach( error => {
            const msg = error.split(' ');
            if (msg[0] === 'Video') {
                if (msg[4] === 'under') {
                    msg.shift()
                    errMessage = msg.join(' ')
                } else if (msg[4] === 'mp4'){
                    msg.shift()
                    errMessage = msg.join(' ')
                } else {
                    errMessage = "Video can't be blank"
                }
            }
        })
        // 
        return errMessage
    }

    descriptionError(errors){
        let errMessage =''
        errors.forEach( error => {
            if (error.split(' ')[0] === 'Description') errMessage = "Description can't be blank";
        })
        // 
        return errMessage
    }

    thumbnail(errors){
        let errMessage =''
        errors.forEach( error => {
            const msg = error.split(' ');

            if (msg[0] === 'Thumbnail') {
                if (msg[1] === 'Must'){
                    errMessage = "Thumbnail can't be blank";
                } else {
                    msg.shift()
                    errMessage = msg.join(' ')
                }
            }

            
        })
        // 
        return errMessage
    }


    infoForm(){
        let optionButton;
        let videoForm = null;
        if (this.props.formType === 'Edit Video'){
           optionButton = <h2 onClick={()=>this.deleteCurrVideo(this.props.video.id)} className='next-button video-form-next-button'><p>Delete Video</p></h2>
        } else {
            optionButton = <h2 onClick={()=>this.goBack()} className='next-button video-form-next-button'><p>Go Back</p></h2>
            videoForm = this.videoForm()
        }

        debugger

        const submitOrLoad = this.props.videoLoading ? null : this.handleSubmit;
        const loading = this.props.videoLoading ? 'loading' : '';

        const titleErr = this.renderError('title')
        const descripErr = this.renderError('descrip')
        const thumbErr = this.renderError('thumb')
        const titleClass = titleErr ? 'vid-errors' : ''
        const descripClass = descripErr ? 'vid-errors' : ''
        const thumbClass = thumbErr ? 'vid-errors' : ''
        const thumbnailPreview = this.state.thumbnailPreview ? 
                    <img src={this.state.thumbnailPreview} className='url-preview'/> : null
        
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
                        <h3>Description (required)</h3>
                        <textarea className={`video-description `}
                            onChange={this.update('description')}  
                            placeholder='Tell viewers about your video'
                            value={this.state.description}>
                               
                        </textarea>

                    </div>
                        <h2 className='descrip-err-message error-message '><p>{descripErr}</p></h2>

                    <div className='video-form-thumbnail-container'>
                            <div className='thumbnail-header-text'>
                                <h2>Thumbnail</h2>
                                <h3>Select or upload a picture that shows what's in your video. A good thumbnail stands out and draws viewers' attention</h3>
                            </div>
                            <div className='thumbnail-upload-file-container'>
                                <div className='thumbnail-file'>

                                        <label htmlFor='thumbnail' className={`${thumbClass} video-thumbnail-input`}>
                                            <i className="far fa-images"></i>
                                            <h3>Upload thumbnail</h3> 

                                        </label>
                                            <input type="file" id='thumbnail'
                                            onChange={this.handleThumbnailFile}/>
                                        <h4 className='thumb-err-message error-message '><p>{thumbErr}</p></h4> 
                                </div>

                                <div className='thumbnail-preview'>
                                    {thumbnailPreview}
                                </div>
                            </div>

                    </div>
                    {/* <div className='video-form-channel-container'>
                    </div> */}
                    <div className={`${loading} video-form-footer-container`}>
                         {optionButton}
                        <h2 onClick={submitOrLoad} className={`${loading} next-button video-form-next-button `}><p>Next</p></h2>
                    </div>
                </div>
                    
                {/* ------------------------- */}
                {videoForm}



            </form>
            
        </>
    }


    leavePage(){
        this.props.clearErrors()
        this.props.history.push('/')
    }

    goBack(){
        // 
        this.props.clearVideoErrors();
        window.history.back()
        // this.setState({videoUrl: ''})
    }

    deleteCurrVideo(videoId){
        this.props.deleteVideo(videoId).then( () => {
            
            return this.props.history.push('/')
        })
    }

    render(){
        // const createForm = this.state.videoUrl ? this.infoForm() :this.videoForm()
        // const errorLis = this.props.errors.map( (error,i) => {
        //     return error
        // })
        // const renderErrorMsg = errorLis.length ? this.errorMsg() : null
        const loading = this.props.videoLoading ? 'loading' : '';

        return <>
            <div className={`video-create-container `}>
                <div className={`video-file-form ${loading}`}>
                    <div className='video-file-header'>
                        <h2 className='video-file-header-text'>{this.props.formType}</h2>
                        <i className="fas fa-times" onClick={() => this.leavePage()}></i>
                    </div>                 
                        {this.infoForm()}
                        {/* {this.infoForm()} */}
                </div>
                
            </div>
        </>
        
        
    }
}

export default VideoForm