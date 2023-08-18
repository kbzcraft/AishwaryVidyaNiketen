import React, { useState, useEffect } from 'react'
import "./lazyImg.css";

export const TailwindLazyImg = (props) => {
  const [isLoded, setIsLoded] = useState(false)
  const onLoaded = (e) => {
    const div = document.querySelector("#tailwindLazyLoadImgDiv");
    div.classList.add("imageHasBeenLoaded");
    console.log("img lodaded");
  }
  // downgrade image
  const url = `https://fastapideta-1-h0295401.deta.app/download_downsized_image/?image_url=${props.imgUrl}` 

  useEffect(()=>{
    const img = new Image()
    img.src = props.imgUrl
    img.onload = () => {
      setIsLoded(true)
    }
  },[props.imgUrl])



  return (
    <>
      {!isLoded && <div style={{backgroundImage:`url(${url})`, height:"100%", width:"100%", objectFit:'cover', objectPosition:`${props.objPosition ? props.objPosition : 'center'}`, backgroundRepeat:'no-repeat', backgroundSize:'cover', borderRadius:'12px'}}>
        </div>}
      {isLoded && <div 
      className={`
        [background-image:url(${url})]
        h-full
        w-full
        object-cover
        object-center
        bg-no-repeat
        bg-cover
        rounded-lg
        
      `}>

        <img src={props.imgUrl} alt={props.alt} className= 'object-cover bg-cover h-full rounded-lg' loading='lazy'/>
        
        </div>}
    </>
  )
}
