import React, { useState, useEffect } from "react";
import { connect } from 'react-redux';
import {useParams} from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react";
import { getDataByID } from '../../store/allOfficeMebelReducer'
import {officemebelsByID} from '../../store/officeMebelsReducer'
import { loftOfficeMebelByID } from '../../store/loftForOfficeReducer'
import { allSoftMebelByID } from '../../store/allSoftMebelsReducer'
import { kitchenMebelsByID } from '../../store/kitchenFurnitureReducer'
import { homeMebelsByID } from '../../store/homeMebelsReducer'
import ReactImageMagnify from 'react-image-magnify';

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper";

function Block({allOfficeMebel, getDataByID, 
                officeMebels, officemebelsByID, 
                loftOfficeMebels, loftOfficeMebelByID,
                allSoftMebels,  allSoftMebelByID,
                kitchenMebels, kitchenMebelsByID,
                homeMebels, homeMebelsByID
              }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [params, setParams] = useState(0);
  const [firstElemen, setFirstElemen] = useState([]);
  const [isTrue, setisTrue] = useState(false);
  const param = useParams();
  
  useEffect(()=>{
    
    setParams(parseInt(param.id))
    getDataByID(parseInt(param.id))
    officemebelsByID(parseInt(param.id))
    loftOfficeMebelByID(parseInt(param.id))
    allSoftMebelByID(parseInt(param.id))
    kitchenMebelsByID(parseInt(param.id))
    homeMebelsByID(parseInt(param.id))

    let ID = parseInt(param.id)
    setParams(ID)
    
    let dataFirst = param.mebel === 'allmebel' ? allOfficeMebel 
                   :param.mebel === 'officemebel' ? officeMebels 
                   :param.mebel === 'loftmebel' ? loftOfficeMebels 
                   :param.mebel === 'softmebel' ? allSoftMebels
                   :param.mebel === 'kitchenmebel' ? kitchenMebels
                   :param.mebel === 'allhomemebels' ? homeMebels : ''

    let getData = dataFirst.filter(el=>el.id===params) 
    dataFirst = dataFirst.filter(el=>el.id!==params)
    dataFirst.unshift(...getData)
    setFirstElemen(dataFirst)
    
    setTimeout(() => {
      setisTrue(true)
    }, 1000);
    
  }, [param])
  
  function getId(id){
    setParams(parseInt(id))
  }
  
  return (
    <div className="category-top">
      {!isTrue ?
      <div className="text-center ">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div> :
      <div className="container mt-3">
        <Swiper
          style={{
            "--swiper-navigation-color": "#000",
            "--swiper-pagination-color": "#fff"
          }}
          loop={true}
          centeredSlides={true}
          spaceBetween={20}
          navigation={false}
          modules={[FreeMode, Navigation]}
          className="mySwiper2"
        >
          {
            param.mebel === 'allmebel'?
            allOfficeMebel?.filter(el=>el.id===params)?.map((el,i)=>(<SwiperSlide key={el.id.toString()} >
              
              <div className="row align-items-center flex-column-reverse flex-xxl-row">
                <div className="col-xxl-4 col-12 ps-xl-0 ps-5">
                  <h4>{el?.name_uz?.split('/n')?.map(el=><p className="mb-0">{el}</p>) ?? el?.name_ru?.split('/n')?.map(el=><p className="mb-0">{el}</p>) }</h4> 
                  <p>{el?.size_uz?.split('/n')?.map(el=><p className="mb-0">{el}</p>) ?? el?.size_ru?.split('/n')?.map(el=><p className="mb-0">{el}</p>) }</p> 
                  <p>{el?.material_uz ?? el?.material_ru }</p> 
                </div>
                <div className="col-xxl-8 col-12 d-flex align-items-center">
                <ReactImageMagnify {...{
                  smallImage: {
                    alt: 'Wristwatch by Ted Baker London',
                    isFluidWidth: true,
                    /* width: 856,
                    height: 599, */
                    src: 'https://mebels.mebelcity.uz/storage/'+ el.image,
                    srcset:'https://mebels.mebelcity.uz/storage/'+ el.image,
                  },
                  largeImage: {
                    src: 'https://mebels.mebelcity.uz/storage/'+ el.image,
                    srcset:'https://mebels.mebelcity.uz/storage/'+ el.image,
                    width: 1400,
                    height: 1400
                  },
                  enlargedImagePosition:'over',
                  isEnlargedImagePortalEnabledForTouch:true
                }} />
                </div>
              </div>
          </SwiperSlide>)):
            param.mebel === 'officemebel' ?
            officeMebels?.filter(el=>el.id===params)?.map((el,i)=>(<SwiperSlide key={el.id.toString()} >
              
            <div className="row align-items-center flex-column-reverse flex-xxl-row">
              <div className="col-xxl-4 col-12  ps-5">
                <h4>{el?.name_uz?.split('/n')?.map(el=><p className="mb-0">{el}</p>) ?? el?.name_ru?.split('/n')?.map(el=><p className="mb-0">{el}</p>) }</h4> 
                <p>{el?.size_uz?.split('/n')?.map(el=><p className="mb-0">{el}</p>) ?? el?.size_ru?.split('/n')?.map(el=><p className="mb-0">{el}</p>) }</p> 
                <p>{el?.material_uz ?? el?.material_ru }</p> 
              </div>
              <div className="col-xxl-8 col-12 d-flex align-items-center">
              <ReactImageMagnify {...{
                smallImage: {
                  alt: 'Wristwatch by Ted Baker London',
                  isFluidWidth: true,
                  src: 'https://mebels.mebelcity.uz/storage/'+ el.image,
                  srcset:'https://mebels.mebelcity.uz/storage/'+ el.image,
                  /* width: 856,
                  height:599, */
                },
                largeImage: {
                  src: 'https://mebels.mebelcity.uz/storage/'+ el.image,
                  srcset:'https://mebels.mebelcity.uz/storage/'+ el.image,
                  width: 2500,
                  height: 2500
                },
                enlargedImagePosition:'over',
                isEnlargedImagePortalEnabledForTouch:true
              }} />
              </div>
            </div>
        </SwiperSlide>)): 
            param.mebel === 'loftmebel' ?
            loftOfficeMebels?.filter(el=>el.id===params)?.map((el,i)=>(<SwiperSlide key={el.id.toString()} >
            <div className="row align-items-center flex-column-reverse flex-xxl-row">
              <div className="col-xxl-4 col-12  ps-5">
                <h4>{el?.name_uz?.split('/n')?.map(el=><p className="mb-0">{el}</p>) ?? el?.name_ru?.split('/n')?.map(el=><p className="mb-0">{el}</p>) }</h4> 
                <p>{el?.size_uz?.split('/n')?.map(el=><p className="mb-0">{el}</p>) ?? el?.size_ru?.split('/n')?.map(el=><p className="mb-0">{el}</p>) }</p> 
                <p>{el?.material_uz ?? el?.material_ru }</p> 
              </div>
              <div className="col-xxl-8 col-12 d-flex align-items-center">
              <ReactImageMagnify {...{
                smallImage: {
                  alt: 'Wristwatch by Ted Baker London',
                  isFluidWidth: true,
                  src: 'https://mebels.mebelcity.uz/storage/'+ el.image,
                  srcset:'https://mebels.mebelcity.uz/storage/'+ el.image,
                  /* width: 856,
                  height:599, */
                },
                largeImage: {
                  src: 'https://mebels.mebelcity.uz/storage/'+ el.image,
                  srcset:'https://mebels.mebelcity.uz/storage/'+ el.image,
                  width: 2500,
                  height: 2500
                },
                enlargedImagePosition:'over',
                isEnlargedImagePortalEnabledForTouch:true
              }} />
              </div>
            </div>
        </SwiperSlide>)):
            param.mebel === 'softmebel' ?
            allSoftMebels?.filter(el=>el.id===params)?.map((el,i)=>(<SwiperSlide key={el.id.toString()} >
            <div className="row align-items-center flex-column-reverse flex-xxl-row">
              <div className="col-xxl-4 col-12 ps-5">
                <h4>{el?.name_uz?.split('/n')?.map(el=><p className="mb-0">{el}</p>) ?? el?.name_ru?.split('/n')?.map(el=><p className="mb-0">{el}</p>) }</h4> 
                <p>{el?.size_uz?.split('/n')?.map(el=><p className="mb-0">{el}</p>) ?? el?.size_ru?.split('/n')?.map(el=><p className="mb-0">{el}</p>) }</p> 
                <p>{el?.material_uz ?? el?.material_ru }</p> 
              </div>
              <div className="col-xxl-8 col-12 d-flex align-items-center">
              <ReactImageMagnify {...{
                smallImage: {
                  alt: 'Wristwatch by Ted Baker London',
                  isFluidWidth: true,
                  src: 'https://mebels.mebelcity.uz/storage/'+ el.image,
                  srcset:'https://mebels.mebelcity.uz/storage/'+ el.image,
                  /* width: 856,
                  height:599, */
                },
                largeImage: {
                  src: 'https://mebels.mebelcity.uz/storage/'+ el.image,
                  srcset:'https://mebels.mebelcity.uz/storage/'+ el.image,
                  width: 2500,
                  height: 2500
                },
                enlargedImagePosition:'over',
                isEnlargedImagePortalEnabledForTouch:true
              }} />
              </div>
            </div>
        </SwiperSlide>)):
          param.mebel === 'kitchenmebel' ?
            kitchenMebels?.filter(el=>el.id===params)?.map((el,i)=>(<SwiperSlide key={el.id.toString()} >
            <div className="row align-items-center flex-column-reverse flex-xxl-row">
              <div className="col-xxl-4 col-12  ps-5">
                <h4>{el?.name_uz?.split('/n')?.map(el=><p className="mb-0">{el}</p>) ?? el?.name_ru?.split('/n')?.map(el=><p className="mb-0">{el}</p>) }</h4> 
                <p>{el?.size_uz?.split('/n')?.map(el=><p className="mb-0">{el}</p>) ?? el?.size_ru?.split('/n')?.map(el=><p className="mb-0">{el}</p>) }</p> 
                <p>{el?.material_uz ?? el?.material_ru }</p> 
              </div>
              <div className="col-xxl-8 col-12 d-flex align-items-center">
              <ReactImageMagnify {...{
                smallImage: {
                  alt: 'Wristwatch by Ted Baker London',
                  isFluidWidth: true,
                  src: 'https://mebels.mebelcity.uz/storage/'+ el.image,
                  srcset:'https://mebels.mebelcity.uz/storage/'+ el.image,
                  /* width: 856,
                  height:599, */
                },
                largeImage: {
                  src: 'https://mebels.mebelcity.uz/storage/'+ el.image,
                  srcset:'https://mebels.mebelcity.uz/storage/'+ el.image,
                  width: 2500,
                  height: 2500
                },
                enlargedImagePosition:'over',
                isEnlargedImagePortalEnabledForTouch:true
              }} />
              </div>
            </div>
      </SwiperSlide>)):
          param.mebel === 'allhomemebels' ?
            homeMebels?.filter(el=>el.id===params)?.map((el,i)=>(<SwiperSlide key={el.id.toString()} >
            <div className="row align-items-center flex-column-reverse flex-xxl-row">
              <div className="col-xxl-4 col-12  ps-5">
              <h4>{el?.name_uz?.split('/n')?.map(el=><p className="mb-0">{el}</p>) ?? el?.name_ru?.split('/n')?.map(el=><p className="mb-0">{el}</p>) }</h4> 
                <p>{el?.size_uz?.split('/n')?.map(el=><p className="mb-0">{el}</p>) ?? el?.size_ru?.split('/n')?.map(el=><p className="mb-0">{el}</p>) }</p> 
                <p>{el?.material_uz ?? el?.material_ru }</p> 
              </div>
              <div className="col-xxl-8 col-12 d-flex align-items-center">
              <ReactImageMagnify {...{
                smallImage: {
                  alt: 'Wristwatch by Ted Baker London',
                  isFluidWidth: true,
                  src: 'https://mebels.mebelcity.uz/storage/'+ el.image,
                  srcset:'https://mebels.mebelcity.uz/storage/'+ el.image,
                  /* width: 856,
                  height:599, */
                },
                largeImage: {
                  src: 'https://mebels.mebelcity.uz/storage/'+ el.image,
                  srcset:'https://mebels.mebelcity.uz/storage/'+ el.image,
                  width: 2500,
                  height: 2500
                },
                enlargedImagePosition:'over',
                isEnlargedImagePortalEnabledForTouch:true
              }} />
              </div>
            </div>
      </SwiperSlide>)
          ) : ""
          }
        </Swiper>
        
        <Swiper
          centeredSlides={true}
          initialSlide={parseInt(param.id-1)}
          style={{
            "--swiper-navigation-color": "#000",
            "--swiper-pagination-color": "#fff",
            "opacity":0, 
            "position":"absolute",
            "width": "95%",
            "height":"50px",
            "zIndex":"-10",
            "left": 0
          }}
          loop={true}
          spaceBetween={20}
          navigation={true}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper2"
        >
          {
            firstElemen?.map((el,i)=>(<SwiperSlide key={el.id.toString()} >
              <div className="row">
                <div className="col-5">
                  <h1>Salom</h1> 
                </div>
                <div className="col-7">
                <img className="img-fluid" src={'https://mebels.mebelcity.uz/storage/'+ el.image} alt=""  width="856"
                    height='599' />
                </div>
              </div>
          </SwiperSlide>)
          )
          }
          
        </Swiper>
        <Swiper
          centeredSlides={true}
          initialSlide={parseInt(param.id-1)}
          onSwiper={setThumbsSwiper}
          loop={true}
          spaceBetween={20}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          navigation={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper"
        >
          {
            firstElemen?.map((el,i)=>(<SwiperSlide key={el.id.toString()} onClick={()=>getId(el.id)} >
              <img className="img-fluid"  src={'https://mebels.mebelcity.uz/storage/'+ el.image} alt=""  width="856"
                    height='599'/>
          </SwiperSlide>)
          )
          }
        </Swiper>
      </div>}
    </div>
  )
}

export default connect(({allOfficeMebel:  {allOfficeMebel, id},
                        officeMebels:    {officeMebels, officemebelsID},
                        loftOfficeMebels:{loftOfficeMebels, loftOfficeMebelId },
                        homeMebels:      {homeMebels, homeMebelsId},
                        kitchenMebels:   {kitchenMebels, kitchenMebelsId},
                        allSoftMebels:    {allSoftMebels, allSoftMebelId}})=>  
                      ({
                        allOfficeMebel, id, 
                        officeMebels, officemebelsID,
                        loftOfficeMebels,
                        homeMebels, homeMebelsId,
                        kitchenMebels, kitchenMebelsId,
                        allSoftMebels, allSoftMebelId,
                        getDataByID,
                        officemebelsByID,
                        loftOfficeMebelId,
                        loftOfficeMebelByID,
                        allSoftMebelByID,
                        kitchenMebelsByID,
                        homeMebelsByID
                      }), null)(Block)