

import { register } from "swiper/element-bundle"
register()
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles


import React from "react";
const imgs = [{
    key: 1,
    laser: 'lazer.jpg'
}, {
    key: 2,
    laser: 'paisagem1.jpeg'
}, {
    key: 3,
    laser: 'paisagem2.jpeg'
}, {
    key: 4,
    laser: 'lazer.jpg'
}, {
    key: 5,
    laser: 'lazer.jpg'
}, {
    key: 6,
    laser: 'lazer.jpg'
},]

export const Carousel = () => {
    const [slidePrev, setSlidePrev] = React.useState(2)
    React.useEffect(() => {
        function hanldeResize() {
            if (window.innerWidth < 720) {
                setSlidePrev(1)
            } else {
                setSlidePrev(2)
            }
        }
        hanldeResize()
        window.addEventListener('resize', hanldeResize)
        return () => {
            window.removeEventListener('resize', hanldeResize)
        }
    }, [])
    return (
        <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={10}
            slidesPerView={slidePrev}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            navigation={false}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')

            }
        >

            {imgs.map(i => (
                <SwiperSlide key={i.key}>
                    <img style={{ width: "100%", objectFit: "cover", height: "200px" }} src={i.laser} alt="" />
                </SwiperSlide>
            ))}
            ...
        </Swiper>
    );
};