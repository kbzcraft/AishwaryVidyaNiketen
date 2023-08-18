import React from 'react'
import { AiOutlineRight } from "react-icons/ai";
import { avnHistory, awardToStudents, extraClassroom, primarySchool, principle, studentPresentation } from "../imgLinks";
import { TailwindLazyImg } from './LazyImg';

export const SmallGallary = () => {
   const images = [
      {url: avnHistory, alt:"AVN old students", blurHash: 'LDJ7UHE2?G%Llo%2E$az.7t6^*E2'},
      {url: primarySchool, alt:"AVN primary level students"},
      {url: principle, alt:"principle of AVN"},
      {url: extraClassroom, alt:"AVN extra classroom activities"},
      {url: awardToStudents, alt:"awards to AVN students"},
      {url: studentPresentation, alt:"AVN student presentating in classroom"},
   ]
  return (
   //  <section className=' grid grid-cols-[repeat(auto-fit,minmax(235px,1fr))]  gap-1'>
    <section>
      <div className='flex justify-between items-center'>
      <h1 className="font-primary">Image Gallery</h1>
      <button className='flex text-blue-700 hover:text-black justify-center items-center font-secondary gap-5 group '>
         <span className='  drop-shadow-md'>
            View All 
         </span>
         <div className="flex relative">
            <AiOutlineRight size={20}  className='transition-all duration-500 delay-300 absolute -bottom-[9px] right-0'/>
            <AiOutlineRight size={20}  className=' transition-all duration-500 absolute -bottom-[9px] right-0 group-hover:-right-[6px]'/>
         </div>
      </button>
      </div>
      <ul className=' grid grid-cols-3  gap-1'>
         {
            images.map((img, index)=>(
               <li key={index} className=' bg-slate-600'>
                  <TailwindLazyImg imgUrl={img.url} alt={img.alt} objPosition={'center'}/>
                  {/* <img loading='lazy' src={img.url} alt={img.alt} className='h-full object-cover' /> */}
               </li>
            ))
         }
      </ul> 
    </section>
  )
}
