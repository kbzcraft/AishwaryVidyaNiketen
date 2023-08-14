import React, { useState } from 'react'

import { defaultUser } from "./../imgLinks";
import { QuickSearch } from '../sidebar/quickSearch';

export const ContactListsViewer = (props) => {

    const [profileIndex , setProfileIndex] = useState(0)
    const handleProfileIndexChange = (newIndex) => {
        setProfileIndex(newIndex);
    };
    const imgSrc = props.data[profileIndex].img ? props.data[profileIndex].img : defaultUser;

  return (
    <main className=' relative bg-white mx-auto w-[96vw] max-w-[800px] my-5 flex mdx:flex-row flex-col-reverse'>
        <section id='admins-info' className='my-5 shadow-xl rounded-md h-[80vh] overflow-y-scroll'>
            <h1 className='font-primary text-center font-bold'>{props.name}</h1>
            <ul className='grid gap-2 my-2 px-2'>
                {
                    props.data.map((admin, index)=>(
                        <li key={index}>
                            <a href="#profileCard" className=' rounded-lg hover:bg-slate-400 flex gap-1' onClick={()=>{setProfileIndex(index)}}>
                            <div className="img-div w-14 h-14 bg-slate-400 opacity-90 rounded-lg">
                                {
                                    !admin.img &&  <img src={defaultUser} alt=""  className='rounded-lg  w-14 h-14 object-cover object-top' />
                                }
                                {
                                    admin.img && <img src={admin.img} alt=""  className='rounded-lg  w-14 h-14 object-cover object-top' />
                                }
                            </div>  
                            {/*  */}
                            <div className="info flex flex-col justify-center">
                                <h1 className='font-primary'>{admin.name}</h1>
                                <h2 className='font-secondary'>{admin.designation}</h2>
                            </div>
                            </a>
                        </li>
                    ))
                }
            </ul>
        </section>
        
            
        
        <div id="profileCard" className="sm-profile-card flex mt-24 mdx:mt-auto m-auto max-h-fit justify-center p-5 items-center flex-col shadow-2xl rounded-xl mdx:scroll-my-52 scroll-my-40" >
            <div className="sm-img-div w-[150px] h-[100px] rounded-lg relative">
                <img src={imgSrc} alt="Profile image" className=' w-[150px] h-[130px] rounded-lg object-cover absolute -top-20 object-top'  />
                
            </div>
            <div className="sm-line h-1 w-3/4 bg-black mb-8 rounded-lg "></div>
            {
                <div className="sm-info-div">
                    <h1 className="name font-primary font-medium">{props.data[profileIndex].name}</h1>
                    <h2 className="font-secondary font-medium">{props.data[profileIndex].designation}</h2>            
                    <p className="font-secondary font-medium">{props.data[profileIndex].email}</p>
                    <p className="font-secondary font-medium">{props.data[profileIndex].contactNumber}</p>
                    <p className="font-secondary font-medium">{props.data[profileIndex].address}</p>
                </div>
            }
        </div>
        <section className='absolute md:right-16 right-2 top-1 sm:top-5'>
        <QuickSearch data={props.data} onProfileIndexChange={handleProfileIndexChange}  />
        </section>
        
    </main>
  )
}
