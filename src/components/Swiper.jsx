// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';



import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

//import images
import slide2 from '../assets/images/slide2.webp';
import slide3 from '../assets/images/slide3.webp';
import slide4 from '../assets/images/slide4.webp';
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
      <SwiperSlide><img src={slide2} alt="slide2" className='swiper-slide'/>
        <SlideContent
          heading="New In footwear"
          detail="Discover our newest range of styles"
          linkTo="Shop now"
        />
      </SwiperSlide>
      <SwiperSlide><img src={slide3} alt="slide3" className='swiper-slide'/>
        <SlideContent
          heading="Essentials"
          detail="From basic vests to must have trousers, shop our essentials range"
          linkTo="Shop now"
        />
      </SwiperSlide>
      <SwiperSlide><img src={slide4} alt="slide4" className='swiper-slide'/>
        <SlideContent 
            heading="ROBELL"
            detail="We are an official stockist of Robell"
            linkTo="Shop now"
        />
      </SwiperSlide>

      </Swiper>
    </>
  );
}

