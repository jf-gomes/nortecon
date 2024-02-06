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
            title: 'Sem juros, apenas taxa de administração',
            txt: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga molestiae sunt ab asperiores aliquam ad reprehenderit, adipisci qui nobis. Cupiditate quas reiciendis provident dolorem eos optio molestias at molestiae cumque.'
        },
        {
            id: '1',
            img: 'https://images.pexels.com/photos/1668860/pexels-photo-1668860.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            title: 'Pagamento do lance com a própria carta de crédito, limitado a 50%',
            txt: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga molestiae sunt ab asperiores aliquam ad reprehenderit, adipisci qui nobis. Cupiditate quas reiciendis provident dolorem eos optio molestias at molestiae cumque.'
        },
        {
            id: '2',
            img: 'https://images.pexels.com/photos/70912/pexels-photo-70912.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            title: 'Reembolso de despesas cartorarias em até 10% do valor da carta de crédito',
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
                        <div className='d-flex gap-4 align-items-center justify-content-center flex-wrap'>
                            <p className='text-center fs-4 p-2 m-2'>{slide.title}</p>
                            <img src={slide.img} alt={slide.title} className='slideImg rounded-3' />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}