import React from 'react'
import { LazyLoadImage } from "react-lazy-load-image-component";
import { VscLaw } from "react-icons/vsc";
import { FiSettings } from "react-icons/fi";
import {BiSolidBookOpen} from 'react-icons/bi'

import { Mission } from '../components/mission'
import { Vision } from '../components/vision'
import { Link } from 'react-router-dom';
import { OurVoices } from '../components/ourVoices';

import { principle ,vicePrinciple ,overviewOfOrganization, avnHistory } from "../imgLinks";

export const AboutUsPage = () => {
  const salientFeatures = [
    "Renowned and Experienced faculty members.",
    "Discipline and Perseverance as key motto.",
    "Transportation facilities as per the needs.",
    "Peaceful Environment.",
    "Student-centered teaching.",
    "Counseling and guidance.",
    "Regular school-parent interaction.",
    "Classes through multimedia.",
    "Tours, project works, field visits, case study, presentations, and seminars."
  ];
  return (
    <main id='about-us' className=' max-w-[720px] w-[96vw] mx-auto'>
      <section id="overview">
        <div className='my-5'>
          <div className='relative'>
          <div className=' bg-slate-500 rounded-xl'>
            <LazyLoadImage src={overviewOfOrganization} alt="OverviewImage"  className=' rounded-lg aspect-video'/>
          </div>
            <h1 className='absolute bottom-5 left-1 font-ceviche text-4xl text-orange-600 drop-shadow-lg font-bold'>Overview</h1>
          </div>
          <p className='font-secondary leading-5 tracking-wider text-base'>
          With the motto of quality education, Aishwarya Vidya Niketan, the most leading and excellent centre of education in Sudurpaschim Province-7 was established under the act of "Sarbajanik Shaikshik Guthi" in 2033 B.S.
On the demands of local guardians and academicians the institution flourished like a lighthouse of education and started 10 + 2 science faculty in 2052 B.S. and arts, education and management in 2053 B.S.
The products of the institution both in national and international level are spreading the aroma of AVN with good name and fame. The devoted, study-oriented, successful and moral students are the identity of AVN. Conscious guardians, qualified and dedicated teachers and well-organized School Management Committee are key to success.
With equal emphasis extracurriculars, we encourage students to excel in a plethora of fields, including sports, academics, the arts, and more. Our first and first most commitment is to support student learning and, for this, we have worked to build excellent infrastructure and a highly experienced and qualified team of teachers and co-ordinators. Every student at AVN is special and, with more than a 100 teaching staff at school, we provide every child with the care and guidance they need.
          </p>
        </div>
        
        <div className='my-5'>
          <div className='relative'>
            <div className=' bg-[hsl(200, 20%, 80%)]'>
              <LazyLoadImage src={avnHistory} alt="OverviewImage"  className=' rounded-lg aspect-video w-full object-cover h-[400px] object-top brightness-75'
            />
            </div>
              
              <h1 className='absolute bottom-5 left-1 font-ceviche text-4xl text-orange-600  font-bold'>History</h1>
          </div>
          <p>
          Aishwarya Vidya Niketan was established in 1976 AD by Community in this region. Our first principal was Mr D.Pakhrin, after whom 8 more principals have led the school. The school initially ran classes up to grade 2 and continued to upgrade classes yearly. Our first batch of students took their SLC (School Leaving Certificate) examination in 1984 AD. On the demands of local guardians and academicians the institution flourished like a lighthouse of education and started 10 + 2 science faculty in 2052 B.S. and arts, education and management in 2053 B.S. At AVN, we have always been proactive in adopting innovative practices in order to provide the best learning environment for our students, paving the way for other schools to follow suit. In our initial years, we published our own textbooks and used them for classroom teaching. We were also pioneers in introducing Computer Science as a subject, supported by a fully equipped computer lab, at the school level in the region.
Since our foundation, we have established a reputation for entrepreneurial thinking, questioning the traditional mindset when it comes to education and learning. We have consistently valued both individuality and community with the intention of expanding the possibilities an academic institution can offer. Through a culture of humanity, we encourage pupils to be the best versions of themselves. We focus on creating an environment of kindness and inclusivity, where everyone looks out for one another, and where students are able to flourish personally, emotionally, and academically. 
          </p>
        </div>
        
        <div id="quality-policy my-5">
          <h1 className="text-center font-ceviche text-4xl w-max mx-auto bg-orange-600 text-white drop-shadow-2xl shadow-2xl">Quality Policy</h1>
          <p className='font-secondary leading-5 tracking-wider text-base'>
          The objective is to provide quality education to the students according to the demand of society that enables the students to develop problem solving, leadership and team work skills along with value of commitment to quality life, ethical behavior, society and respect for one another.
          </p>
        </div>
        <div className="my-5">
        <Mission />
        <div className="my-5"></div>
        <Vision />
        </div>
        <div className="my-5" id="know-more">
          <h1 className="font-primary text-center font-semibold">Know More</h1>
          <ul className='grid grid-rows-2 grid-cols-2 gap-2'>
            <li className=''>
              <Link className='flex justify-center items-center flex-col hover:opacity-90 bg-primary min-h-50 h-full p-2'>
                <VscLaw size={35} className='' />
                <h1 className='font-primary uppercase font-bold text-center text-white'>Rules And Regulations</h1>
                <p className='md:max-w-[70%] text-center'>Discipline is a must have, we do not allow any undisciplinary behaviour.</p>
              </Link>
            </li>

            <li>
              <Link className='flex justify-center items-center hover:opacity-90 p-2 flex-col bg-primary h-full min-h-50'>
                <BiSolidBookOpen size={35} />
                <h1 className='font-primary text-center uppercase font-bold text-white'>OUR STUDY PROGRAMS</h1>
                <p className='md:max-w-[70%] text-center'>
                  We provide various options to study and grow following their dreams and interest.
                </p>
              </Link>
            </li>

            <li>
              <Link className='flex justify-center hover:opacity-90 p-2 items-center flex-col bg-primary h-50'>
                <BiSolidBookOpen size={35} />
                <h1 className='font-primary uppercase text-center font-bold text-white'>OUR ACHIEVEMENTS</h1>
                <p className='md:max-w-[70%] text-center'>
                  Throughout our journey we have achieved some notable awards, both nationally and internationally.
                </p>
              </Link>
            </li>

            <li>
              <Link className='flex justify-center items-center hover:opacity-90 flex-col bg-primary h-full min-h-50 p2'>
                <FiSettings size={35} />
                <h1 className='font-primary uppercase font-bold text-white text-center'>FACILITIES</h1>
                <p className='md:max-w-[70%] text-center'>
                We provide different facilities, so students can focus more on their education.
                </p>
              </Link>
            </li>

          </ul>
        </div>

        <div className="my5 salientFeatures">
          <h1 className=' w-max mx-auto font-ceviche bg-orange-600 text-white text-4xl drop-shadow-2xl shadow-md cursor-default text-center'>Salient Features</h1>
          <ul className="my-5 pl-5">
            {
              salientFeatures.map((feature, index)=>(
                <li className='font-primary list-disc' key={index}>
                  {feature}
                </li>
              ))
            }
          </ul>
        </div>
        <OurVoices />
      </section>
    </main>
  )
}