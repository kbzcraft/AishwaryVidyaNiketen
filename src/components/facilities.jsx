import React from 'react'
import {Link} from 'react-router-dom'
import { BsArrowRight } from "react-icons/bs";
import { FaHandHoldingMedical, FaWifi, FaHome  } from "react-icons/fa";
import { IoLibrary, IoFastFood } from "react-icons/io5";
import {MdSportsCricket, MdDirectionsBusFilled, MdScience} from "react-icons/md"
import { RiComputerFill } from "react-icons/ri";

const facilitiesList = [
  {
    name:"Medical",
    icon: FaHandHoldingMedical,
    link: "#medicalRoom"
  },
  {
    name: "Science Lab",
    icon: MdScience,
    link: "#laboratery"
  },
  {
    name:"Library",
    icon:IoLibrary,
    link: "#library"
  },
  {
    name:"Sports",
    icon: MdSportsCricket,
    link:""
  },
  {
    name:"Transportation",
    icon:MdDirectionsBusFilled,
    link:"#transportation"
  },
  {
    name: "Wifi",
    icon:FaWifi,
    link:""
  },
  {
    name: "Cafeteria",
    icon: IoFastFood,
    link:"cafeteria"
  },  
  {
    name: "ComputerLab",
    icon: RiComputerFill,
    link: "#computerLab"
  },
  {
    name: "Hostel",
    icon: FaHome,
    link:""
  }
]

export const Facilities = (props) => {

  
  return (
  <section id='facilitiesDiv' className='my-10 bg-white shadow-md pt-3 px-2'>
    <div className="heading flex justify-between my-3">
      <h1 className='font-primary xs:bg-orange-500 text-sm xs:text-base font-medium cursor-default xs:text-white '>Infrastructure / Facilities </h1>
      <Link to={'/facilities'} className=' text-blue-600 flex xs:text-base text-xs items-center'>View All <BsArrowRight /></Link>
    </div>
    <div id="quickLinks" className="xs:grid flex flex-wrap gap-2 xs:gap-0 items-center justify-evenly xs:justify-between xs:grid-cols-3 my-10 ">
      { !props.main && facilitiesList.map((facilitie, index)=>(
          <Link to={'/facilities'} key={index} className='flex xs:mx-auto flex-col hover:bg-slate-200 py-10 justify-center items-center md:w-[150px]'>
            <div className=' h-[65px] w-[65px] rounded-full bg-slate-200 flex justify-center items-center'>
              <facilitie.icon size={25} className=' text-primary'/>
            </div>
            <h1 className='font-primary text-sm md:text-lg'>{facilitie.name}</h1>
          </Link>
        ))
      }
      {
        props.main && facilitiesList.map((facilitie, index)=>(
          <a href={facilitie.link} key={index} className='flex xs:mx-auto flex-col hover:bg-slate-200 py-10 justify-center items-center md:w-[150px]'>
            <div className=' h-[65px] w-[65px] rounded-full bg-slate-200 flex justify-center items-center'>
              <facilitie.icon size={25} className=' text-primary'/>
            </div>
            <h1 className='font-primary text-sm md:text-lg'>{facilitie.name}</h1>
          </a>
        ))
      }
    </div>
  </section>
  )
}
