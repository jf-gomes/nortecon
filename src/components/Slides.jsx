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
            img: 'https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            title: 'Vantagem',
            txt: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga molestiae sunt ab asperiores aliquam ad reprehenderit, adipisci qui nobis. Cupiditate quas reiciendis provident dolorem eos optio molestias at molestiae cumque.'
        },
        {
            id: '1',
            img: 'https://images.pexels.com/photos/1668860/pexels-photo-1668860.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            title: 'Vantagem',
            txt: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga molestiae sunt ab asperiores aliquam ad reprehenderit, adipisci qui nobis. Cupiditate quas reiciendis provident dolorem eos optio molestias at molestiae cumque.'
        },
        {
            id: '2',
            img: 'https://images.pexels.com/photos/70912/pexels-photo-70912.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            title: 'Vantagem',
            txt: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga molestiae sunt ab asperiores aliquam ad reprehenderit, adipisci qui nobis. Cupiditate quas reiciendis provident dolorem eos optio molestias at molestiae cumque.'
        }
    ]

    return (
        <div className='slidesContainer d-flex align-items-center justify-content-center rounded-3 p-4'>
            <Swiper
                slidesPerView={1}
                pagination={{ clickable: true }}
                navigation
                autoplay
            >
                {slidesData.map((slide) => (
                    <SwiperSlide key={slide.id}>
                        <h2 className='text-center p-2 m-2'>{slide.title}</h2>
                        <div className='d-flex d-grid gap-3 flex-wrap align-items-center justify-content-center'>
                            <p className='slideText p-3'>{slide.txt}</p>
                            <img src={slide.img} alt={slide.title} className='slideImg rounded-3' />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}