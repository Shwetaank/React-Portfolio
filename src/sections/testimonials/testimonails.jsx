// testimonails.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css/autoplay";
import Testimonial from "./Testimonial";
import testimonails from "./data";
import "./testimonails.css";

const TestimonialList = () => {
  return (
    <section id="testimonials">
      <h2>What My Clients Say</h2>
      <p>
        Glowing client testimonials! 🌟 Our work surpasses expectations, turning
        websites into modern marvels.
      </p>
      <div className="container">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          breakpoints={{
            601: { slidesPerView: 1 },
            1025: { slidesPerView: 2 },
          }}
          pagination={{ clickable: true }}
          modules={[Pagination, Autoplay]}
          autoplay={true}
          className="mySwiper"
        >
          {testimonails.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <Testimonial testimonial={testimonial} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TestimonialList;
