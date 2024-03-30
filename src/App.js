import React, { useEffect, useState, Suspense  } from "react";

import { Routes, Route } from 'react-router-dom'
import {getDataFromBack} from './store/allOfficeMebelReducer'
import {getOfficeMebelsFromBack} from './store/officeMebelsReducer'
import {getLoftOfficeMebelsFromBack} from './store/loftForOfficeReducer'
import {getAllSoftMebelsFromBack} from './store/allSoftMebelsReducer'
import {getHomeMebelsFromBack} from './store/homeMebelsReducer'
import {getKitchenFurnitureFromBack} from './store/kitchenFurnitureReducer'
import { connect } from 'react-redux';

const Home = React.lazy(() => import('./Components/pages/HomeMebels/Home'));
const ShowRoom = React.lazy(() => import('./Components/pages/ShowRoom'));
const About = React.lazy(() => import('./Components/pages/About'));
const Delivery = React.lazy(() => import('./Components/pages/Delivery'));
const AllOfficeMebels = React.lazy(() => import('./Components/pages/AllOfficeMebels/AllOfficeMebels'));
const OfficeMebels = React.lazy(() => import('./Components/pages/OfficeMebels/OfficeMebels'));
const OfficeLoftMebels = React.lazy(() => import('./Components/pages/OfficeLoftMebels/OfficeLoftMebels'));
const AllSoftMebels = React.lazy(() => import('./Components/pages/AllSoftMebels/AllSoftMebels'));
const KitchenMebels = React.lazy(() => import('./Components/pages/KitchenMebels/KitchenMebels'));
const AllHomeMebels = React.lazy(() => import('./Components/pages/HomeMebels/AllHomeMebels'));
const Header = React.lazy(() => import('./Components/Header'));
const Block = React.lazy(() => import('./Components/pages/Block'));


function App({allOfficeMebel,getDataFromBack,officeMebels, getOfficeMebelsFromBack, loftOfficeMebels,getLoftOfficeMebelsFromBack,homeMebels,getHomeMebelsFromBack,kitchenMebels,getKitchenFurnitureFromBack,allSoftMebels,getAllSoftMebelsFromBack}) {
  const [curLang, setCurLang] = useState('ru')
  
  useEffect(()=>{
    getDataFromBack(curLang)
    getHomeMebelsFromBack(curLang)
    getOfficeMebelsFromBack(curLang)
    getAllSoftMebelsFromBack(curLang)
    getLoftOfficeMebelsFromBack(curLang)
    getKitchenFurnitureFromBack(curLang)
  }, [curLang])
  
  function getChangLang(lang) {
    setCurLang(lang)
  }
  
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <header className="z-index position-fixed w-100 top-0">
        <Header getChangLang={getChangLang}/>
      </header>
        
      <main className="main">
        <Routes>
          <Route path="/" element={<Home 
            allMebelData={allOfficeMebel} 
            officeMebels={officeMebels}  
            loftOfficeMebels={loftOfficeMebels}
            homeMebels={homeMebels}
            kitchenMebels={kitchenMebels}
            allSoftMebels={allSoftMebels}
            curLang={curLang}
          />}/>
          <Route path="/about" element={<About curLang={curLang}/>} />
          <Route path="/showroom" element={<ShowRoom curLang={curLang} />} />
          <Route path="/delivery" element={<Delivery curLang={curLang} />} />
          <Route path="/allmebel" element={<AllOfficeMebels curLang={curLang} />} />
          <Route path="/officemebel" element={<OfficeMebels curLang={curLang}/>} />
          <Route path="/loftmebel" element={<OfficeLoftMebels curLang={curLang}/>} />
          <Route path="/softmebel" element={<AllSoftMebels curLang={curLang}/>} />
          <Route path="/kitchenmebel" element={<KitchenMebels curLang={curLang}/>} />
          <Route path="/allhomemebels" element={<AllHomeMebels curLang={curLang}/>} />
          <Route path="/mebel/:mebel/:id" element={<Block />} curLang={curLang}/>
        </Routes>
        
      </main>
        
    </Suspense>
  );
}

export default connect(({allOfficeMebel:  {allOfficeMebel},
                         officeMebels:    {officeMebels},
                         loftOfficeMebels:{loftOfficeMebels},
                         homeMebels:      {homeMebels},
                         kitchenMebels:   {kitchenMebels},
                         allSoftMebels:    {allSoftMebels}
                      })=>  
                       ({allOfficeMebel,officeMebels,loftOfficeMebels,homeMebels,kitchenMebels,allSoftMebels}), 
                       {getDataFromBack, getOfficeMebelsFromBack,
                        getLoftOfficeMebelsFromBack, getHomeMebelsFromBack,getKitchenFurnitureFromBack,getAllSoftMebelsFromBack
                      })(App);
