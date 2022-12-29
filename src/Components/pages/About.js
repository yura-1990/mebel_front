import React from 'react'
import uz from '../../lang/uz.json'
import ru from '../../lang/ru.json'

export default function About({curLang}) {
  return (
    <div className="container mt-4">
        <h1 style={{color:'blue' }}>{ curLang === "ru" ? ru['Biz haqimizda'] : uz['O Нас']}</h1>
        <div className="my-3" style={{height:'3px', background: 'blue', width:'100%' }}></div>
        <div>
            <h4>{ curLang === "ru" ? ru['Hurmatli xaridor!'] : uz['Уважаемый покупатель!']}</h4>
            <p className="text-dark ms-3 fs-4" style={{textAlign:"justify", lineHeight:'200%'}}>
            { curLang === "ru" ? ru["Avvalam bor saytimizga bo'lgan qiziqishingiz uchun minnatdorchilik bildiramiz va taqdim etilgan mebel mahsulotlarimiz kelajakda ofisingizni bezatadi degan umiddamiz. Bizning veb-saytimizda Siz sifatli, estetika va ergonomikaga ega bo'lgan keng turdagi ofis mebellarini topasiz. Albatta, biz O‘zbekistondagi yagona mebel ishlab chiqaruvchisi emasmiz, lekin biz shuni aytmoqchimizki, bizning mahsulotlarimiz ishonchli va raqobatbardoshdir. Umid qilamizki, Siz bizning mahsulotlarimizdan mamnun bo'lasiz va mijozlarimizga aylanasiz."] : uz['Мы благодарим Вас за интерес, проявленный к нашему веб-сайту, и надеемся, что представленная продукция украсит Ваш офис в будущем. В нашем веб-сайте Вы найдете широкий ассортимент офисной мебели, которая отличается хорошим качеством, эстетикой и эргономикой. Конечно мы не единственный производитель мебели в Узбекистане, но хотим уверить Вас, что наша продукция надежна и выдержит конкуренцию. Надеемся, что Вы станете нашими клиентами, и будете довольны нашей продукцией.']}
                <br/>
                { curLang === "ru" ? ru['Hurmat bilan,'] : uz['С уважением,']}
            </p>
            <p className="fs-6 ms-3 text-uppercase fw-bold">{ curLang === "ru" ? ru['«MEBELCITY» KOMPANIYASI'] : uz['Компания «MEBELCITY»']}</p>
        </div>
        <div className="my-3" style={{height:'2px', background: 'blue', width:'100%' }}></div>
        <div className="my-4">
            <h4>{ curLang === "ru" ? ru["BIZ FAQAT XARIDDAN KO'PROGINI TAKLIF ETAMIZ:"] : uz['БОЛЬШЕ, ЧЕМ ПРОСТО ПОКУПКИ, МЫ ПРЕДЛАГАЕМ:']}</h4>
            <ul className="d-flex gap-4 justify-content-between list-unstyled ms-3">
                <li>👍  { curLang === "ru" ? ru['Transport;'] : uz['Транспортировка;']}</li>
                <li>👍  { curLang === "ru" ? ru['Interer dizayni;'] : uz['Дизайн интерьера;']}</li>
                <li>👍  { curLang === "ru" ? ru["Mebel yig'ish;"] : uz['Сборка мебели;']}</li>
                <li>👍  { curLang === "ru" ? ru["Sifat kafolati."] : uz['Гарантия качества.']}</li>
            </ul>
        </div>
        <div>
            <h4>{curLang === "ru" ? ru["NEGA AYNAN BIZGA?"] : uz['ПОЧЕМУ ИМЕННО МЫ?']}</h4>
            <p className="text-dark ms-3 fs-4" style={{textAlign:"justify", lineHeight:'200%'}}>
                {
                    curLang === "ru" 
                        ? "Если вам интересно, почему вы должны выбрать MEBELITY из числа многих производителей мебели, вот список причин:"
                        : "Agar Siz ko'plab mebel ishlab chiqaruvchilari orasida nima uchun MEBELCITY ni tanlashingiz kerakligi haqida savol tug'ilsa, quyida keltirilgan sabablar ro'yxati bilan tanishing:"
                }
                
            </p><br/>
            <p className="text-dark ms-3 fs-4" style={{textAlign:"justify", lineHeight:'200%'}}>
                {
                    curLang === "ru" 
                        ? (<div><b>✔  МЕБЕЛЬНЫЙ БИЗНЕС С ТРАДИЦИЯМИ — MEBELCITY</b> - убекская компания с традициями и более чем 20-летним опытом работы в этой отрасли. Мы активно поддерживаем Узбекский рынок труда, предоставляя работу молодых людям. Мы гордимся тем, что имеем команду квалифицированных специалистов для активной поддержки деятельности компании и содействия созданию уникальных продуктов для Вас.</div>)
                        : (<div><b>✔ MEBEL BIZNESIDA O’Z AN’ANALARIGA EGA — MEBELCITY</b> - bu mebel ishlab chiqarish sohasida 20 yildan ortiq tajribasi mavjud va o’z anʼanalariga ega oʻzbek kompaniyasidir. Biz yoshlarni ish bilan ta’minlash orqali O‘zbekiston mehnat bozorini faol qo‘llab-quvvatlab kelmoqdamiz. Bizning kompaniyamiz Siz uchun noyob mebel mahsulotlarini ishlab chiqarishda malakali mutaxassislar jamoasiga ega ekanligimizdan faxrlanamiz.</div>)
                }
                
            </p><br/>
            <p className="text-dark ms-3 fs-4" style={{textAlign:"justify", lineHeight:'200%'}}>
            {   curLang === "ru" ? <div>
                ✔  <b>САМЫЙ ШИРОКИЙ ВЫБОР ОФИСНОГО МЕБЕЛИ</b>  — Вам не нужно идти из магазина в магазин, чтобы найти все необходимое для организации функционального интерьера. Наш магазин предлагает комплексные дизайнерские решения, от письменных столиков до вместительных шкафов. Узнайте, что мы предлагаем:</div>
                :<div>✔  <b>OFIS MEBELLARINING KENG TANLANMASI</b> — Funktsional interyerni tashkil qilishda zarur bo'lgan mebel maxsulotlarini topish uchun do'konma-do'konga borish shart emas. Bizning do'konimiz stollardan tortib javonlar(shkaflar)gacha bo'lgan keng qamrovli dizayn echimlarini taklif etadi. Biz quyida Siz uchun nimalarni taklif qilayotganimizni bilib oling:</div>
                }
            </p>
            <ul className="d-flex justify-content-between gap-4 list-unstyled ms-3">
                <li>👍 {curLang === "ru" ? "Столи" : "Ofis mebellar to'plamlari"} </li>
                <li>👍 {curLang === "ru" ? "Шкафи" : "Ofis mebellari (Stollar, javonlar)"}</li>
                <li>👍 {curLang === "ru" ? "Набор офисного мебели" : "Loft uslubidagi mebellar "} </li>
                <li>👍 {curLang === "ru" ? "Мебели в стиле лофт" : "Ofis yumshoq mebellar to'plamlari "} </li>
            </ul><br/>
            <p className="text-dark ms-3 fs-4" style={{textAlign:"justify", lineHeight:'200%'}}>
                {
                    curLang === "ru"
                    ? <div><b>✔ КОМПЛЕКСНОЕ ОБСЛУЖИВАНИЕ</b> — Мебель, которую вы выбираете, является Вашим решением, но мы можем помочь Вам решить многие другие задачи. Наши услуги включают:</div>
                    :<div><b>✔	TO'LIQ XIZMAT KO’RSATISH</b> - Siz tanlagan mebel albatta bu Sizning qaroringiz, ammo biz Sizga boshqa ko'plab masalalarni hal qilishda yordam beramiz. Bizning xizmatlarimizga quyidagilar kiradi:</div>
                }
            </p>
            
            <ul className="d-flex flex-column gap-3">
                <li className="ms-5 fs-5"  style={{textAlign:"justify", lineHeight:'200%'}}>
                    {
                        curLang === "ru" 
                            ? <div><strong>мы доставляем</strong>  - на MEBEL CITY Вам не нужно беспокоиться о том, как получить новую мебель. Если это не подходит для вашего автомобиля — попробуйте нашу службу доставки. Просто скажи нам, где и когда, и мы сделаем все остальное;</div>
                            : <div><strong>yetkazib beramiz</strong> - MEBEL CITY-da Siz sotib olgan yangi mebellarni qanday olib ketish haqida bosh qotirmaysiz. Agarda Sizning mashinangiz yuk xonasiga sigmasa, bizning yetkazib berish xizmatimizni sinab ko'ring. Bizga qayerda va qachonligini ayting, qolganini biz xal qilamiz;</div>
                    }
                    
                </li>
                <li className="ms-5 fs-5"  style={{textAlign:"justify", lineHeight:'200%'}}>
                    {
                        curLang === "ru" 
                            ? <div> <strong>помощь с тяжелым подъемом</strong> - забрать вашу мебель в офис, особенно если она тяжелая, требует больших усилий. Наши сотрудники будут поставлять эту тяжелую мебель непосредственно в комнату, которую вы предоставляете;</div>
                            :<div><strong>og'ir mebel maxsulotlarimizni ko'tarishda yordam beramiz</strong>  – bizdan sotib olgan mebelingizni ofisga olib borish, ayniqsa og'ir bo'lsa, juda ko'p inson kuchi talab qiladi. Bizning xodimlarimiz ushbu og'ir mebelni to'g'ridan-to'g'ri Siz taqdim etgan manzildagi ofisga etkazib beradi;</div>
                    }
                   
                </li>
                <li className="ms-5 fs-5"  style={{textAlign:"justify", lineHeight:'200%'}}>
                    {
                        curLang === "ru" 
                            ? <div><strong>сборка</strong> - мы разрабатываем наши продукты, чтобы они были легко собраны. Но если у вас нет времени на это, мы можем сделать это за вас. Спросите наших продавцов о деталях и ценах.</div>
                            : <div><strong>yig'ib beramiz</strong> - biz mahsulotlarimizni yig'ilishini oson bo'lishi uchun loyihalashtiramiz. Ammo bunga vaqtingiz bo'lmasa, biz bu ishlarni Siz uchun qila olamiz. Sotuvchilarimizdan tafsilotlar va narxlarni so'rab oling.</div>
                    }
                    
                </li>
            </ul>
            <br/>
            <p className="text-dark ms-3 fs-4" style={{textAlign:"justify", lineHeight:'200%'}}>
               {
                    curLang === "ru" 
                        ?<div><b>✔  ПРОФЕССИОНАЛЬНОЕ ОБСЛУЖИВАНИЕ</b>  — Наши сотрудники являются экспертами в своей области. Если у Вас есть какие-либо вопросы или Вам нужно знать больше, вы всегда можете их задать. Мы ответим на все Ваши вопросы, рассмотрим все вопросы и помогаем вам принять наилучшее решение. Мы к Вашим услугам!</div>
                        :<div><b>✔  PROFESSIONAL XIZMAT</b> - Bizning xodimlarimiz o'z sohasining mutaxassislaridir. Agar Sizda biron bir savol bo'lsa yoki ko'proq bilmoqchi bo'lsangiz, har doim so'rashingiz mumkin. Biz Sizning barcha savollaringizni ko'rib chiqamiz, barcha savollarizga javob beramiz va eng yaxshi qaror qabul qilishingizga yordam beramiz. Biz Sizning xizmatingizdamiz!</div>
                
                }
                
            </p>
            
        </div>
        <div className="my-3" style={{height:'2px', background: 'blue', width:'100%' }}></div>
        
    </div>
  )
}
