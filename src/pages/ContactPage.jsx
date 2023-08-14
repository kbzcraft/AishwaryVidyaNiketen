import React, {useEffect, useRef} from 'react'
import { ImArrowDown, ImFacebook, ImTwitter } from "react-icons/im";
import {IoMdSend} from 'react-icons/io'
import { Link } from "react-router-dom";
import "./../App.css"
import roundContactUs from "./../assets/contact.png"
import { Footer } from '../components/footer';

export const ContactPage = () => {
  const inputElement = useRef();
const mainOffice = [
  {
    
    info: "Taranagar Road 5, Dhangadhi 10900, Nepal"
  },
  {
    name: "Phone",
    info: "091-526779"
  },
  {
    name: "Email",
    info:"info@avn.edu.np"
  },
  {
    name:"Fax",
    info:"091-521079"
  }
]
const admissionOffice = [
  {
    name: "Email",
    info:"admission@avn.edu.np"
  },
  {
    name: "Phone",
    info: "091-526779"
  },
]
const focusInput = () => {
  console.log("focusing");
  inputElement.current.focus({ focusVisible: true })
  console.log("focused");
};
const handelMsgSubmit = (e) =>{
  e.preventDefault()
}
  return (
    <div className=' max-w-[800px] w-[96vw] mx-auto mt-4'>
      <div className="flex justify-between items-center max-w-[96vw] mx-auto ">
        <div>
          <h1 className=' font-primary text-primary tracking-tighter inline-block pr-4 mt-5 mb-o pb-0  text-3xl font-bold animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white'>Get IN Touch</h1>
          <div className="border-b-4 border-secondary w-[14ch] text-3xl"></div>
        </div>

        <a href="#reach-us" >
          <div onClick={focusInput} className=' relative bg-secondary w-16 h-16 rounded-full flex -bounce justify-center items-center mx-2'>
            <div className="absolute">
              <img src={roundContactUs} className=' animate-spin-slow hover:animate-none' alt="contact us" />
            </div>
            <ImArrowDown color='#FFF' fontSize={25} className='hover:motion-safe:animate'/> 
          </div>
        </a>

      </div>

      <h1 className='my-6 text-secondary drop-shadow-lg text-2xl font-primary font-bold tracking-tighter'>
        Do you have a question, an request or a project you need help with ?
      </h1>

      {/* main office and admission office contact info sections starts here */}
      <div className='flex gap-4 flex-wrap'>
        {/* main office starts here */}
        <div id='main-office'>
          <h1 className='font-primary pr-4 text-3xl border-secondary border-b-4 inline-block text-primary font-semibold'>
          Main Office
          </h1>
          <ul className='my-2'>
            {
              mainOffice.map((contact, index)=><li key={index} className='flex gap-1'>{contact.name &&  <h1 className='font-primary'>{contact.name} : </h1>}<p className='font-secondary'>{contact.info}</p></li>)
            }
          </ul>
        </div>
        {/* main office ends here */}

        {/* Admission office starts here */}
        <div id='admission-office'>
          <h1 className='font-primary pr-4 text-3xl border-secondary border-b-4 inline-block text-primary font-semibold'>
          Admission Office
          </h1>
          <ul className='my-2'>
          {
              admissionOffice.map((contact, index)=><li key={index} className='flex gap-1'>{contact.name &&  <h1 className='font-primary'>{contact.name} : </h1>}<p className='font-secondary'>{contact.info}</p></li>)
            }
          </ul>
        </div>
        {/* Admision office ends here */}
      </div>
      {/* main office and admission office contact info sections ends here */}
      {/* social links section ends here */}
      <div id='social-media' className='my-5' >
        <h1 className='font-primary font-bold text-xl my-1'>
          Social Links
        </h1>
        <div id='social-links' className=' flex gap-2 flex-wrap'>
          <a href="https://www.facebook.com/groups/406185051560944" target='_blank' className='flex group'>
            <ImFacebook color='#1D9BF0' fontSize={25} className=' group-hover:scale-125'/> <i className='font-secondary font-bold'>Facebook</i>
          </a>
          <a href="" target='_blank' className='flex group'>
            <ImTwitter color='#1D9BF0' fontSize={25} className='group-hover:scale-125' />
            <i className='font-secondary font-bold'>Twitter</i>
          </a>
        </div>
      </div>
      {/* social links section ends here */}
      {/* more contacts start */}
      <div id="moreContact" className="mb-5">
        <h1 className='font-primary pr-3 text-2xl inline-block text-primary font-semibold'>
          More Contacts :
        </h1>
        <ul className="grid mb-4 gap-2 md:grid-cols-2 md:grid-rows-2">
          <li className="card hover:bg-[#fd9800] bg-[#ffab2c]  rounded-xl p-2 cursor-pointer">
            <Link to={'/'}>

            <h1 className='font-primary font-bold text-2xl text-center leading-5 '>Management<br/>Committee</h1>
            <p className='w-[80%] mx-auto font-secondary mt-5 text-center'>
            Contact Info of Members of Management Committee
            </p>
            </Link>
          </li>
          <li className="card hover:bg-[#FD9800] rounded-xl p-2 bg-[#ffab2c] cursor-pointer">
            <Link to={'/'}>

            <h1 className='font-primary font-bold text-2xl text-center leading-5 '>Teaching <br /> Staff</h1>
            <p className='w-[80%] mx-auto font-secondary my-3 text-center'>
            Contact Info of Members of Management Committee
            </p>
            </Link>
          </li>
          <li className="card bg-[#ffab2c] rounded-xl p-2 md:row-span-2 hover:bg-[#fd9800bd] cursor-pointer md:col-span-2">
            <Link to={'/'}>

          <h1 className='font-primary font-bold text-2xl text-center leading-5 '>Administration <br /> Staff</h1>
          <p className='w-[80%] mx-auto font-secondary my-3 text-center'>
          If you need any help with Administration staff you can get more specific contact info.
            </p>
            </Link>
          </li>
        </ul>
      </div>
      {/* more contact ends here */}
      {/* contact form and live avn map section */}
      <div className='flex flex-col' id='reach-us'>
        <h1 className='font-bold font-primary my-1 text-2xl text-primary'>Reach Us:</h1>

        <form onSubmit={handelMsgSubmit} id='contact-form' className='max-w-[720px] w-[96vw] flex  gap-2 flex-col mb-4'>
          <div className='flex'>
            <label htmlFor="name" className='bg-secondary rounded-tl-md rounded-bl-md py-1 px-2 font-primary  w-[90px] inline-block '>Name</label>
            <input ref={inputElement} placeholder='Your Name' className='bg-[#ffb54636] outline-none focus:border border-secondary  placeholder:font-secondary  font-secondary pl-2 w-full  rounded-br-md rounded-tr-md ' name='name' type="text" />
          </div>
          <div className='flex'>
            <label htmlFor="email" className='bg-secondary rounded-tl-md rounded-bl-md py-1 px-2 font-primary  w-[90px] inline-block '>Email</label>
            <input name='email' placeholder='example@gmail.com' type="email" className='bg-[#ffb54636] font-secondary focus:border border-secondary  outline-none placeholder:font-secondary pl-2 w-full  rounded-br-md rounded-tr-md' />
          </div>
          <div className='flex'>
            <label htmlFor="phone" className='bg-secondary w-[90px] rounded-tl-md rounded-bl-md py-1 px-2 font-primary inline-block '>Phone</label>
            <input name='phone' placeholder='9800000000' className='bg-[#ffb54636] placeholder:font-secondary font-secondary outline-none focus:border border-secondary  pl-2 w-full   rounded-br-md rounded-tr-md [-moz-appearance:_textfield] [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none' type="number" />
          </div>
          <div className='relative w-full flex'>
            <textarea name="msg" id="msg" cols="30" rows="10" placeholder='Write your msg here' className='bg-[#ffb54636] w-full placeholder:font-secondary rounded-md py-1 px-2 outline-none focus:border border-secondary '></textarea>
            <button type="submit">
              <div className='absolute bottom-5 right-3 w-12 h-12 rounded-full bg-secondary '>
                <IoMdSend size={20} color='white' className='absolute top-1/2 right-1/2 translate-y-[-50%] translate-x-[60%]'/>
              </div>
            </button>
          </div>
        </form>
        <h1 className='font-bold font-primary my-1 text-2xl text-primary mt-5'>Visit Us:</h1>
        <iframe className='w-[96vw] max-w-[720px] h-[310px] rounded-xl' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13997.275383475531!2d80.58847!3d28.7100158!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a1ed29dea262c5%3A0x4639479958b80213!2sAishwarya%20Vidya%20Niketan%20Higher%20secondary%20school.!5e0!3m2!1sen!2snp!4v1691074372996!5m2!1sen!2snp" style={{border:"0"}} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
      {/* contact form and live avn map section ends*/}
      <div className="mt-10"></div>
      
    </div>
  )
}
