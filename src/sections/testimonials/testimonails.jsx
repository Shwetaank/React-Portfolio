import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css/autoplay";
import Testimonial from "./Testimonial";
import testimonails from "./data";
import "./testimonails.css";

// Component for rendering a list of testimonials using Swiper
const TestimonialList = () => {
  return (
    <section id="testimonials" data-aos="fade-in">
      {/* Section title */}
      <h2>What My Clients Say</h2>
      {/* Testimonials container */}
      <div className="container container__swiper">
        <p>
          Glowing <strong>testimonials</strong> serve as shining beacons,
          illuminating our dedication to excellence. 🌟 Witness how our work
          transforms websites into contemporary marvels, consistently surpassing
          expectations.
        </p>
        {/* Swiper component for testimonials */}
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
          data-aos="flip-up"
        >
          {/* Mapping through testimonial data and rendering each testimonial inside a SwiperSlide */}
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
