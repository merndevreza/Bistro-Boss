import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import slide1 from '../../../assets/home/slide1.jpg'
import slide2 from '../../../assets/home/slide2.jpg'
import slide3 from '../../../assets/home/slide3.jpg'
import slide4 from '../../../assets/home/slide4.jpg'
import slide5 from '../../../assets/home/slide5.jpg'

// import required modules
import { Pagination } from 'swiper/modules';

const Category = () => {
   return (
      <div className="my-20">
         <SectionTitle title={"Order Online"} subTitle={"From 11:00am to 10:00pm"}></SectionTitle>
         <Swiper
        slidesPerView={4}
        spaceBetween={30}
        pagination={{
          clickable: true,
          el: '.swiper-custom-pagination',
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
        <div className="relative">
        <img className="w-full" src={slide1} alt="" />
        <div className="bg-[#000] w-full h-full absolute left-0 top-0 opacity-20"></div>
         <h3 className="text-3xl absolute bottom-5 left-1/2 -translate-x-1/2  text-[#fff] text-center font-title">Salads</h3>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="relative">
        <img className="w-full" src={slide2} alt="" />
        <div className="bg-[#000] w-full h-full absolute left-0 top-0 opacity-20"></div>
         <h3 className="text-3xl absolute bottom-5 left-1/2 -translate-x-1/2  text-[#fff] text-center font-title">Pizza</h3>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="relative">
        <img className="w-full" src={slide3} alt="" />
        <div className="bg-[#000] w-full h-full absolute left-0 top-0 opacity-20"></div>
         <h3 className="text-3xl absolute bottom-5 left-1/2 -translate-x-1/2  text-[#fff] text-center font-title">Soup</h3>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="relative">
        <img className="w-full" src={slide4} alt="" />
        <div className="bg-[#000] w-full h-full absolute left-0 top-0 opacity-20"></div>
         <h3 className="text-3xl absolute bottom-5 left-1/2 -translate-x-1/2  text-[#fff] text-center font-title">Cake</h3>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="relative">
        <img className="w-full" src={slide5} alt="" />
        <div className="bg-[#000] w-full h-full absolute left-0 top-0 opacity-20"></div>
         <h3 className="text-3xl absolute bottom-5 left-1/2 -translate-x-1/2  text-[#fff] text-center font-title">Salad</h3>
        </div>
        </SwiperSlide>
      </Swiper>
      <div className="swiper-custom-pagination text-center mt-10 space-x-2"/>
      </div>
   );
};

export default Category;