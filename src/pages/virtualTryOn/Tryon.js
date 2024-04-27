import React, {Fragment} from 'react';
import { useState } from 'react';
import Footer from '../../components/global/Footer';
import Instagram from '../../components/global/Instagram';
import Header from '../../components/header/Header';
import PageTitle from '../../components/global/PageTitle';
import FilePreview from "../../components/filepreview/filepreview.component";
import TryOnImages from "../../components/tryon/tryon.component";
import TabButtons from "../../components/tryon/tabbutton.component";
import TabContent from "../../components/tryon/tabcontent.component";

import "./tryon.css";

/**
 * ContactUs page
 * @param options
 * @returns {*}
 * @constructor
 */
function VirtualFittingRoom({ options }) {

    const onSubmitForm = (e)=> {
        e.preventDefault();
    };

    const vtoData = [
        {
          title: "User Image",
          fact: "Please upload your front photo captured phone or camera!",
          image: "/assets/images/try-on/1.jpg",
        },
        {
          title: "Garment Image",
          fact: "Please upload the garment image you are trying to wear!",
          image: "/assets/images/try-on/2.jpg",
        },
        {
          title: "Virtual Try On",
          fact: "Your virtual fitting result. Have fun!",
          image: "/assets/images/try-on/3.jpg",
          result: "/assets/images/try-on/3.jpg"
        },
      ];

    const [activeTab, setActiveTab] = useState(0);

    const [model, setModel] = useState(null);
    const [garment, setGarment] = useState(null);

    const [modelPreview, setModelPreview] = useState('/assets/images/try-on/1.jpg');
    const [garmentPreview, setGarmentPreview] = useState('/assets/images/try-on/2.jpg');

    // State to hold the selected model type
    const [selectedModelType, setSelectedModelType] = useState('Half');
    // State to hold the selected garment type
    const [selectedGarmentType, setSelectedGarmentType] = useState('Upper');

    const handleModelChange = (event) => {
        setModel(event.target.files[0]);
        setModelPreview(URL.createObjectURL(event.target.files[0]));
    };

    const handleGarmentChange = (event) => {
        setGarment(event.target.files[0]);
        setGarmentPreview(URL.createObjectURL(event.target.files[0]));
    };
    
    // Function to handle change in select model type
    const handleSelectChangeModelType = (event) => {
        setSelectedModelType(event.target.value);
    };

    // Function to handle change in select model type
     const handleSelectChangeGarmentType = (event) => {
        setSelectedGarmentType(event.target.value);
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

            <PageTitle name="VirtualFittingRoom"/>

            {/* start contact-section */}
            <section className="contact-section contact-pg-section section-padding">
                <div className="container-1410">
                    <div className="row">
                        <div className="main__container">
                            <h1>Virtual Fitting Process</h1>
                            <TabButtons
                                activeTab={activeTab}
                                setActiveTab={setActiveTab}
                                vtoData={vtoData}
                            />
                            <div className="tab__container ">
                                <div className="tab__content">
                                    <p> {vtoData[activeTab].fact}</p>
                                    { activeTab==0 &&                                       
                                        <>
                                            <input type="file" id={activeTab} onChange={activeTab==0 ? handleModelChange: handleGarmentChange} />
                                            <img src={ activeTab==0 ? modelPreview: garmentPreview} alt="Pet" />

                                        </>
                                    }

                                    { activeTab==1 &&                                       
                                        <>
                                            <div className="row">
                                                <div className='col'>
                                                    <select className="form-select" name="garment type" value={selectedGarmentType} onChange={handleSelectChangeGarmentType}>
                                                        <option disabled="disabled">Garment type</option>
                                                        <option>Upper</option>
                                                        <option>Lower</option>
                                                        <option>Dress</option>
                                                    </select>
                                                    <input type="file" id={activeTab} onChange={activeTab==0 ? handleModelChange: handleGarmentChange} />
                                                </div>
                                            </div>
                                            <img src={ activeTab==0 ? modelPreview: garmentPreview} alt="Pet" />
                                        </>
                                    }
                                    { activeTab==2 &&
                                        <TryOnImages 
                                            modelType={selectedModelType} 
                                            model={model} 
                                            garmentType={selectedGarmentType} 
                                            garment={garment} 
                                            modelPreview={modelPreview}
                                        />
                                    }
                                </div>
                            </div>
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

export default VirtualFittingRoom;