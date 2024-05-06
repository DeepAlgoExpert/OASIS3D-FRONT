import React, {Fragment} from 'react';
import Footer from '../../components/global/Footer';
import Instagram from '../../components/global/Instagram';
import Header from '../../components/header/Header';
import PageTitle from '../../components/global/PageTitle';
import FilePreview from "../../components/filepreview/filepreview.component";
import Measure from "../../components/measurement/measurement.component";
import { useState, useEffect } from 'react';
import ReactImagePickerEditor, { ImagePickerConf } from 'react-image-picker-editor';
import 'react-image-picker-editor/dist/index.css'
import Select from "react-dropdown-select";

import TabButtons from "../../components/measurement/tabbutton.component";
import TabContent from "../../components/tryon/tabcontent.component";

import "./measure.css";

/**
 * ContactUs page
 * @param options
 * @returns {*}
 * @constructor
 */
function Measurement({ options }) {

    const onSubmitForm = (e)=> {
        e.preventDefault();
    };

    const config2 = {
        borderRadius: '8px',
        language: 'en',
        //width: '50%',
        width: '330px',
        aspectRatio: 0.75,
        objectFit: 'fill',
        compressInitial: null,
    };

    const garmentOptions = [
        {
          value: 1,
          label: 'Upper'
        },
        {
          value: 2,
          label: 'Lower'
        },
        {
            value: 3,
            label: 'Dress'
        }
    ];

    const measureData = [
        {
          title: "User Image",
          fact: "Please upload your front photo captured phone or camera!",
          image: "/assets/images/try-on/1.jpg",
        },
        {
          title: "3D Body Preview",
          fact: "This is your 3D body Preview!",
          image: "/assets/images/try-on/2.jpg",
        },
        {
          title: "Measurement Table",
          fact: "Your body measurement result. Have fun!",
          image: "/assets/images/try-on/3.jpg",
          result: "/assets/images/try-on/3.jpg"
        },
      ];

    const [activeTab, setActiveTab] = useState(0);
    const [garment, setGarment] = useState('');

    const [model, setModel] = useState(null);

    const [modelPreview, setModelPreview] = useState(null);

    // State to hold height
    const [height, setHeight] = useState('');

    const handleModelChange = (event) => {
        setModel(event.target.files[0]);
        setModelPreview(URL.createObjectURL(event.target.files[0]));
    };

    // Function to handle change in select model type
    const handleHeightChange = (event) => {
        setHeight(event.target.value);
    };
    /**
     * demo data
     */
    const contactUsData = {
        address: "Ailded frame showed a lady fitted out with fur hat and fur boa who sat upright",
        phone_1: "54875465-65741895-6547",
        phone_2: "2222-3333-4444-555",
        email_1: "beaumarfdeep0821@gmail.com",
        email_2: "beaumarfdeep0821@gmail.com",
        time: "10AM - 5 PM, Sunday closed"
    };

    return (
        <Fragment>
            <Header options={options} />

            <PageTitle name="3D Body Measurements"/>

            {/* start measure-section */}
            <section className="contact-section contact-pg-section section-padding">
                <div className="container-1410">
                    <div className="row">
                        <div className="main__container">
                            <h1>Body Measure Process</h1>
                            <TabButtons
                                activeTab={activeTab}
                                setActiveTab={setActiveTab}
                                measureData={measureData}
                            />
                            <div className="tab__container ">
                                <div className="tab__content d-flex">
                                    <p> {measureData[activeTab].fact}</p>
                                    { activeTab==0 &&
                                        <>
                                            <input type="text" name="height" id="height-input" value={height} 
                                                placeholder="Height* for example:178" 
                                                onChange={handleHeightChange} />
                                            < ReactImagePickerEditor
                                                config={config2}
                                                imageSrcProp={model}
                                                imageChanged={(newDataUri) => { setModel(newDataUri) }} 
                                                />
                                        </>
                                    }

                                    { activeTab==1 &&                                       
                                        <>
                                            <Measure model={model}  height={height}/>
                                        </>
                                    }
                                    { activeTab==2 &&
                                        <>
                                            
                                        </>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* end contact-section-s3 */}
                       
            {/* start contact-section */}
            <section className="contact-section contact-pg-section section-padding">
                <div className="container-1410">
                    <div className="row">
                        <div className="col col-lg-10 col-lg-offset-1">
                            <div className="contact-info">
                                <h3>Please upload your front photo captured by your phone or camera!</h3>
                                <br/>
                                <input type="text" name="name" id="name" value={height} placeholder="Height* for example:178" onChange={handleHeightChange} />
                                <br/><br/>
                                <input type="file" onChange={handleModelChange} />
                                <FilePreview previewImage={modelPreview}/>   
                            </div>
                            <div className="contact-form-col">
                                <h3>3D Body Preview</h3>
                                <Measure model={model}  height={height}/>
                            </div>
                        </div>
                        <div className="col col-lg-10 col-lg-offset-1">
                            
                        </div>
                    </div>
                </div>
            </section>
            {/* end contact-section-s3 */}
            <Instagram/>
            <Footer/>
        </Fragment>
    );
}

export default Measurement;