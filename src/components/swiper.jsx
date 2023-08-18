import React, {useState} from 'react'

import { managementSmall, primarySchoolSmall, scienceSmall } from '../smallImgLinks';
// import { TailwindLazyImg } from './LazyImg';
import TailwindImgSwiperReact from './imageSwiperReact';
import { announcements } from "./../pages/AnnouncementPage";

export const AnnouncementSwiper = () => {
    
  return (
   <>
    <TailwindImgSwiperReact data={announcements}/>       
            {/* <TailwindLazyImg 
                smallImgUrl={primarySchoolSmall}
                imgUrl={imgUrls[2]}
                bgPosition={"center"} 
                imgClassName={'rounded-xl mx-auto'}
                divClassName={'rounded-xl mx-auto'}
            /> */}
   </>
  )
}
