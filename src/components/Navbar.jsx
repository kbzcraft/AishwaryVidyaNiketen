import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { BiMenu } from 'react-icons/bi';
import {RiArrowDownSFill} from 'react-icons/ri';

// slideInRight

import AVNLogo from "/avn-logo.png";
// import { space } from 'postcss/lib/list';
// import ArrowDown from "/arrDwn.svg";

export const Navbar = () => {
  let links = [
    {name:"Home", link:"/AishwaryVidyaNiketen",options:false , hideOnSm:true },
    {name:"Programs", link:"AishwaryVidyaNiketen/academic-programs", options:false, hideOnMd:true}, 
    {name:"Facilities", link:"AishwaryVidyaNiketen/facilities", options:false},
    {name:"About", link:"AishwaryVidyaNiketen/about-us", options:true,
      childs:[
        {name:"Overview", link:"/AishwaryVidyaNiketen/about-us"},
        {name:"Rules & Regulations", link:"/AishwaryVidyaNiketen/law"},
        {name:"Announcements", link:"/AishwaryVidyaNiketen/announcements"}
      ]
    },
    {name:"Contacts", link:"AishwaryVidyaNiketen/contact-us", options:true,
      childs:[
        {name:"Contact Us", link:"AishwaryVidyaNiketen/contact-us"},
        {name:"Admins", link:"AishwaryVidyaNiketen/contact-admins"},
        {name:"Teaching Staff", link:"AishwaryVidyaNiketen/contact/teaching-staff"},
        {name:"Management Committee", link:"AishwaryVidyaNiketen/contact/management-committee"},
      ]
    },
    // {smOnly:true, }
  ]
  const showOptions =(e)=>{
    const parentE = e.currentTarget.parentElement;
    // console.log(e.target);
    // console.log(e.currentTarget)
    console.log(parentE);
    const options = parentE.querySelector('ul');
    options.classList.toggle("hidden")
  }
  const toggleMenu = () =>{
    const mobileMenu = document.querySelector("#mobile-menu")
    mobileMenu.classList.toggle('hidden')
    mobileMenu.style.transform = "translateX(0)"
    mobileMenu.style.opacity = "1"
    mobileMenu.style.filter = "blur(0)"
    
  }
  const revealOnScrollUp =(e)=>{
    const navbar = e.currentTarget
    var lastScrollTop = 0;
    window.addEventListener("scroll", ()=>{
      // console.log(document.documentElement.scrollTop);
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop > lastScrollTop){
        navbar.style.top="-75px"        
      }else{        
        navbar.style.top="0"
      }
      lastScrollTop = scrollTop
    })
    
  }
  return (
    <header className="nav-container z-[999] w-full top-0 left-0 sticky reveal-on-scroll-up" onLoad={revealOnScrollUp}>
        <nav className=" z-50 w-full relative bg-primary font-primary h-[75px] flex items-center mx-auto ">
            <section className='max-w-7xl w-full flex justify-between mx-auto items-center px-3'>
              <div id="logos-avn" >
                <Link to={'/AishwaryVidyaNiketen'}>
                  <img src={AVNLogo} alt="AVN" className='w-14 h-14'/>
                </Link>
              </div>
              <div className='flex gap-4'>

                <ul className='hidden sm:flex gap-6 '>
                {
                  links.map((link, index) => (
                    <li key={index} className="relative group">
                      <div className="flex items-center hover:bg-secondary">
                        {link.options ? (
                          <>
                            <button>{link.name}</button>
                            <RiArrowDownSFill />
                          </>
                        ) : (
                          <div className={link.hideOnMd ? "hidden md:flex" : ""}>
                            <Link to={link.link}>{link.name}</Link>
                          </div>
                        )}
                      </div>
                      {link.childs && (
                        <div key={`option-${index}`} className='group bg-red'>
                          <div
                          key={`options-${index}`}
                          className="absolute hidden group-hover:flex group-focus:flex flex-col bg-white p-2 gap-2 rounded-lg rounded-tl-none"
                        >
                          {link.childs.map((child, childIndex) => (
                            <div key={childIndex} className="border-b-2 border-secondary hover:bg-secondary">
                              <Link to={child.link}>{child.name}</Link>
                            </div>
                          ))}
                        </div>
                        </div>
                      )}
                    </li>
                  ))
                }
                </ul>

                <div className='flex gap-2 items-center'>
                  <button className='bg-secondary px-2 font-medium text-sm h-fit'>LOGIN</button>
                  <BiMenu className='sm:hidden' fontSize={"26px"} onClick={toggleMenu}/>
                </div>
              </div>
            </section>

          {/* for mobile nav menu items  */}
          <section
            id='mobile-menu'
            className='hidden sm:hidden absolute min-h-[calc(100vh-75px)] top-[75px] max-w-md w-full bg-primary right-0'
            // add transform translate -  100  
          >
              <ul className='flex flex-col gap-4 px-3'>
                {
                  links.map((link, index)=>(
                    <div className='flex flex-col gap-1 group' key={index} >
                      <li className='hover:bg-secondary flex justify-between border-b-2 border-secondary' onClick={(e)=>{
                        link.options && showOptions(e)
                      }}>
                        {link.options ? <button id={link.name}>{link.name}</button> : <Link to={link.link} onClick={toggleMenu}>{link.name}</Link>}
                        {link.options && <RiArrowDownSFill />}
                      </li>
                      
                      {
                      link.childs 
                      && <ul className='flex-col gap-2 hidden'>
                      {link.childs.map(child=>(
                        <li key={child.link} className=' hover:bg-secondary border-b-2 border-secondary w-fit'>
                        <Link to={child.link} onClick={toggleMenu} >{child.name}</Link>
                        </li>
                      ))}
                      </ul>
                      }
                      
                    </div>
                  ))
                }
              </ul>
            </section>
            {/* later task when clicked on links close the nav */}
          {/* mobile nav menu items ends  */}
        </nav>
    </header>
    
  )
}
