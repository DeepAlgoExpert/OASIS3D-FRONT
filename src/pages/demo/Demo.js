import React, {Fragment} from 'react';
import { useState, useEffect } from 'react';
import ReactImagePickerEditor, { ImagePickerConf } from 'react-image-picker-editor';
import 'react-image-picker-editor/dist/index.css'
import Select from "react-dropdown-select";

import Footer from '../../components/global/Footer';
import Instagram from '../../components/global/Instagram';
import Header from '../../components/header/Header';
import PageTitle from '../../components/global/PageTitle';
import FilePreview from "../../components/filepreview/filepreview.component";
import TryOnImages from "../../components/tryon-new/tryon.component";
import TabButtons from "../../components/tryon/tabbutton.component";
import TabContent from "../../components/tryon/tabcontent.component";
import Products from "../../components/shop/DemoProducts";
import UploadService from "../../services/file-upload.service";

import "./demo.css";

import productsData from '../../data/demo-products.json';
import productsData_2 from '../../data/demo-products.json';
const products = [...productsData];

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

       /**
     * states
     */
    const [showQuickView, setShowQuickView] = useState(false);
    const [quickViewData, setQuickViewData] = useState({});
    const [ordering, setOrdering] = useState(1);
    const [category, setCategory] = useState('tops');
    const [clickedItemId, setClickedItemId] = useState(null);
    const [clickedGarmentTitle, setClickedGarmentTitle] = useState(null);
    const [garment, setGarment] = useState('');
    const [isFinished, setIsFinished] = useState(false)

    const HandelQuickViewData = (e, item) => {
        e.preventDefault();
        setShowQuickView(!showQuickView);
        setQuickViewData(item);
    };

    

    const handleGarmentClick = (item) => {
        const _garment = document.getElementById(item.id);
        const _garmentDes = item.title;
        setClickedItemId(item.mainImg);
        setClickedGarmentTitle(item.title);
        setGarment(_garment);
        UploadService.tryon_demo('dc', model, category, _garmentDes, _garment, (event) => {
          })
            .then((response) => {
              setModelPreview(response.data);
              setIsFinished(true);
            })
            .catch((err) => {
              
            });
    };

    const handleModelClick = (item) => {
      setModelPreview(process.env.PUBLIC_URL + item.mainImg);
      setModel(document.getElementById(item.id));
       
    };

    const config2 = {
        borderRadius: '8px',
        language: 'en',
        //width: '50%',
        width: '330px',
        aspectRatio: 0.75,
        objectFit: 'fill',
        compressInitial: null,
        hideDeleteBtn: true,
        hideDownloadBtn: true,
        hideEditBtn: true,
        hideAddBtn: true
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

    const lowerSubOptions = [
        {
          value: 1,
          label: 'Shorts'
        },
        {
          value: 2,
          label: 'Bermuda shorts'
        },
        {
          value: 3,
          label: 'Ankle-Length Pants'
        },
        {
          value: 4,
          label: 'Mini Skirts'
        },
        {
          value: 5,
          label: 'Knee-Length Skirts'
        },
        {
          value: 6,
          label: 'Midi Skirts'
        },
        {
          value: 7,
          label: 'Maxi Skirts'
        }
    ];

    const dressSubOptions = [
        {
          value: 1,
          label: 'Mini Dress'
        },
        {
          value: 2,
          label: 'Knee-Length Dress'
        },
        {
          value: 3,
          label: 'Midi Dress'
        },
        {
          value: 4,
          label: 'Maxi Dress'
        }
    ];

    const vtoData = [
        {
          title: "User Image",
          fact: "Please upload your front photo captured phone or camera! User image should be 3:4 portion.",
          image: "/assets/images/try-on/1.jpg",
        },
        {
          title: "Garment Image",
          fact: "Please upload the garment image you are trying to wear! Garment image should be 3:4 portion.",
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

    const [resultState, setResultState] = useState(null);

    const [modelPreview, setModelPreview] = useState('/assets/images/user/woman3.jpg');
    const [garmentPreview, setGarmentPreview] = useState('/assets/images/try-on/2.jpg');

    // State to hold the selected model type
    const [selectedModelType, setSelectedModelType] = useState('Half');
    // State to hold the selected garment type
    const [selectedGarmentType, setSelectedGarmentType] = useState('Upper');
    // State to hold the selected garment sub category
    const [selectedSubGarmentType, setSelectedSubGarmentType] = useState('');

    const handleVtoData = (imageData) => {
        setResultState(imageData);
      };

    /**
     * demo data
     */
    const contactUsData = {
        address: "Ailded frame showed a lady fitted out with fur hat and fur boa who sat upright",
        phone_1: "54875465-65741895-6547",
        phone_2: "2222-3333-4444-555",
        //email_1: "beaumarfdeep0821@gmail.com",
        //email_2: "beaumarfdeep0821@gmail.com",
        time: "10AM - 5 PM, Sunday closed"
    };

    useEffect(() => {
      const setInit = async () => {
        setModel(document.getElementById("3ew553u213"));
      };
  
      setInit();
    }, []);

    return (
        <Fragment>
            <main className='main-container'>
                <Header options={options} />

                <PageTitle name="VirtualFittingRoomDemo"/>

                <section className='demo-section'>
                    <div id="demo">
                        <div>
                            <div className='frame row'>
                                <div className='model-frame col-sm-12 col-xs-12 col-md-6 '>
                                  <img class="modelImg" src={isFinished? `data:image/png;base64,${modelPreview}`: {modelPreview}} />
                                <div className='segmentFrame selectCategory'>
                                            <div name="tops" className={`selectCategoryContainer tops female select ${category === 'Tops' ? 'clicked' : ''}`} value="tops" id="tops">
                                                <div className='selectCategoryButton' onClick={() => setCategory('Tops')}>
                                                    <img src="/assets/images/demo/tops.svg" />
                                                </div>
                                            </div>
                                            <div name="bottoms" className={`selectCategoryContainer bottoms female ${category === 'Bottom' ? 'clicked' : ''}`} value="bottoms" id="bottoms">
                                                <div className='selectCategoryButton' onClick={() => setCategory('Bottom')}>
                                                    <img src="/assets/images/demo/bottoms.svg" />
                                                </div>
                                            </div>
                                            <div name="allbody" className={`selectCategoryContainer allbody female ${category === 'Dress' ? 'clicked' : ''}`} value="allbody" id="allbody">
                                                <div className='selectCategoryButton' onClick={() => setCategory('Dress')}>
                                                    <img src="/assets/images/demo/dress.svg" />
                                                </div>
                                            </div>
                                            <div name="faces" className={`selectCategoryContainer ${category === 'Face' ? 'clicked' : ''}`} value='faces' id='faces'>
                                                <div className='selectCategoryButton' onClick={() => setCategory('Face')}>
                                                    <img src="/assets/images/demo/face.svg" />
                                                </div> 
                                            </div>
                                        </div>
                                </div>
                                <div className='right-frame col-sm-12 col-xs-12 col-md-6 '>
                                    <div class="garmentFrame " id="garmentFrame">
                                        <div className='garmentFrame-wrapper'>
                                            <div class="titleDiv">
                                                <div class="title">Virtual Fitting Room</div>
                                            </div>
                                            <div className='toggleGarmentContainer'>
                                                <div class="toggleGarmentIcon"><p>{category}</p></div>
                                            </div>
                                            <div className='garmentOptions' id="garmentOptions">
                                                {
                                                    products.map((item, index) => (
                                                    
                                                      <div key={index} className={`productImgContainer ${clickedItemId === item.mainImg ? 'clicked' : ''} ${item.category === category.toLowerCase() ? 'selected' : 'non-selected'}`}
                                                          onClick={() => item.category === 'face'? handleModelClick(item): handleGarmentClick(item)} >
                                                          <img className='productImg' id={item.id}
                                                              src={process.env.PUBLIC_URL + item.mainImg} alt={item.title} />
                                                          <div className='saveIcon'>
                                                              <div>
                                                                  <img className="heart-icon" 
                                                                      src="/assets/images/demo/heart.png" alt="Save" />
                                                              </div>
                                                          </div>
                                                          <div className='productNameDiv'>
                                                              <p className='product'>{item.title}</p>
                                                          </div>
                                                      </div>
                                                      
                                                    ))
                                                }
                                            </div>
                                        </div>
                                        
                                    
                                    </div>
                                </div>
                            </div>
                        </div>
                    
                    </div>
                </section>
            </main>
            <Footer/>
        </Fragment>
    );
}

export default VirtualFittingRoom;