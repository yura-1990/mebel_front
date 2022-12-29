import React from 'react'
import { Link } from 'react-router-dom'
import uz from '../../../lang/uz.json'
import ru from '../../../lang/ru.json'

export default function Home({allMebelData,officeMebels,loftOfficeMebels,homeMebels,kitchenMebels,allSoftMebels, curLang}) {
  
  return (
    <div className="container category-top">
      {
        allMebelData && <div className="home">
        <div className="home-text">
          <div className="card">
            <div className="card-title text-center text-primary">
              <h2 className="text-blue">{ curLang === "ru" ? ru['Offis mebellar toplami']: uz['Набор Оффисныx мебелов']}</h2>
            </div>
          </div>
        </div>
        <div className="home-content">
          {
            allMebelData?.map((el, i)=>{
              
              return i<5 && (
                <div key={i} className="home-item">
                  <Link to='/allmebel' className='card  img-opacity h-100'>
                    <div className="card-body d-flex flex-column justify-content-between">
                      <img className="img-fluid image-opacity" src={`https://mebels.mebelcity.uz/storage/${el.image}`} alt={el.name_uz ?? el.name_ru} width="581px" height="407px" />
                      <p className='text-center mb-0'>{ el.name_ru ?? el.name_uz }</p>
                    </div>
                  </Link>
                </div>
              )
            }
            )
          }
        </div>
      </div> 
      }
       
      {officeMebels &&  <div className="home ">
        <div className="home-text">
           <div className="card">
            <div className="card-title text-center text-primary">
              <h2 className="text-blue">{ curLang === "ru" ? ru['Offis mebellari']: uz['Оффисные мебели']}</h2>
            </div>
          </div>
        </div>
        <div className="home-content">
          {
            officeMebels?.map((el, i)=>{
              return i<5 && (
                <div key={i} className="home-item-3">
                  <Link to='/officemebel' className='card img-opacity h-100'>
                    <div className="card-body d-flex flex-column justify-content-between">
                      <img className="img-fluid image-opacity" src={`https://mebels.mebelcity.uz/storage/${el.image}`} alt={ el.name_ru ?? el.name_uz } width="581px" height="407px" />
                      <p className='text-center mb-0'>{ el.name_ru ?? el.name_uz }</p>
                    </div>
                  </Link>
                </div>
              )
            }
            )
          }
        </div>
      </div>}
       
       {loftOfficeMebels && <div className="home">
        <div className="home-text">
          <div className="card">
            <div className="card-title text-center text-primary">
              <h2 className="text-blue">{ curLang === "ru" ? ru['Loft uslubidagi mebellar']: uz['Оффисные мебели в стили LOFT']}</h2>
            </div>
          </div>
        </div>
       
        <div className="home-content">
        {loftOfficeMebels?.map((el, i)=>{
          return i<5 && (
            <div key={i} className="home-item">
              <Link to='/loftmebel' className='card img-opacity h-100'>
              <div className="card-body d-flex flex-column justify-content-between">
                      <img className="img-fluid image-opacity" src={`https://mebels.mebelcity.uz/storage/${el.image}`} alt="" />
                      <p className='text-center mb-0'>{ el.name_ru ?? el.name_uz }</p>
                    </div>
                
              </Link>
            </div>
          )
        }
        ) }
        </div>
      </div>}
      
      {allSoftMebels && <div className="home">
        <div className="home-text">
          {  <div className="card">
            <div className="card-title text-center text-primary">
              <h2 className="text-blue">{ curLang === "ru" ? ru['Offis yumshoq mebellar toplami']: uz['Набор мягкого мебели']}</h2>
            </div>
          </div>}
        </div>
        {
         <div className="home-content">
            {
              allSoftMebels?.map((el,i)=>i<5 && (<div key={i} className=" home-item-3">
                  <Link to='/softmebel' className="card  img-opacity h-100">
                  <div className="card-body d-flex flex-column justify-content-between">
                      <img className="img-fluid image-opacity" src={`https://mebels.mebelcity.uz/storage/${el.image}`} alt="" />
                      <p className='text-center mb-0'>{ el.name_ru ?? el.name_uz }</p>
                    </div>
                  </Link>
                </div>))
            }
          </div>
        }        
      </div> }
      
      {kitchenMebels && <div className="home">
        <div className="home-text">
          {  <div className="card">
            <div className="card-title text-center text-primary">
              <h2 className="text-blue">{ curLang === "ru" ? ru['Oshxona mebellar toplami']: uz['Набор кухонных мебелей']}</h2>
            </div>
          </div>}
        </div>
        <div className="home-content">
          {
            kitchenMebels?.map((el, i)=>{
              return i<5 && (
                <div key={i} className="home-item">
                  <Link to='/kitchenmebel' className='card img-opacity h-100'>
                  <div className="card-body d-flex flex-column justify-content-between">
                      <img className="img-fluid image-opacity" src={`https://mebels.mebelcity.uz/storage/${el.image}`} alt="" />
                      <p className='text-center mb-0'>{ el.name_ru ?? el.name_uz }</p>
                    </div>
                    
                  </Link>
                </div>
              )
            }
            )
          }
        </div>
      </div> }
      
      {homeMebels && <div className="home">
        <div className="home-text">
          {  <div className="card">
            <div className="card-title text-center text-primary">
              <h2 className="text-blue">{ curLang === "ru" ? ru['Xonadon uchun mebellar']: uz['Мебели для дома']}</h2>
            </div>
          </div>}
        </div>
        {
          <div className='home-content'>
              {
                homeMebels?.map((el,i)=>{
                  return i < 5 && <div key={i} className="home-item-3">
                    <Link to='/allhomemebels' className="card img-opacity h-100">
                    <div className="card-body d-flex flex-column justify-content-between">
                      <img className="img-fluid image-opacity" src={`https://mebels.mebelcity.uz/storage/${el.image}`} alt="" />
                      <p className='text-center mb-0'>{ el.name_ru ?? el.name_uz }</p>
                    </div>
                    </Link>
                  </div>
                })
              }
          </div>
        }
      </div> }
      
      
    </div>
  )
}
