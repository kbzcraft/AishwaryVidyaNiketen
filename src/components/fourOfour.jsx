import React from 'react'
import { Link } from "react-router-dom";

const FourOfour = () => {
  return (
    <section className="page_404 max-w-3xl bg-white flex h-[85dvh] justify-center py-20  flex-col items-center w-[96vw] font-arvo mx-auto">
	
        <div className=' bg-electrocuted bg-center h-full w-full'>
            <h1 className='text-8xl text-center'>404</h1>
        </div>
        <div className='text-center flex flex-col gap-2 justify-center items-center'>
            <h2 className='text-4xl'>Look like you're lost </h2>
            <h3>the page you are looking for not avaible!</h3>
            <Link to="/AishwaryVidyaNiketen" className="link_404 bg-[#39ac31] text-white w-32 h-14 flex justify-center items-center text-lg">Go to Home</Link>
        </div>
    
	
</section>
  )
}

export default FourOfour