import React from 'react'
import { Link } from 'react-router-dom'
import Vacency from '../announcementPosts/vacancy.md'
import ClassElevenBooks from '../announcementPosts/classElevenBookLists.md'
import seeresults2079 from "../announcementPosts/seeresults2079-2080.md";
export const announcements=[
    {   
        id:crypto.randomUUID(),
        img: "https://ccichitwan.org.np/images/vacancy.jpg",
        alt: "avn vacancy announcement images",
        title: "Aishwarya Vidya Niketen vaccency open for primary level teacher.",
        publishedAt: "2080/3/04",
        details: Vacency
    
    },
    {   id:crypto.randomUUID(),
        img:"https://i.ibb.co/fvTLP4W/Class-11-2080-BS.png",
        alt: "avn class 11 book",
        title: "List of class 11 2080 bactch book List",
        publishedAt: '2080/03/02',
        details: ClassElevenBooks
    },
    {   id:crypto.randomUUID(),
        img:"https://educatnepal.com/wp-content/uploads/2023/05/1-2-1024x536.png",
        alt: 'avn see results announcement',
        title: "AVN SEE Results List",
        publishedAt: "2080/02/20",
        details: seeresults2079
    }
    // "https://source.unsplash.com/random/560x301",
    // "https://picsum.photos/560/302" 
]
const AnnouncementPage = () => {
    
  return (
    <main className='max-w-[800px] w-[96vw] mx-auto my-5 bg-slate-100'>
    <h1 className='font-primary text-3xl'>Announcements: </h1>
    <section className='grid gap-2 grid-cols-[repeat(auto-fill,minmax(240px,1fr))] md:grid-cols-[repeat(auto-fill,minmax(300px,1fr))]'>
    {
        announcements.map((announcement)=>(
            <div key={announcement.id} className="card bg-white rounded-xl">
                <img src={announcement.img} alt={announcement.alt} className=' rounded-lg aspect-video w-full' />
                <div className='px-2'>
                    <h1 className='font-secondary my-1 text-lg line-clamp-2 min-h-[35px] leading-[calc(1em+.2rem)]'>{announcement.title}</h1>
                    <div className='flex justify-between mt-2'>
                        <h2>{announcement.publishedAt}</h2>
                        <button className=' bg-secondary p-2 rounded-md font-primary text-sm'>
                            <Link to={announcement.id}>
                            Read more
                            </Link>
                        </button>
                    </div>
                </div>
            </div>
        ))
    }
    </section>
    
    </main>
  )
}

export default AnnouncementPage