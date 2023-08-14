import React from 'react'
import { AnnouncementSwiper} from '../components/swiper'
import { useState, useEffect } from "react";
import { Mission } from '../components/mission';
import { Vision } from '../components/vision';
import { Facilities } from '../components/facilities';
import { SmallGallary } from '../components/smallGallary';
import { Footer } from '../components/footer';

export const HomePage = () => {
  const [introText, setIntroText] = useState("")
  const introTexts = ["welcome","to","aishwarya","vidya","Welcome to Aishwarya Vidya"]

  const changeColor = () => {
    const Niketen = document.querySelector(".niketen")
    // console.log(Niketen);
      Niketen.classList.remove('hidden')
      setTimeout(() => {
        Niketen.classList.remove("bg-secondary")
        return
        // Niketen.classList.add("text-primary")
      }, 1000);
  }

  useEffect(() => {
    let i = 0;
    // Function to update the intro text at regular intervals
    const updateIntroText = () => {
      if (i < introTexts.length) {
        setIntroText(introTexts[i]);
        i++;
        if(i == introTexts.length){
          changeColor()
        }
      }
    };
    // Start updating the intro text after the component mounts
    const interval = setInterval(updateIntroText, 500); // Change text every 1000ms (1 second)

    // Clean up the interval when the component unmounts to avoid memory leaks
    return () => clearInterval(interval);
  }, [])

  return (
    <main className='w-[96vw] max-w-[800px] mx-auto'>
      <section className="my-8 mx-auto">
        <h1 className="sm:text-2xl md:text-3xl font-primary border-b-4 inline-block pr-4 border-secondary mb-2 cursor-default">Announcements:</h1>
        <AnnouncementSwiper />
      </section>
      <div className="intro max-w-[720px] w-[96vw] mx-auto grid gap-3">
      <h1 className="text-3xl xs:text-4xl md:text-6xl  text-primary text-center font-primary uppercase font-black">{introText} <span className="niketen hidden bg-secondary">Niketen</span></h1>
      <p className="text-center font-secondary capitalize">The products of the institution both in national and international level are spreading the aroma of AVN with good name and fame. The devoted, study-oriented, successful and moral students are the identity of AVN. Conscious guardians, qualified and dedicated teachers and well-organized School Management Committee are key to success.</p>
      </div>
      <section>
        <Vision />
        <Mission />
      </ section>

      <p className='font-primary text-center capitalize font-medium my-8 text-lg text-primary'>
      Being a ‘ Public Trust Institution ’, students of AVN are given priority by different government organizations in higher studies. 
      </p>

      <ul className='font-secondary list-disc capitalize text-lg flex flex-col gap-2'>
        <li className=' leading-5 '>
          {/* <div className=' w-3 h  bg-black'></div> */}
          <p>Graduates of Aishwarya Vidya Niketan are offered special scholarship by University Grat Commission (UGC) Nepal in higher studies. </p>
        </li>
        <li className=' leading-5'>
          <p>Likewise, Provincial Government of Farwest treats very friendly to the pass-outs  of AVN and offers special scholarship for MBBS.</p>
        </li>
      </ul>

      <Facilities />
      <SmallGallary />
      <section>
        <h1 className='font-bold font-primary my-1 text-2xl text-primary mt-5'>Visit Us:</h1>
        <iframe className='w-[96vw] max-w-[720px] h-[310px] rounded-xl' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13997.275383475531!2d80.58847!3d28.7100158!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a1ed29dea262c5%3A0x4639479958b80213!2sAishwarya%20Vidya%20Niketan%20Higher%20secondary%20school.!5e0!3m2!1sen!2snp!4v1691074372996!5m2!1sen!2snp" style={{border:"0"}} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </section>
      
        <div className=' my-10 flex gap-0 mx-auto w-40 h-1'>
          <div className=' w-1/2 h-full bg-primary border-l-8 '></div>
          <div className=' w-1/2 h-full bg-secondary border-r-8'></div>
      
        
      </div>
    </main>
  )
}

