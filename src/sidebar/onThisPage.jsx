

import React, { useEffect } from 'react'

export const OnThisPage = () => {

    
    useEffect(()=>{
        const sidebar = document.querySelector("aside#sidebar-o")
        var lastScrollTop = 0;
        window.addEventListener("scroll", ()=>{
          // console.log(document.documentElement.scrollTop);
          var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
          console.log(scrollTop);
          if (scrollTop > lastScrollTop){
            sidebar.style.top="0";  
            sidebar.style.height="100dvh"
          }else{        
            sidebar.style.top="75px"
          }
          lastScrollTop = scrollTop
        })
    },[])
  return (
    <aside id='sidebar-o' className='hidden xl:flex top-[75px] right-0 fixed  w-[270px] overflow-y-scroll h-[calc(100dvh-75px)]'>
        <h1>On this page</h1>
    </aside>
  )
}
