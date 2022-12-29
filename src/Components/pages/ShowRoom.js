import React from 'react'
import show from '../../img/biz.jpg'
import uz from '../../lang/uz.json'
import ru from '../../lang/ru.json'

export default function ShowRoom({curLang}) {
  return (
    <div className="container mt-4">
        <h1 style={{color:'blue' }}>{ curLang === "ru" ? ru['Bizning salon'] : uz['Наш салон']}</h1>
        <div className="my-3" style={{height:'3px', background: 'blue', width:'100%' }}></div>
        <div className="row justify-content-center">
            <div className="col-5">
                <img className="img-fluid" src={show} alt="" width={'526px'}  height={'395px'}/>
            </div>
            <div className="col-5 border border-danger">
                <iframe  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d187.33369555822597!2d69.19397893021892!3d41.301485509949295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8bd83efae4c7%3A0x741e4bd5f523f831!2z0YPQuy4g0JHQvtCz0LjRgdGC0L7QvQ!5e0!3m2!1sru!2sus!4v1655053014228!5m2!1sru!2sus" width="100%" height="100%"  loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>  
        </div>
        
        <p className="fs-3 text-center mx-auto"  style={{color:'blue', width:"65%" }}>{ curLang === "ru" ? ru['Toshkent shaxri, Chilonzor tumani, Kichik xalqa yo’li, Bogiston 1-chi tor ko’chasi, 58-uy, 2-chi qavat.'] : uz['Город Ташкент Чиланзарский район Улица Богистон 1-проезд Кичик халка йули, дом 58 (2-этаж)']}</p>
        <div className="my-3" style={{height:'3px', background: 'blue', width:'100%' }}></div>
    </div>
  )
}
