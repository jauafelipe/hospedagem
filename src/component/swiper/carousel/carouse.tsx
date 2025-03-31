

// import Swiper core and required modules
import { register } from "swiper/element-bundle"
register()
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';




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
    const [slidePrev, setSlidePrev] = React.useState(4)
    React.useEffect(() => {
        function hanldeResize() {
            const windowWidth = window.innerWidth
            if (windowWidth < 1920) { setSlidePrev(3) }
            else setSlidePrev(4)
            if (windowWidth < 800) { setSlidePrev(2) }
            if (windowWidth < 600) { setSlidePrev(1) }


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
            spaceBetween={4}
            slidesPerView={slidePrev}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            navigation={false}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')

            }
            autoplay={{ delay: 3000 }}
            loop={true}
        >

            {imgs.map(i => (
                <SwiperSlide
                    key={i.key}>
                    <img style={{
                        width: "500px",
                        objectFit: "cover",
                        height: "500px",
                        border: "solid 2px green"
                    }} src={i.laser} alt="" />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};