import React from 'react'
import { IoLocationSharp } from "react-icons/io5";
import { MdEmail, MdCall, MdFax } from "react-icons/md";
import { ImFacebook, ImTwitter } from "react-icons/im";
import { Link } from 'react-router-dom';

export const Footer = () => {

  const contactInfo = [
    {
      info: "info@avn.edu.np",
      icon: MdEmail
    },
    {
      info: "091-521079",
      icon: MdCall
    },
    {
      info: "091-526779",
      icon: MdCall
    },{
      info: "091-521079 (Fax)",
      icon: MdFax
    }
  ]
  return (
    <footer id='footerComponent' className=' w-full'>
      <div className='max-w-[800px] mx-auto bg-primary p-2'>
      <div className='flex md:items-center items-start cursor-default '>
        <IoLocationSharp className='text-secondary mt-1' size={25}/>
        <h1 className='text-white font-primary'>Taranagar Road 5, Dhangadhi 10900, Nepal</h1>
      </div>
      <div className='md:flex md:justify-between text-white font-secondary'>
        <ul>
          {
            contactInfo.map((contact, index)=>(<li key={index} className='flex items-center '>
              <contact.icon className='text-secondary' size={20}/>
              <h1 className='text-white font-secondary cursor-default'>{contact.info}</h1>
            </li>))
          }
          <li>
            {/* social links section ends here */}
          <div id='social-media' className='my-1' >
            <h1 className='font-primary font-bold text-base text-white cursor-default my-1'>
              Social Links
            </h1>
            <div id='social-links' className=' flex gap-2 flex-wrap'>
              <a href="https://www.facebook.com/groups/406185051560944" target='_blank' className='flex group'>
                <ImFacebook fontSize={25} className='text-secondary group-hover:scale-125'/>
                {/* <i className='font-secondary font-bold text-white'>Facebook</i> */}
              </a>
              <a href="" target='_blank' className='flex group'>
                <ImTwitter fontSize={25} className='group-hover:scale-125 text-secondary' />
                {/* <i className='font-secondary font-bold text-white'>Twitter</i> */}
              </a>
            </div>
          </div>
        {/* social links section ends here */}
          </li>
        </ul>
          <div>
            <h1 className='font-primary font-medium cursor-default'>Useful Links</h1>
            <ul className='flex flex-col'>
              <Link className='cursor-pointer'>Educational  News</Link>
              <Link className='cursor-pointer'>TU, Office of the Controller of Examination</Link>
              <Link className='cursor-pointer'>Tribhuvan University Results</Link>
              <Link className='cursor-pointer'>University Grants Commission</Link>
              <Link className='cursor-pointer'>Research & Publication</Link>
            </ul>
          </div>
      </div>
      </div>
    </footer>
  )
}
