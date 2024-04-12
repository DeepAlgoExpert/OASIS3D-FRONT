import React, {Fragment} from 'react';
import Footer from '../../components/global/Footer';
import Instagram from '../../components/global/Instagram';
import Header from '../../components/header/Header';
import PageTitle from '../../components/global/PageTitle';
import FilePreview from "../../components/filepreview/filepreview.component";
import Measure from "../../components/measurement/measurement.component";
import { useState, useEffect } from 'react';



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

    const [model, setModel] = useState(null);

    const [modelPreview, setModelPreview] = useState(null);

    const handleModelChange = (event) => {
        setModel(event.target.files[0]);
        setModelPreview(URL.createObjectURL(event.target.files[0]));
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

    const responseData = {
        "Bust Height": 129.4720855972628,
        "Neck to Floor": 151.41881201172603,
        "Shoulder to Waist (Back)": 38.71692834110742,
        "Shoulder to Waist (Front)": 43.67089117774894,
        "Waist to Floor": 107.5894186908198,
        "ankle left circumference": 23.854194343474113,
        "arm right length": 53.02302623465265,
        "bicep right circumference": 29.188039852534377,
        "calf left circumference": 36.83631416998882,
        "chest circumference": 103.93802276507385,
        "forearm right circumference": 25.864086416698143,
        "height": 176.2,
        "hip circumference": 105.49742008336779,
        "hip height": 88.13892778559031,
        "inside leg height": 74.73150036020571,
        "neck circumference": 37.75425409906571,
        "shoulder breadth": 36.466145139921686,
        "shoulder to crotch height": 66.52553841608635,
        "thigh left circumference": 50.05567723026238,
        "under chest circumference": 89.33445309414537,
        "waist circumference": 89.8359384532222,
        "wrist right circumference": 17.54122961837685
    };

    return (
        <Fragment>
            <Header options={options} />

            <PageTitle name="3D Body Measurements"/>
                       
            {/* start contact-section */}
            <section className="contact-section contact-pg-section section-padding">
                <div className="container-1410">
                    <div className="row">
                        <div className="col col-lg-10 col-lg-offset-1">
                            <div className="contact-info">
                                <h3>Please upload your front photo captured by your phone or camera!</h3>
                                <br/>
                                <input type="file" onChange={handleModelChange} />
                                <FilePreview previewImage={modelPreview} />   
                            </div>
                            <div className="contact-form-col">
                                <h3>3D Body Preview</h3>
                                <Measure model={model}/>
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