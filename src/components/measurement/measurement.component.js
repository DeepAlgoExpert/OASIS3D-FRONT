import React, { Component } from "react";
import UploadService from "../../services/file-upload.service";
import {OBJModel, AmbientLight, DirectionLight, OBJLoader} from 'react-3d-viewer';
import ResponseTable from './responseTable'; // Import the ResponseTable component

export default class Measurement extends Component  {
  constructor(props) {
    super(props);

    this.state = {
      resultImage: undefined,
      progress: 0,
      message: "",
      error: null,
      obj_url: null,
      clicked:null,
      measurements: null,
    };

    const { objUrl } = this.props;

    this.setState({
      obj_url: objUrl
    });
    
    this.upload = this.upload.bind(this)
  }
  
  upload() {
    this.setState({
      progress: 0,
      imageData: null,
      obj_url: null,
      measurements: null,
      message: "",
      error: null
    });

    const { model, height, objUrl } = this.props;

    UploadService.measure(model, height, (event) => {
      //event.preventDefault(); // Prevent default form submission
      this.setState({
        progress: Math.round((100 * event.loaded) / event.total),
      });
    })
      .then((response) => {
        this.setState({ message: response.data.message, 
                        measurements: response.data.measurements,
                        obj_url: response.data.obj_url,
                        progress: 0, clicked: 1 });
        // Call the callback function to send data to parent
        this.props.onData(response.data);
      })
      .catch((err) => {
        this.setState({
          progress: 0,
        });
      });
   }

   componentDidMount() {
        UploadService.getFiles().then((response) => {
        
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
      obj_url,
      measurements
    } = this.state;
    
    

    return (
      <div className="w-100">
        <div className="text-center">
          <button
            type = "button"
            className="btn btn-success btn-sm"
            onClick={this.upload}
          >
            Measure
          </button>
        </div>
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
      </div>
    );
  }
}