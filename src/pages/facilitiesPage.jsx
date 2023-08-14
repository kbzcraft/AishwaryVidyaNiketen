import React from 'react'
import { Facilities } from '../components/facilities'
import { cafeteriaFake, transportationAVN } from '../imgLinks'

export const FacilitiesPage = () => {
  return (
    <section className='max-w-[800px] w-[96vw] mx-auto mb-5'>
        <h1 className='font-primary font-semibold md:text-3xl text-2xl'>Our Facilities : </h1>
        <Facilities main={true} />
        <div className='grid sm:grid-cols-2 gap-2'>
            <div className='flex flex-col gap-2'>
                <div id='computerLab'>
                    <h1 className='font-primary'>Computer Lab</h1>
                    <p className='font-secondary'>The school has its own well equipped computer section with internet facilities. students from class 1 and upwards are trained in preliminary computer course by computer experts to keep them abreast with modern education. </p>
                    <img src="https://spmemorialpublicschool.in/Assets/computer-lab.png" alt="avn computer lab" />
                </div>
                
                <div id='library'>
                    <h1 className='font-primary'>Library</h1>
                    <p className='font-secondary'>The School Library has a well stocked library and reading room with magazines,Periodic and non-perodical books converging various subjects. Students are encouraged to make an effective use of the library. </p>
                    <img src="https://spmemorialpublicschool.in/Assets/careers-school-librarian.jpg" alt="avn computer lab" />
                </div>

                <div id="transportation">
                    <h1 className='font-primary'>Transportation</h1>
                    <p className='font-secondary'>
                    The school provides efficient transportation services for students, ensuring safe and convenient travel to and from the campus. Our dedicated fleet of vehicles is supervised by trained drivers and staff, ensuring the well-being of each student during their commute. We prioritize a comfortable and secure journey, allowing students to focus on their studies and school activities.
                    </p>
                    <img src={transportationAVN} alt="Transportation" className=' object-cover  w-full'/>
                </div>
            </div>
            <div className='flex flex-col gap-4'>
                <div id='medicalRoom'>
                    <h1 className='font-primary'>Medical</h1>
                    <p className='font-secondary'>Medical Facilities is available to any aling student at any time, by a team of qualified and famous doctor under the guidance of Dr.Ravi Kumar and Dr.Kumari Deepshikha .The school has the provision for some specific treatment from outside in special cases for which the expences will be endured By Mr.Sanjay Kumar Srivastava. </p>
                    <img src="https://spmemorialpublicschool.in/Assets/Medical%20Facility.jpg" alt="avn computer lab" />
                </div>
        
                <div id='laboratery'>
                    <h1 className='font-primary'>Science Lab</h1>
                    <p className='font-secondary'>The School has a well equipped modern laboratory separately for Math, Physics, Chemistry, and Biology to give the students hand on practical education well.  </p>
                    <img src="https://spmemorialpublicschool.in/Assets/science%20lab.jpg" alt="avn computer lab" />
                </div>

                <div id='cafeteria'>
                    <h1 className='font-primary'>Cafeteria</h1>
                    <p className='font-secondary'>
                    Our school features a vibrant and inviting cafeteria where students can enjoy delicious and nutritious meals. The cafeteria offers a diverse menu with a variety of options, catering to different tastes and dietary preferences. The cozy environment encourages social interaction and relaxation, providing students with a pleasant space to refuel and recharge during their busy school day.
                    </p>
                    <img src={cafeteriaFake} alt="cafeteria" />
                </div>


            </div>
        </div>
    </section>
  )
}
