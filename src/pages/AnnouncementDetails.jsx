import React from 'react'
import { useParams } from "react-router-dom";
import { announcements } from "./AnnouncementPage";

const AnnouncementDetails = () => {
    const params = useParams()
    const postID = params.ID 
    const filteredAnnouncement =  announcements.filter(
        (announcement) => announcement.id === postID
      );
  return (
    <main className='max-w-[800px] mx-auto'>
            {filteredAnnouncement.map(info => (
            <section>
                {info.details && <info.details />}
            </section>
            ))}
    </main>
  )
}

export default AnnouncementDetails