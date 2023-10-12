// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';



import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

//import images
import slide1 from '../assets/images/slide1.webp';
import slide2 from '../assets/images/slide2.webp';
import slide3 from '../assets/images/slide3.webp';
import slide4 from '../assets/images/slide4.webp';
import slide5 from '../assets/images/slide5.webp';
import SlideContent from './SlideContent';

export default function App() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
      <SwiperSlide><img src={slide1} alt="slide1" className='swiper-slide'/></SwiperSlide>
      <SwiperSlide><img src={slide2} alt="slide2" className='swiper-slide'/>
        <SlideContent/>
      </SwiperSlide>
      <SwiperSlide><img src={slide3} alt="slide3" className='swiper-slide'/>
        <SlideContent/>
      </SwiperSlide>
      <SwiperSlide><img src={slide4} alt="slide4" className='swiper-slide'/>
        <SlideContent/>
      </SwiperSlide>
      <SwiperSlide><img src={slide5} alt="slide5" className='swiper-slide'/>
      <SlideContent/>
      </SwiperSlide>
      </Swiper>
    </>
  );
}

