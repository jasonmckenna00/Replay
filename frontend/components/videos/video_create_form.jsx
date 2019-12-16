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

    handleThumbnailFile(e){

        return this.setState({ thumbnail_url: e.target.files[0].name })
    }

    update(field){
        return e => this.setState( {[field]: e.target.value})
    }


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

                    <h2 onClick={this.handleSubmit} className='next-button video-form-next-button'><p>Next</p></h2>
                </div>
                    
            </form>
            
        </>
    }





    // <input type="file" 
    //                 className='video-thumbnail-input' 
    //                 onChange={this.handleThumbnailFile}
    //                 /> 
                    
    //                 <textarea className='video-description'
    //                 onChange={this.update('description')}  
    //                 placeholder='Enter description'>
    //                 </textarea>

   

    render(){
        const createForm = this.state.video_url ? this.infoForm() :this.videoForm()
        // debugger
        return <>
            <div className='video-create-container'>
                <div className='video-file-form'>
                    <div className='video-file-header'>
                        <h2 className='video-file-header-text'>Upload Video</h2>
                        <i className="fas fa-times" onClick={() => this.setState({})}></i>
                    </div>
                    <div className='video-file-body'>
                        {/* {createForm} */}
                        {this.infoForm()}
                    </div>
                    {/* <div className=''></div> */}
                </div>
                
            </div>
        </>
        
        
    }
}

export default VideoCreateForm