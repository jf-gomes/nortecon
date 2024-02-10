import { register } from 'swiper/element/bundle'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import { Swiper, SwiperSlide } from 'swiper/react'
import './Slides.css'

export default function Slides(){

    const slidesData = [
        {
            id: '0',
            img: 'https://i.imgur.com/fRUQpfE.jpg',
            title: 'Sem juros, apenas taxa de administração'
        },
        {
            id: '1',
            img: 'https://i.imgur.com/Sza20sY.jpg',
            title: 'Pagamento do lance com a própria carta de crédito, limitado a 50%'
        },
        {
            id: '2',
            img: 'https://i.imgur.com/JKfupBh.jpg',
            title: 'Reembolso de despesas cartorarias em até 10% do valor da carta de crédito'
        },
        {
            id: '3',
            img: 'https://i.imgur.com/P3QqUqu.jpg',
            title: 'Reembolso de despesas cartorarias em até 10% do valor da carta de crédito'
        }
    ]

    return (
        <div className='slidesContainer d-flex align-items-center justify-content-center rounded-3 p-4'>
            <Swiper
                slidesPerView={1}
                pagination={{ clickable: true }}
                navigation
                autoplay
                style={{
                    "--swiper-pagination-color": "#014A39",
                    "--swiper-navigation-color": "#014A39"
                }}
            >
                {slidesData.map((slide) => (
                    <SwiperSlide key={slide.id}>
                        <div className='d-flex gap-4 align-items-center justify-content-center flex-wrap'>
                            <img src={slide.img} alt={slide.title} className='slideImg rounded-3' />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}