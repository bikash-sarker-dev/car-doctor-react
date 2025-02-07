import React, { useRef } from "react";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "./hero.css";

const Hero = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  return (
    <div className="h-[700px]">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        <SwiperSlide>
          <div
            style={{
              background: `url('https://images.pexels.com/photos/7541343/pexels-photo-7541343.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
              backgroundColor: "rgba(0,0,0,0.6)",
            }}
            className="w-full h-full flex items-center bg-blend-overlay"
          >
            <div className="container text-left">
              <h1 className="text-car-white font-bold text-6xl leading-[80px]">
                Affordable <br /> Price For Car <br /> Servicing
              </h1>
              <p className="text-neutral-300 max-w-md my-6">
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>

              <div className="space-x-8">
                <Link
                  to=""
                  className="btn  btn-outline bg-car-primary border-car-primary hover:bg-car-primary hover:border-car-primary  text-car-white rounded-none"
                >
                  Appointment
                </Link>
                <Link
                  to=""
                  className="btn  btn-outline border-car-primary hover:bg-car-primary hover:border-car-primary  text-car-primary rounded-none"
                >
                  Appointment
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            style={{
              background: `url('https://images.pexels.com/photos/4488665/pexels-photo-4488665.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
              backgroundColor: "rgba(0,0,0,0.6)",
            }}
            className="w-full h-full flex items-center bg-blend-overlay"
          >
            <div className="container text-right">
              <h1 className="text-car-white font-bold text-6xl leading-[80px]">
                Affordable <br /> Price For Car <br /> Servicing
              </h1>
              <p className="text-neutral-300 max-w-md my-6 ml-auto">
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>

              <div className="space-x-8">
                <Link
                  to=""
                  className="btn  btn-outline bg-car-primary border-car-primary hover:bg-car-primary hover:border-car-primary  text-car-white rounded-none"
                >
                  Appointment
                </Link>
                <Link
                  to=""
                  className="btn  btn-outline border-car-primary hover:bg-car-primary hover:border-car-primary  text-car-primary rounded-none"
                >
                  Appointment
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            style={{
              background: `url('https://images.pexels.com/photos/3970342/pexels-photo-3970342.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
              backgroundColor: "rgba(0,0,0,0.6)",
            }}
            className="w-full h-full flex items-center bg-blend-overlay"
          >
            <div className="container text-left">
              <h1 className="text-car-white font-bold text-6xl leading-[80px]">
                Affordable <br /> Price For Car <br /> Servicing
              </h1>
              <p className="text-neutral-300 max-w-md my-6">
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>

              <div className="space-x-8">
                <Link
                  to=""
                  className="btn  btn-outline bg-car-primary border-car-primary hover:bg-car-primary hover:border-car-primary  text-car-white rounded-none"
                >
                  Appointment
                </Link>
                <Link
                  to=""
                  className="btn  btn-outline border-car-primary hover:bg-car-primary hover:border-car-primary  text-car-primary rounded-none"
                >
                  Appointment
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </div>
  );
};

export default Hero;
