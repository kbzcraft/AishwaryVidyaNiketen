import React, {useEffect, useState} from 'react'
import { TailwindLazyImg } from './LazyImg'
import { Link } from 'react-router-dom'


const TailwindImgSwiperReact = (props) => {
    const [imgIndex, setImgIndex] = useState(0)
    const length = props.data.length

    useEffect(()=>{
        const interval = setInterval(() => {
            if(imgIndex < length - 1){
                setImgIndex(prevState => prevState + 1)
                console.log( imgIndex + "< " + length - 1);
            }
            if (imgIndex === length -1) {
                clearInterval( interval)
            }
        }, 5000); 
     // Clear the interval when the component unmounts
     return () => clearInterval(interval);

    }, [imgIndex]); // Add imgIndex as a dependency here

    const previousImg = () =>{
        const isFirstSlide = imgIndex === 0
        const newIndex = isFirstSlide ? length - 1 : imgIndex - 1
        setImgIndex(newIndex);

    }
    const nextImg = () =>{
        const isFirstSlide = imgIndex === length -1
        const newIndex = isFirstSlide ? 0 : imgIndex + 1
        setImgIndex(newIndex);
    }
  return (
    <section className='relative mx-auto w-full max-w-[720px] aspect-video rounded-xl'>
        <Link to={`/AishwaryVidyaNiketen/announcements/${props.data[imgIndex].id}`}>
        <TailwindLazyImg 
            imgUrl={props.data[imgIndex].img}
            alt={props.data[imgIndex].alt}
            w={'100%'}
            h={'100%'}
        />
        </Link>
        <button id="previous" className='absolute top-1/2 -translate-y-1/2 left-5 text-5xl text-blue-700 hover:text-blue-600 drop-shadow-lg' onClick={previousImg}>&lt;</button>
        <button id="next" onClick={nextImg} className='absolute top-1/2 -translate-y-1/2 right-5 text-5xl text-blue-700 hover:text-blue-600 drop-shadow-lg'>&gt;</button>
        <div  className='flex gap-1 mx-auto w-fit my-1 '>
        { props.data.map((img, imgIndex)=>(
            <div key={imgIndex} className='text-center w-2 h-2 flex bg-black rounded-md' onClick={()=>{setImgIndex(imgIndex)}}></div>
            ))
        }
        </div>
    </section>
  )
}

export default TailwindImgSwiperReact