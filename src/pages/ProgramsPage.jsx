import React from 'react'
import { ImArrowUp } from "react-icons/im";


export const ProgramsPage = () => {

  const programLists = [
    {
      img:"https://avn.edu.np/Resources/assets/Pre-School(Kindergarten).jpg",
      name:"PRE-PRIMARY LEVEL",
      link: "#pre-School"
    },{
      img:"https://avn.edu.np/Resources/assets/PrimarySchool(I%E2%80%93V).jpg",
      name:"PRIMARY LEVEL",
      link: "#primary-level"
    },{
      img:"https://avn.edu.np/Resources/assets/LowerSecondaryandSecondaryLevel(VI%E2%80%93X).jpg",
      name:"LOWER SECONDARY AND SECONDARY",
      link: "#lowerSecondary-secondary"
    },{
      img:"https://avn.edu.np/Resources/assets/Science.jpg",
      name:"+2 SCIENCE",
      link: "#science"
    },{
      img:"https://avn.edu.np/Resources/assets/Management.jpg",
      name:"+2 MANAGEMENT",
      link: "#management"
    },{
      img:"https://avn.edu.np/Resources/assets/ArtsandEducation.jpg",
      name:"+2 ARTS AND EDUCATION",
      link:"#art-edu"

    }
  ]
  const scienceSubjects = [
    {group: "A", subjects:["Nepali","English", "Mathematics","Physics","Chimestry","Biology" ]},
    {group: "B", subjects:["Nepali","English", "Mathematics","Physics","Chimestry","Computer" ]},
    {group: "C",subjects:["Nepali","English", "Mathematics","Physics","Chimestry","Biology" ]},
    {group: "D",subjects:["Nepali","English", "Mathematics","Physics","Chimestry","Biology" ]}
  ]

  const managementSubjects = [
    {group: "A", subjects:["Nepali","English", "Social","Accounts","Economics","Computer" ]},
    {group: "B", subjects:["Nepali","English", "Mathematics","Accounts","Economics","Computer" ]},
    {group: "C",subjects:["Nepali","English", "Mathematics","Accounts","Economics","Fainance" ]},
    {group: "D",subjects:["Nepali","English", "Mathematics","Accounts","Economics","Computer" ]}
  ]

  return (
    <main id='programs' className='max-w-[800px] mx-auto w-[96vw]'>
      <section id='programLists' className='mb-5' >
        <h1 className='font-primary text-primary text-xl font-bold md:text-2xl' >Our Academic Programs</h1>
        <ul className='grid grid-cols-2 gap-1 '>
          {
            programLists.map((program, index)=>(
              <li key={index} className='relative max-h-36 transition duration-[2000ms] overflow-hidden group '>
                
                <a href={program.link}>
                <div className=' bg-slate-400 backdrop-blur-md min-w-80 min-h-80'>
                <img src={program.img} alt={program.name} loading='lazy' className='w-full group-hover:scale-105 group-hover:brightness-75 brightness-90 blur-[.5px] h-36 object-cover object-top transition-transform transform-gpu ' />
                </div>
                <h1 className='absolute bottom-0 left-0 font-bold text-secondary drop-shadow-md leading-4 shadow-md pl-2 tracking-tighter text-sm md:text-base font-primary'>{program.name}</h1>
                </a>
              </li>
            ))
          }
        </ul>
      </section>
      <div className='flex justify-center my-5'>
          <div className="bg-secondary rounded-l-md w-24 h-1 block"></div>
          <div className="bg-primary w-24 h-1 block rounded-r-md"></div>
      </div>
      <section id="prePrimary-secondary">
        <h1 className='text-primary font-primary font-bold md:text-xl  p-0 m-0 max-w-[22ch] leading-4'> PRE-PRIMARY LEVEL TO SECONDARY LEVEL</h1>
        <h2 className='font-primary mt-5 mb-2'>Curriculum</h2>
        <p className='font-secondary'>
        The school aims to introduce an extensive and balanced curriculum to enable all learners to develop the qualities and skills needed in their future lives. The curriculum implemented in the school is a combination of the principles of National Education System and global best practices so that learners not only develop patriotic feelings but also cultivate a wider global outlook from a very young age, which enables them to become confident and competent to face challenges in real life beyond the high school. The medium of instruction and communication from PG to XII classes is English except for Nepali lessons. 
        </p>

        <div id="pre-School" className='my-5'>
          <h1 className='font-primary mb-2'>Pre-School (Kindergarden)</h1>
          <img src={programLists[0].img} alt={programLists[0].name} className=' rounded-md md:rounded-xl aspect-video'/>
          <p>
          Aishwarya Vidya Niketan emphasizes child-centric, self-directed learning and is concerned with the ‘whole child’ its intellectual progress as well as its social, emotional, creative and physical wellbeing. It provides children with a rich and stimulating environment in which proper learning can occur. Concrete experiences in a number of areas are provided for children of this age to learn by doing.
          </p>
          <ol>
            <li>a. Play Group</li>
            <li>b. Nurseryc. Lower Kindergarten (LKG)</li>
            <li>c. UpperKindergarten (UKG)</li>
          </ol>
        </div>

        <div id="primary-level" className='my-5'>
          <h1 className="font-primary mt-5 mb-2">Primary Level (I – V)</h1>
          <img src={programLists[1].img} alt={programLists[1].name} className=' rounded-md md:rounded-xl aspect-video'/>
          <p>
          The goal of the primary curriculum is to lay a strong educational foundation. It is broadly based and takes into account the fact that each one enters the formal education with different level of readiness. The curriculum is planned to develop in the students a respect and love for learning, while equipping them with a foundation of strong basic skills.
          <br />
          Emphasis is laid on building up language skills in English. Through projects and by learning with head, heart and hand the students will develop all aspects of their personality. Students are taught subjects like English, Nepali, Mathematics, Science, Social Studies, Computer Studies, Moral Science, General Knowledge and Health Education. Variety of sports will be introduced to the students according to their interest and ability. Similarly a wide range of co-curricular activities will also be provided for their overall development.
          </p>
        </div>

        <div id="lowerSecondary-secondary" className='my-5'>
          <h1 className="font-primary mt-5 mb-2">Lower Secondary and Secondary Level (VI – X)</h1>
          <img src={programLists[2].img} alt={programLists[2].name} className=' rounded-md md:rounded-xl aspect-video'/>
          <p>
          The Lower Secondary Level (VI – VIII) is a smooth transition from Primary to Secondary School. The regular syllabus for every subject of standards VI to VIII is as prescribed by the Ministry of Education, but additional syllabus is framed by the teachers themselves- embracing overarching vision of all rounded development of the students.
          <br />
          The project work, as an approach aimed at enhancing overall learning outcome is an integral part of the curriculum. It supports and extends the innate curiosity of the child and develops the attitudes and skills necessary to gain an understanding of the world around. The Language-Lab and the Mathematical Lab help in an innovative manner to sustain the interest and to develop the language and mental ability of the child.
          </p>
        </div>

      </section>

      <section id="neb">
        <h1 className='font-primary text-primary text-xl font-bold my-3'>+2 Faculty (NEB)</h1>
        <h2 className='font-primary  mb-2'>Curriculum</h2>
        <p id="font-secondary">
        For grade 11 and 12, Aishwarya Vidya Niketan (AVN) continues its commitment to providing an exceptional and relevant curriculum. Building upon the foundation laid in the earlier grades, the school offers a comprehensive range of subjects in the science, arts, education, and management streams, empowering students to pursue their desired academic paths. The medium of instruction and communication remains English, with an emphasis on enhancing language proficiency and fostering a global outlook. Additionally, AVN recognizes the significance of multilingualism and offers the opportunity to study Chinese as a third language. The curriculum is thoughtfully designed, aligning with national principles and global best practices, nurturing students' academic knowledge, life skills, critical thinking abilities, and civic responsibility. AVN aims to create confident and competent individuals well-prepared for higher education and the challenges of the real world beyond high school.
        </p>

        <div id='science' className='my-5'>
          <h1 className='font-primary'>Science Faculty</h1>
          <img src={programLists[3].img} alt={programLists[3].name} className=' rounded-md md:rounded-xl aspect-video max-h-[350px] w-full object-cover object-top'/>
          <p>
          The Faculty of Science at AVN has been instigated since its establishment. The primary goal of it is to provide advanced and pragmatic in-depth knowledge of science to produce high caliber science scholars. It aims to create foundation for future doctors, engineers, agriculturist, forest officials and scientist. To meet its goal AVN provides the best and quality education which assists to visualize true potentials of students in various fields of science. It was established by reputed and professional academicians in the field of Science who are committed to impart a need-based quality education so as to ensure academic par excellence and attain outstanding result in board exam. Our proficient and professional teachers deliver theory lectures along with practical demonstration in our sophisticated and well equipped modern laboratory to retain practical know-how to the students and strengthen their understanding.
          <br />
          AVN has now grown exuberantly to become an academic hub and one of the prestigious science colleges within and outside the country. The value-driven and cultivated science scholars from AVN are getting unbeaten success in global market.
          </p>
          <h1 className="font-primary text-center my-4">Subject Combination</h1>
          <ul className=' 2xs:grid 2xs:grid-cols-2 flex flex-col gap-1'>
            
            {
              scienceSubjects.map((subject)=>(
                  <li key={subject.group}>
              <div className="bg-secondary font-primary w-full h-8 flex justify-center items-center">Group {subject.group}</div>
              <ul className='py-2'>
                
                {
                  subject.subjects.map(sub => (
                    <li className='flex gap-1' key={sub}> <div className='w-5 h-5 border-secondary border-2'></div>{sub}</li>
                  ))
                }
              </ul>
            </li>
              ))
            }
          </ul>
        </div>

        <div id='management' className='my-5'>
          <h1 className='font-primary'>Management Faculty</h1>
          <img src={programLists[4].img} alt={programLists[4].name} className=' rounded-md md:rounded-xl aspect-video max-h-[350px] w-full object-cover object-top'/>
          <p>
          Faculty of Management in AVN has been initiated since its establishment. The primary goal of Faculty of Management is to provide in-depth knowledge of management in its level. It aims to produce future managers and chartered accountants. It was established by reputed and professional academicians in the field of management. It provides practical base knowledge to students. It not only focuses National Examination Board ( formerly known as HSEB) syllabus but also focuses on competitive examination of CA and BBA courses. It conducts extra classes of research and presentation to make students competent and confidence. As a result, a number of students have been performing better in the field of research , and other examinations conducted by respective universities. Besides academic excellence, AVN conducts a number of ECA programmes such as sports, quiz so as to explore and promote the students hidden talents. In order to make the teaching learning process more practical and effective, AVN organizes frequent industrial and field visits and excursions as well. Similarly, the college encourages the students to take part in researches and presentations so that they could express themselves.
          </p>
          <h1 className="font-primary text-center my-4">Subject Combination</h1>
          <ul className=' 2xs:grid 2xs:grid-cols-2 flex flex-col gap-1'>
            
            {
              managementSubjects.map((subject)=>(
                  <li key={subject.group}>
              <div className="bg-secondary font-primary w-full h-8 flex justify-center items-center">Group {subject.group}</div>
              <ul className='py-2'>
                
                {
                  subject.subjects.map(sub => (
                    <li className='flex gap-1' key={sub}> <div className='w-5 h-5 border-secondary border-2'></div>{sub}</li>
                  ))
                }
              </ul>
            </li>
              ))
            }
          </ul>
        </div>

        <div id='art-edu' className='my-5'>
          <h1 className='font-primary'>Arts / Education Faculty</h1>
          <img src={programLists[5].img} alt={programLists[5].name} className=' rounded-md md:rounded-xl aspect-video max-h-[350px] w-full object-cover object-top'/>
          <p>
          A pressing concern and confusion faced by the SEE graduates is what stream to choose that will enable them to pursue a career in synchronicity with their aptitudes. You are under your parents' or peer's pressure to study Science or Management for a notion that is entrenched in their mind that the stream you choose after SEE mirrors your potential and Humanities is less prolific to your level.
          <br />
          Gone are the days when the Humanities students had limited scope in career. Now, humanities stream has a wider horizon than any other subjects that give you a plethora of career options in various sectors. This stream gives an immense insight about human society, its reality, customs, cultures, traditions and so on.
          </p>
          <h1 className="font-primary text-center my-4">Subject Combination</h1>
          <ul className=' 2xs:grid 2xs:grid-cols-2 flex flex-col gap-1'>
            
            {
              managementSubjects.map((subject)=>(
                  <li key={subject.group}>
              <div className="bg-secondary font-primary w-full h-8 flex justify-center items-center">Group {subject.group}</div>
              <ul className='py-2'>
                
                {
                  subject.subjects.map(sub => (
                    <li className='flex gap-1' key={sub}> <div className='w-5 h-5 border-secondary border-2'></div>{sub}</li>
                  ))
                }
              </ul>
            </li>
              ))
            }
          </ul>
        </div>
      </section>
      <a href="#programs" className=' fixed bottom-5 right-5  bg-secondary w-14 h-14 flex justify-center items-center rounded-full group '><ImArrowUp  size={25} className='group-hover:animate-bounce' /></a>
    </main>
  )
}
