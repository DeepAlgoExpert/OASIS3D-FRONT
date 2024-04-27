import React, { Component } from "react";
import UploadService from "../../services/file-upload.service";

export default class TryOnImages extends Component  {
  constructor(props) {
    super(props);

    this.state = {
      resultImage: undefined,
      progress: 0,
      message: "",
      error: null,
      imageInfos: [],
      clicked:null,
      imageData: null,
    };
    const {modelPreview } = this.props;
    this.setState({ modelPreview: modelPreview });
    this.upload = this.upload.bind(this)
  }
  
  upload() {
    this.setState({
      progress: 0,
      imageData: null,
    });

    const { modelType, model, garmentType, garment } = this.props;

    UploadService.tryon(modelType, model, garmentType, garment, (event) => {
      //event.preventDefault(); // Prevent default form submission
      this.setState({
        progress: Math.round((100 * event.loaded) / event.total),
      });
    })
      .then((response) => {
        this.setState({
          message: response.data.message,
        });
        this.setState({ imageData: response.data });
        this.setState({
            progress: 0, clicked: 1,
          });
      })
      .catch((err) => {
        this.setState({
          progress: 0,
        });
      });
   }

   componentDidMount() {
        const {modelPreview } = this.props;
        this.setState({ modelPreview: modelPreview });
        UploadService.getFiles().then((response) => {
        this.setState({
            imageInfos: response.data,
        });
        });
   }
   render() {
    const {
      currentFile,
      previewImage,
      progress,
      message,
      clicked,
      imageData,
      imageInfos,
      modelPreview,
    } = this.state;
    
    return (
      <div className="d-flex justify-content-between text-center">
        <button
          type = "button"
          className="btn btn-success btn-sm"
          onClick={this.upload}
        >
          TryOn
        </button>


        {imageData==null && (
          <div className="progress my-3">
            <div
              className="progress-bar progress-bar-info progress-bar-striped"
              role="progressbar"
              aria-valuenow={progress}
              aria-valuemin="0"
              aria-valuemax="100"
              style={{ width: progress + "%" }}
            >
              {progress}%
            </div>
          </div>
        )}

        {message && (
          <div className="alert alert-secondary mt-3" role="alert">
            {message}
          </div> 
        )}
        <img src={modelPreview} alt="Pet" />
        <img src={imageData? `data:image/png;base64,${imageData}`: "/assets/images/try-on/3.jpg"} alt="Pet" />
      </div>
    );
  }
}