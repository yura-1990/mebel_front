import React from 'react'
import delivery from '../../img/delivery.jpg'
import delivery2 from '../../img/delivery2.jpg'
import uz from '../../lang/uz.json'
import ru from '../../lang/ru.json'

export default function Delivery({curLang}) {
  return (
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
  )
}
