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

    const { model, height } = this.props;

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

        {(
          <div className="text-center">
            <OBJModel src='https://3.89.143.205/measure/model.obj' texPath="./src/lib/model/" scale={{x:0.2,y:0.2,z:0.20}} position={{x:0,y:0.1,z:0}} width={430} height={566}>
              <AmbientLight color={0x000fff}/>
              <DirectionLight color={0xffffff} position={{x:100,y:200,z:100}}/>
              <DirectionLight color={0xff00ff} position={{x:-100,y:200,z:-100}}/>
            </OBJModel>
          </div>

        )}

        {measurements && (
          <ResponseTable responseData={measurements} /> 
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