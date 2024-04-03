import React from 'react'
import delivery from '../../img/delivery.jpg'
import delivery2 from '../../img/delivery2.jpg'
import uz from '../../lang/uz.json'
import ru from '../../lang/ru.json'
import logo from '../../img/MEBEL_CITY_HORIZONTAL_WHITE.png'
import { Link } from 'react-router-dom'

export default function Delivery({curLang}) {
  return (
    <div>

    <div className="container mt-4">
        <h1 style={{color:'blue' }}>{ curLang === "ru" ? ru['Yetkazib berish'] : uz['Доставка']}</h1>
        <div className="my-3" style={{height:'3px', background: 'blue', width:'100%' }}></div>
        <div className="row align-items-center">
            <div className="col-8">
                <ol className="d-flex flex-column justify-content-between gap-5">
                    <li className="fs-5 fw-bold text-uppercase">{ curLang === "ru" ? ru['REKLAMA OTKAZISH UCHUN MUTAXASSIS BORISHI - BEPUL'] : uz['МОНТАЖ НАБОРА КОРПУСНОЙ МЕБЕЛИ ПО ГОРОДУ ТАШКЕНТ — БЕСПЛАТНО']}</li>
                    <li className="fs-5 fw-bold text-uppercase">{ curLang === "ru" ? ru['O’LCHOV ISHLARINI BAJARISH UCHUN TOSHKENT SHAXRI BO’YICHA MUTAXASSIS BORISHI - BEPUL'] : uz['ВЫЕЗД ЭКСПЕРТА (УСТРАНЕНИЕ РЕКЛАМАЦИИ) — БЕСПЛАТНО']}</li>
                    <li className="fs-5 fw-bold text-uppercase">{ curLang === "ru" ? ru['MEBEL MAXSULOTLARIMIZNI TOSHKENT SHAHRI BO’YICHA MONTAJ ISHLARINI BAJARISH - BEPUL'] : uz['ЗАМЕР С ВЫЕЗДОМ ПО ГОРОДУ ТАШКЕНТ — БЕСПЛАТНО']}</li>
                    <li className="fs-5 fw-bold text-uppercase">{ curLang === "ru" ? ru['O’LCHOV ISHLARINI BAJARISH UCHUN TOSHKENT SHAXRIDAN TASHQARIGA MUTAXASSIS BORISHI - KELISHILGAN XOLDA'] : uz['ЗАМЕР С ВЫЕЗДОМ ЗА ПРЕДЕЛЫ ТАШКЕНТА — ДОГОВОРНАЯ']}</li>
                    <li className="fs-5 fw-bold text-uppercase">{ curLang === "ru" ? ru["TOSHKENT SHAHRI BO'YICHA YETKAZIB BERISH, + HOHLAGAN QAVATGA OLIB CHIQIB BERISH - KELISHILGAN XOLDA"] : uz['ДОСТАВКА ПО ГОРОДУ ТАШКЕНТ +ПОДЪЁМ НА ЛЮБОЙ ЭТАЖ — ДОГОВОРНАЯ']}</li>
                    <li className="fs-5 fw-bold text-uppercase">{ curLang === "ru" ? ru["TOSHKENT SHAHRIDAN TASHQARISIGA  YETKAZIB BERISH - KELISHILGAN XOLDA"] : uz['ДОСТАВКА ЗА ПРЕДЕЛЫ ТАШКЕНТА — ДОГОВОРНАЯ']}</li>
                    
                </ol>
            </div>
            <div className="col-4 d-flex flex-column gap-2">
                <img src={delivery}  className=" w-100"  alt="delivery photo" width={"416px"} height={'277px'} />
                <img src={delivery2} className=" w-100"  alt="delivery photo" width={"416px"} height={'277px'} />
            </div>
        </div>
        <div className="my-3   " style={{height:'3px', background: 'blue', width:'100%' }}>
        </div>
        {
            curLang !== "ru" && <span className='text-center text-danger fw-bold fs-5 d-block mt-3 '> YUQORIDAGI XIZMATLARNI BAJARISHDAN OLDIN XURMATLI MIJOZ TOSHKENTDAGI SALONIMIZGA TASHRIF BUYURGANIZDAN KEYIN AMALGA OSHIRILISHINI TA’KIDLAB O’TAMIZ.</span>
        }
    </div>

    <div className='footer-distributed'>
        <footer className="container  ">

          <div>
            <Link className="navbar-brand logo" to="/">
              <img className="img-fluid" width="300px" height={"70px"}  src={logo} alt="Logo type for mebelsity" />
            </Link>
            <p className="footer-company-name">© 2015</p>
          </div>

          <div className='d-flex align-items-start flex-wrap media-footer gap-5'>

            <div className='d-flex align-items-center word-break gap-2'>
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="white" d="M12 2C7.589 2 4 5.589 4 9.995C3.971 16.44 11.696 21.784 12 22c0 0 8.029-5.56 8-12c0-4.411-3.589-8-8-8m0 12c-2.21 0-4-1.79-4-4s1.79-4 4-4s4 1.79 4 4s-1.79 4-4 4"/></svg>
              </div>
              <a href="https://www.google.com/maps/place/%D1%83%D0%BB.+%D0%91%D0%BE%D0%B3%D0%B8%D1%81%D1%82%D0%BE%D0%BD/@41.301486,69.19411,21z/data=!4m6!3m5!1s0x38ae8bd83efae4c7:0x741e4bd5f523f831!8m2!3d41.301484!4d69.194106!16s%2Fg%2F11j247y7bz?hl=ru&entry=ttu" target='_blank' className='address word-break'>{ curLang === "ru" ? ru['Toshkent shaxri, Chilonzor tumani, Kichik xalqa yo’li, Bogiston 1-chi tor ko’chasi, 58-uy, 2-chi qavat.'] : uz['Город Ташкент Чиланзарский район Улица Богистон 1-проезд Кичик халка йули, дом 58 (2-этаж)']}</a>
            </div>

            <div className='d-flex align-items-center gap-2'>
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="none" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M22 16.92v3a2 2 0 0 1-2.18 2a19.79 19.79 0 0 1-8.63-3.07a19.5 19.5 0 0 1-6-6a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72a12.84 12.84 0 0 0 .7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45a12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92"/></svg>   
              <a className='call' href='tel: +998901832233'>+998901832233</a>
            </div>

            <div className='d-flex flex-column align-items-start gap-2'>
              <div className='d-flex align-items-center gap-2'>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="white" d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 14H4V8l8 5l8-5zm-8-7L4 6h16z"/></svg>
                <p className='m-0'><a href="mailto:umaroverassel@gmail.com" className='email'>umaroverassel@gmail.com</a></p>
              </div>

              <ul className="d-flex list-unstyled justify-content-between w-100">
                <li className="nav-item">
                  <a className="nav-link" href="https://t.me/MebelCityOfficial">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 256 256"><defs><linearGradient id="logosTelegram0" x1="50%" x2="50%" y1="0%" y2="100%"><stop offset="0%" stop-color="#2AABEE"/><stop offset="100%" stop-color="#229ED9"/></linearGradient></defs><path fill="url(#logosTelegram0)" d="M128 0C94.06 0 61.48 13.494 37.5 37.49A128.038 128.038 0 0 0 0 128c0 33.934 13.5 66.514 37.5 90.51C61.48 242.506 94.06 256 128 256s66.52-13.494 90.5-37.49c24-23.996 37.5-56.576 37.5-90.51c0-33.934-13.5-66.514-37.5-90.51C194.52 13.494 161.94 0 128 0"/><path fill="#FFF" d="M57.94 126.648c37.32-16.256 62.2-26.974 74.64-32.152c35.56-14.786 42.94-17.354 47.76-17.441c1.06-.017 3.42.245 4.96 1.49c1.28 1.05 1.64 2.47 1.82 3.467c.16.996.38 3.266.2 5.038c-1.92 20.24-10.26 69.356-14.5 92.026c-1.78 9.592-5.32 12.808-8.74 13.122c-7.44.684-13.08-4.912-20.28-9.63c-11.26-7.386-17.62-11.982-28.56-19.188c-12.64-8.328-4.44-12.906 2.76-20.386c1.88-1.958 34.64-31.748 35.26-34.45c.08-.338.16-1.598-.6-2.262c-.74-.666-1.84-.438-2.64-.258c-1.14.256-19.12 12.152-54 35.686c-5.1 3.508-9.72 5.218-13.88 5.128c-4.56-.098-13.36-2.584-19.9-4.708c-8-2.606-14.38-3.984-13.82-8.41c.28-2.304 3.46-4.662 9.52-7.072"/></svg>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="https://www.instagram.com/MebelCityOfficial">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 256 256"><g fill="none"><rect width="256" height="256" fill="url(#skillIconsInstagram0)" rx="60"/><rect width="256" height="256" fill="url(#skillIconsInstagram1)" rx="60"/><path fill="#fff" d="M128.009 28c-27.158 0-30.567.119-41.233.604c-10.646.488-17.913 2.173-24.271 4.646c-6.578 2.554-12.157 5.971-17.715 11.531c-5.563 5.559-8.98 11.138-11.542 17.713c-2.48 6.36-4.167 13.63-4.646 24.271c-.477 10.667-.602 14.077-.602 41.236s.12 30.557.604 41.223c.49 10.646 2.175 17.913 4.646 24.271c2.556 6.578 5.973 12.157 11.533 17.715c5.557 5.563 11.136 8.988 17.709 11.542c6.363 2.473 13.631 4.158 24.275 4.646c10.667.485 14.073.604 41.23.604c27.161 0 30.559-.119 41.225-.604c10.646-.488 17.921-2.173 24.284-4.646c6.575-2.554 12.146-5.979 17.702-11.542c5.563-5.558 8.979-11.137 11.542-17.712c2.458-6.361 4.146-13.63 4.646-24.272c.479-10.666.604-14.066.604-41.225s-.125-30.567-.604-41.234c-.5-10.646-2.188-17.912-4.646-24.27c-2.563-6.578-5.979-12.157-11.542-17.716c-5.562-5.562-11.125-8.979-17.708-11.53c-6.375-2.474-13.646-4.16-24.292-4.647c-10.667-.485-14.063-.604-41.23-.604zm-8.971 18.021c2.663-.004 5.634 0 8.971 0c26.701 0 29.865.096 40.409.575c9.75.446 15.042 2.075 18.567 3.444c4.667 1.812 7.994 3.979 11.492 7.48c3.5 3.5 5.666 6.833 7.483 11.5c1.369 3.52 3 8.812 3.444 18.562c.479 10.542.583 13.708.583 40.396c0 26.688-.104 29.855-.583 40.396c-.446 9.75-2.075 15.042-3.444 18.563c-1.812 4.667-3.983 7.99-7.483 11.488c-3.5 3.5-6.823 5.666-11.492 7.479c-3.521 1.375-8.817 3-18.567 3.446c-10.542.479-13.708.583-40.409.583c-26.702 0-29.867-.104-40.408-.583c-9.75-.45-15.042-2.079-18.57-3.448c-4.666-1.813-8-3.979-11.5-7.479s-5.666-6.825-7.483-11.494c-1.369-3.521-3-8.813-3.444-18.563c-.479-10.542-.575-13.708-.575-40.413c0-26.704.096-29.854.575-40.396c.446-9.75 2.075-15.042 3.444-18.567c1.813-4.667 3.983-8 7.484-11.5c3.5-3.5 6.833-5.667 11.5-7.483c3.525-1.375 8.819-3 18.569-3.448c9.225-.417 12.8-.542 31.437-.563zm62.351 16.604c-6.625 0-12 5.37-12 11.996c0 6.625 5.375 12 12 12s12-5.375 12-12s-5.375-12-12-12zm-53.38 14.021c-28.36 0-51.354 22.994-51.354 51.355c0 28.361 22.994 51.344 51.354 51.344c28.361 0 51.347-22.983 51.347-51.344c0-28.36-22.988-51.355-51.349-51.355zm0 18.021c18.409 0 33.334 14.923 33.334 33.334c0 18.409-14.925 33.334-33.334 33.334c-18.41 0-33.333-14.925-33.333-33.334c0-18.411 14.923-33.334 33.333-33.334"/><defs><radialGradient id="skillIconsInstagram0" cx="0" cy="0" r="1" gradientTransform="matrix(0 -253.715 235.975 0 68 275.717)" gradientUnits="userSpaceOnUse"><stop stop-color="#FD5"/><stop offset=".1" stop-color="#FD5"/><stop offset=".5" stop-color="#FF543E"/><stop offset="1" stop-color="#C837AB"/></radialGradient><radialGradient id="skillIconsInstagram1" cx="0" cy="0" r="1" gradientTransform="matrix(22.25952 111.2061 -458.39518 91.75449 -42.881 18.441)" gradientUnits="userSpaceOnUse"><stop stop-color="#3771C8"/><stop offset=".128" stop-color="#3771C8"/><stop offset="1" stop-color="#60F" stop-opacity="0"/></radialGradient></defs></g></svg>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link " href="https://www.facebook.com/MebelCityOfficial.uz?mibextid=ZbWKwL">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 16 16"><path fill="currentColor" d="M8 1C4.13 1 1 4.15 1 8.04c0 3.51 2.56 6.43 5.91 6.96v-4.92H5.13V8.04h1.78V6.49c0-1.77 1.05-2.74 2.64-2.74c.77 0 1.57.14 1.57.14v1.73h-.88c-.87 0-1.14.54-1.14 1.1v1.32h1.94l-.31 2.04H9.1V15c3.35-.53 5.91-3.44 5.91-6.96c0-3.89-3.13-7.04-7-7.04Z"/></svg>
                  </a>
                </li>
              </ul>
            </div>

          </div>
        </footer>
      </div>
    </div>

  )
}
