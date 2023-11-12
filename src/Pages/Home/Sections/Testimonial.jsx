import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Rating } from "@smastrom/react-rating";
import quote from "../../../assets/home/quote-left 1.svg";
import "@smastrom/react-rating/style.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";
const Testimonial = () => {
  return (
    <div className="py-24">
      <SectionTitle
        subTitle={"What Our Clients Say"}
        title={"TESTIMONIALS"}
      ></SectionTitle>

      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide className="text-center px-14">
          <Rating
            style={{ maxWidth: 180, margin: "0 auto" }}
            value={5}
            readOnly
          />
          <div className="my-5">
            <img className="mx-auto" src={quote} alt="" />
          </div>
          <p>
            Various version have evolved over the years, sometimes by accident,
            sometimes on purpose (injected humour and the like). It is a long
            established fact that a reader will be distracted by the readable
            content of a page when looking at its layout.
          </p>
          <h4 className="text-2xl  mt-5 text-[#CD9003]">JANE DOE</h4>
        </SwiperSlide>
        <SwiperSlide className="text-center px-14">
          <Rating
            style={{ maxWidth: 180, margin: "0 auto" }}
            value={5}
            readOnly
          />
          <div className="my-5">
            <img className="mx-auto" src={quote} alt="" />
          </div>
          <p>
            Various version have evolved over the years, sometimes by accident,
            sometimes on purpose (injected humour and the like). It is a long
            established fact that a reader will be distracted by the readable
            content of a page when looking at its layout.
          </p>
          <h4 className="text-2xl  mt-5 text-[#CD9003]">JANE DOE</h4>
        </SwiperSlide>
        <SwiperSlide className="text-center px-14">
          <Rating
            style={{ maxWidth: 180, margin: "0 auto" }}
            value={5}
            readOnly
          />
          <div className="my-5">
            <img className="mx-auto" src={quote} alt="" />
          </div>
          <p>
            Various version have evolved over the years, sometimes by accident,
            sometimes on purpose (injected humour and the like). It is a long
            established fact that a reader will be distracted by the readable
            content of a page when looking at its layout.
          </p>
          <h4 className="text-2xl  mt-5 text-[#CD9003]">JANE DOE</h4>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Testimonial;
