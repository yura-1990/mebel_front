import React, { useState } from 'react'
import logo from '../img/MEBEL_CITY_HORIZONTAL_BLACK.png'
import uzFlag from '../img/Uz.png'
import RuFlag from '../img/ruFlag.png'
import instagram from '../img/insta.png'
import telegram from '../img/telegram.png'
import facebook from '../img/facebook.svg'
import { Link } from 'react-router-dom'
import ru from "../lang/ru.json";
import uz from "../lang/uz.json";
import { connect } from 'react-redux'


function Header({ getChangLang, allOfficeMebel, allSoftMebels, homeMebels, kitchenMebels, loftOfficeMebels, officeMebels }) {
  const [lang, setLang] = useState(['uz', 'ru'])
  const [currentLang, setCurrentLang] = useState('ru')
  
  function changeLang(lang) {
    setCurrentLang(lang)
    getChangLang(lang)
  }
  
  return (
    <nav className="navbar navbar-expand-xl bg-season shadow">
      <div className="container-fluid ">
        <Link className="navbar-brand logo" to="/">
          <img className="img-fluid" width="300px" height={"70px"}  src={logo} alt="Logo type for mebelsity" />
        </Link>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse align-items-center justify-content-center navbar-collapse" id="navbarNav">
          <ul className="navbar-nav flex-row gap-4 justify-content-center d-flex d-xl-none">
            {
              lang?.map((lang, i) => (<li key={i} className={currentLang === lang ? "nav-item active lang" : "nav-item"} onClick={() => changeLang(lang)}>
              <div className={'nav-link d-flex gap-2 align-items-center menu-link'}  >
               {
                  lang === 'ru' 
                    ? <img src={RuFlag} className={currentLang === lang ? "img-fluid flag active" : "img-fluid flag"} alt="language flag uz" width={"30px"} height={"30px"}/>
                    : <img src={uzFlag} className={currentLang === lang ? "img-fluid flag active" : "img-fluid flag"} alt="language flag ru" width={"30px"} height={"30px"}/>
                }
                <span className={currentLang === lang ? "menu-lang active" : ""} >{lang}</span>

              </div>
            </li>))
            }
          </ul>
          <ul className="navbar-nav flex-xl-row position-relative flex-column align-items-center mx-auto ">
            <li className={"nav-item ms-3  catalog active"}>
              <button className="fs-5 menu-katalog menu-link nav-link border-0  ">{currentLang === "ru" ? ru['Katalog'] : uz['Каталог']}</button>
              <ul className="catalog__list shadow">
                {allOfficeMebel && <li><Link to={'/allmebel'} className="catalog__link">{currentLang === "ru" ? ru['Offis mebellar toplami'] : uz['Набор Оффисныx мебелов']}</Link></li>}

                {officeMebels && <li><Link to={'/officemebel'} className="catalog__link">{currentLang === "ru" ? ru['Offis mebellari'] : uz['Оффисные мебели']}</Link></li>}

                {loftOfficeMebels && <li><Link to={'/loftmebel'} className="catalog__link">{currentLang === "ru" ? ru['Loft uslubidagi mebellar'] : uz['Оффисные мебели в стили LOFT']}</Link></li>}

                {allSoftMebels && <li><Link to={'/softmebel'} className="catalog__link">{currentLang === "ru" ? ru['Offis yumshoq mebellar toplami'] : uz['Набор мягкого мебели']}</Link></li>}

                {kitchenMebels && <li><Link to={'/kitchenmebel'} className="catalog__link">{currentLang === "ru" ? ru['Oshxona mebellar toplami'] : uz['Набор кухонных мебелей']}</Link></li>}

                {homeMebels && <li><Link to={'/allhomemebels'} className="catalog__link">{currentLang === "ru" ? ru['Xonadon uchun mebellar'] : uz['Мебели для дома']}</Link></li>}
              </ul>
            </li>
            <li className="nav-item ms-3 ">
              <Link className="nav-link fs-5 menu-link  text-center" to="/showroom">{currentLang === "ru" ? ru['Bizning salon'] : uz['Наш салон']}</Link>
            </li>
            <li className="nav-item ms-3 ">
              <Link className="nav-link fs-5  menu-link  text-center" to="/delivery">{currentLang === "ru" ? ru['Yetkazib berish'] : uz['Доставка']}</Link>
            </li>
            <li className="nav-item ms-3 ">
              <Link className="nav-link fs-5  menu-link text-center" to="/about">{currentLang === "ru" ? ru['Biz haqimizda'] : uz['O Нас']}</Link>
            </li>
          </ul>
          <p className="nav-item p-0 mt-0 mb-0 m-auto">
            <a className="nav-link d-flex justify-content-center p-0" href="tel:+998901832233" >
              <p className="py-xl-0 m-xl-0 pb-0 py-2 menu-link menu-phone">+998901832233</p>
            </a>
          </p>
          <ul className="navbar-nav flex-xl-row flex-row justify-content-center gap-3 align-items-center">
            <li className="nav-item">
              <a className="nav-link" href="https://t.me/MebelCityOfficial">
                <img src={telegram} className="media telegram menu-link" alt="" />
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://www.instagram.com/MebelCityOfficial">
                <img src={instagram} className="media menu-link" alt="" />
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="https://www.facebook.com/MebelCityOfficial.uz?mibextid=ZbWKwL">
                <img src={facebook} className="media menu-link" alt="" />
              </a>
            </li>
          </ul>
          <ul className="navbar-nav d-none d-xl-flex ms-xxl-3 ms-0">
            {
              lang?.map((lang, i) =>(<li key={i} className={currentLang === lang ? "nav-item active lang" : "nav-item"} onClick={() => changeLang(lang)}>
                <div className={'nav-link d-flex gap-2 align-items-center menu-link'}  >
                {
                  lang === 'ru' 
                    ? <img src={RuFlag} className={currentLang === lang ? "img-fluid flag active" : "img-fluid flag"} alt="language flag uz" width={"30px"} height={"30px"}/>
                    : <img src={uzFlag} className={currentLang === lang ? "img-fluid flag active" : "img-fluid flag"} alt="language flag ru" width={"30px"} height={"30px"}/>
                }
                  <span className={currentLang === lang ? "menu-lang active" : ""} >{lang}</span>

                </div>
              </li> )) 
            }
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default connect((
  { allOfficeMebel: { allOfficeMebel },
    allSoftMebels: { allSoftMebels },
    homeMebels: { homeMebels },
    kitchenMebels: { kitchenMebels },
    loftOfficeMebels: { loftOfficeMebels },
    officeMebels: { officeMebels }
  }

) => ({ allOfficeMebel, allSoftMebels, homeMebels, kitchenMebels, loftOfficeMebels, officeMebels }), null)(Header)