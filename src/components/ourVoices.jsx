import React from 'react'

export const OurVoices = () => {
  return (
  < section>
  
    <section className='my-5'>
        <div id="principalMsg" className='mb-5'>
          <h1 className='font-pessero text-center text-2xl text-red-700 '>PRINCIPAL’S PROCLAMATION</h1>
            <div className="relative">
            <img loading='lazy' src="https://iili.io/HDTuJ87.jpg" alt="Principle of AVN" className=' rounded-xl' />
            <div className="absolute bottom-0 left-0 w-full bg-[#FFA9D6]">
                <h1 className='font-pessero text-center md:text-xl text-red-700 '>Mr. Prem Nidhi Ojha (M.Ed) English</h1>
            </div>
            </div>
            <q className='font-primary'>Education is the true eye to observe the world</q>
            <p className='font-secondary leading-5 tracking-[15%] capitalize'>
            Respected Guardians and Dear Students,
<br/>
Hearty congratulations for choosing AVN as the best dreamland of education. "Practical knowledge for life skills" is the basic philosophy and ideal of AVN. AVN, an excellent center of education attracts everyone ranging to school children to college scholars because students not only get quality education but also get emotional support and guidance from the teachers.
<br/>
Well-organized and dedicated teaching staff, good administrative body, industrious students are the trinity that make AVN an ideal home of learning. Record-breaking SLC and +2 results, and our students’ achievements at national and international level have ascended the institution on the scale of majestic heights.
<br />
Huge standing walls from all directions ensure security to students. Open and wide play ground with a variety of play-things promotes physical development of students. Only words sometimes mislead people. Therefore, the best way to understand the college is to plan a short visit to AVN and observe everything which we have mentioned here.
<br />
Awaiting for your arrival.
            </p>
        </div>
        <div id="Vice-principalMsg">
          <h1 className='font-pessero text-center text-2xl text-red-700 '>Vice Principal’s Voice</h1>
            <div className="relative">
            <img loading='lazy' src="https://iili.io/HDTu3ue.jpg" alt="vice principle of AVN" className=' rounded-xl' />
            <div className="absolute bottom-0 left-0 w-full bg-[#FFA9D6]">
                <h1 className='font-pessero text-center md:text-xl text-red-700 '>Mr. Sanjay Kumar Pant (MA) Rural Dev</h1>
            </div>
            </div>
            <q className='font-primary'>Be useful better than beautiful.</q>
            <p className='font-secondary leading-5 tracking-[15%] capitalize'>
            It is a matter of boundless satisfaction to welcome you to AVN which has been existed as a well-established center of academic excellence. We will try our best to offer all the students a dynamic, supportive, creative and conducive learning environment in which they are motivated and encouraged by the co-operative staff and competent academicians to perceive personal excellence in academic pursuits, resulting in enhanced prospects for career development. We request you not to believe our words but visit the school and find yourselves whether it meets your expectations.
            </p>
        </div>
    </section>
    <section className='mb-5' id="students-Standpoint">
    <h1 className='text-center font-ceviche text-secondary drop-shadow-md text-4xl  md:text-5xl'>Student's Stantpoint</h1>
      <ul className="md:grid flex flex-col gap-2 md:grid-rows-2 md:grid-cols-2" >
        <li className='bg-[#7541C8] p-3 rounded-lg'>
          <div className="studend-info flex items-center gap-2">
            <div className="w-12 h-12 bg-[#D9D9D9] rounded-md"></div>
            <div className='p-0 leading-none font-secondary'>
              <strong className='p-0 font-primary'>Sandesh Paudel</strong>
              <blockquote className='p-0'>(MBBS, Dhulikhel)</blockquote>
            </div>
          </div>
          <div>
          <p className="msg">
          It’s me Sandesh Paudel, studying MBBS in KUSMS. I regard my self lucky to be the part of AVN family as I completed my journey of +2 level from the institution. This collage provided me students need. AVN is the house of excellence and provides a platform to enhance the inner potentials of the students.
          </p>
          <q className='font-primary text-sm'>AVN is really the choice of Genuine students.</q>
          </div>
        </li>
        {/* student 2 */}
        <li className='bg-[#48556A] p-3 rounded-lg flex flex-col'>
          <div className="studend-info flex items-center gap-2 self-end">
            <div className='p-0 leading-none font-secondary'>
              <strong className='p-0 font-primary'>Sunil Mahata</strong>
              <blockquote className='p-0'>(BE Pulchowk, T.U.)</blockquote>
            </div>
            <div className="w-12 h-12 bg-[#D9D9D9] rounded-md"></div>
          </div>
          <div className="msg">
          <p >
          With caring teachers, vibrant friendships, well maintained laboratories and endless opportunities, AVN is a place where you can thrive, learn, and create lasting memories.
          </p>
          <q className='font-primary text-sm'>AVN is really the choice of Genuine students.</q>
          </div>
        </li>
        {/* student 3 */}
        <li className='bg-[#E847AE] p-3 rounded-lg flex flex-col col-span-2 row-span-2'>
          <div className="studend-info flex items-center gap-2 ">
            <div className="w-12 h-12 bg-[#D9D9D9] rounded-md"></div>
            <div className='p-0 leading-none font-secondary'>
              <strong className='p-0 font-primary'>Binita Kandal Thapa</strong>
              <blockquote className='p-0'>Rastriya Banijya Bank Ltd, Dadeldhura Branch</blockquote>
            </div>
          </div>
          <div className="msg">
          <p >
          After i joined AVN college, the supportive teachers, challenging opportunities, friendly environment and ideal management of the collage surprised me and led myself to know me. My sincere thanks goes to my dearest AVN for all the things that i have been able to achieve.<br/>
          I would heartily like to thank AVN for presenting the students with opportunities to express themselves. And to the juniors, who are truly passionate regarding their academic future i would sincerely like to recommend choosing this institution and I honestly believe you will never regret your decision.
          </p>
          <q className='font-primary text-sm'>AVN is really the choice of Genuine students.</q>
          </div>
        </li>
      </ul>
    </section>
    
  </ section>
  )
}
