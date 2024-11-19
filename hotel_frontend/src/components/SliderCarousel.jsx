import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const SliderCarousel = ({ images }) => {
    return (
        <div className="relative w-full h-[480px]">
            <Swiper
                // spaceBetween={30}
                // centeredSlides={true}
                autoplay={{
                    delay: 5500,
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
                        src="https://plus.unsplash.com/premium_photo-1661964071015-d97428970584?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG90ZWx8ZW58MHwwfDB8fHww"
                        alt="Slide 1"
                        className="w-full h-full object-cover" />
                </SwiperSlide>
                <SwiperSlide className="flex justify-center items-center bg-white text-center text-lg">
                    <img
                        src="https://plus.unsplash.com/premium_photo-1687960116497-0dc41e1808a2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aG90ZWx8ZW58MHwwfDB8fHww"
                        alt="Slide 2"
                        className="w-full h-full object-cover" />
                </SwiperSlide>
                <SwiperSlide className="flex justify-center items-center bg-white text-center text-lg">
                    <img
                        src="https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aG90ZWx8ZW58MHwwfDB8fHww"
                        alt="Slide 3"
                        className="w-full h-full object-cover"
                    />
                </SwiperSlide>
                <SwiperSlide className="flex justify-center items-center bg-white text-center text-lg">
                    <img
                        src="https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aG90ZWx8ZW58MHwwfDB8fHww"
                        alt="Slide 3"
                        className="w-full h-full object-cover"
                    />
                </SwiperSlide>
                <SwiperSlide className="flex justify-center items-center bg-white text-center text-lg">
                    <img
                        src="https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aG90ZWx8ZW58MHwwfDB8fHww"
                        alt="Slide 3"
                        className="w-full h-full object-cover"
                    />
                </SwiperSlide>
            </Swiper>
        </div>
    );
}
export default SliderCarousel
