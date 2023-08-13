import React, {useState} from 'react'

import {Navigation, Pagination, Keyboard, Autoplay, Zoom } from 'swiper/modules';

import { Swiper, SwiperSlide} from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/zoom';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import 'swiper/css/scrollbar';


export const AnnouncementSwiper = () => {
    const [imageLoaded, setImageLoaded] = useState(false);
    const handleImageLoad = () => {
        setImageLoaded(true);
      };

    const imgUrls=[
        "https://i.ibb.co/fvTLP4W/Class-11-2080-BS.png",
        "https://ccichitwan.org.np/images/vacancy.jpg",
        "https://educatnepal.com/wp-content/uploads/2023/05/1-2-1024x536.png",
        // "https://source.unsplash.com/random/560x301",
        // "https://picsum.photos/560/302" 
    ]
  return (
   <>
    <Swiper
        spaceBetween={15}
        slidesPerView={'auto'}
        navigation={true}
        loop={true}
        grabCursor={true}
        zoom={true}
        keyboard={{enabled: true,}}
        pagination={{ clickable: true ,dynamicBullets: true}}
        autoplay={{delay: 2500,disableOnInteraction: true,}}
        modules={[Keyboard, Pagination, Autoplay, Zoom, Navigation]}
        className="mySwiper"
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
        >
    
        

        {
            imgUrls.map((url, index)=>(
<SwiperSlide key={index}>
        <div className="swiper-zoom-container">
            {
                !imageLoaded && (
                    <div className="flex items-center justify-center w-[560px] h-[200px] md:h-[300px] bg-gray-300 rounded  dark:bg-gray-700">
                        <svg className="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                        <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z"/>
                        </svg>
                    </div>
                )
            }
            <img
                className={`rounded-xl mx-auto ${!imageLoaded && 'hidden'}`}
                src={url}
                alt="img"
                onLoad={handleImageLoad}
            />
        </div>
        </SwiperSlide>
            ))
        }
            
        {/* <SwiperSlide>Slide 4</SwiperSlide> */}
        
    </Swiper>
   </>
  )
}
