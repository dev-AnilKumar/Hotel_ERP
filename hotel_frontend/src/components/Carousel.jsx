import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper';

export default function App() {
    return (
        <div className="relative w-full h-full">
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
                className="mySwiper w-full h-full"
            >
                <SwiperSlide className="flex justify-center items-center bg-white text-center text-lg">
                    <img
                        src="https://via.placeholder.com/800x400"
                        alt="Slide 1"
                        className="w-full h-full object-cover"
                    />
                </SwiperSlide>
                <SwiperSlide className="flex justify-center items-center bg-white text-center text-lg">
                    <img
                        src="https://via.placeholder.com/800x400"
                        alt="Slide 2"
                        className="w-full h-full object-cover"
                    />
                </SwiperSlide>
                <SwiperSlide className="flex justify-center items-center bg-white text-center text-lg">
                    <img
                        src="https://via.placeholder.com/800x400"
                        alt="Slide 3"
                        className="w-full h-full object-cover"
                    />
                </SwiperSlide>
                {/* Additional slides */}
            </Swiper>
        </div>
    );
}
