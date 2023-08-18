import React from 'react'
const RulesPage = () => {

    const studentRules = [
        {
          ruleNumber: 1,
          description: "After school hours, students are not allowed to visit public places like hotels or cinemas in school uniform. The school will take action if violations are reported.",
        },
        {
          ruleNumber: 2,
          description: "Wearing expensive jewelry on body parts like nose, ears, fingers, neck, etc., and using cosmetics like nadpalis, kajal, bindi, blush, etc., is strictly prohibited.",
        },
        {
          ruleNumber: 3,
          description: "Students absent for six consecutive days without written notice will have their names removed from the attendance list. Re-enrollment requires a fee of Rs. 200/-.",
        },
        {
          ruleNumber: 4,
          description: "Engaging in fights within school premises results in expulsion and issuance of a red card.",
        },
        {
          ruleNumber: 5,
          description: "Using abusive language towards principal, teachers, staff, or classmates will lead to legal consequences, involving parents and potential police intervention.",
        },
        {
          ruleNumber: 6,
          description: "Damaging school property may result in fines, punishment, or both, determined by the school disciplinary committee.",
        },
        {
          ruleNumber: 7,
          description: "Skipping class: 1st offense - warning letter in presence of parents; 2nd offense - Rs. 1000/- fine; 3rd offense - expulsion upon disciplinary committee's recommendation.",
        },
        {
          ruleNumber: 8,
          description: "Immediate expulsion for engaging in obscene behavior within school premises, classroom, or outside. This includes inappropriate gestures, contact, speech, messages, or encouragement.",
        },
        {
          ruleNumber: 9,
          description: "Prohibited obscene behavior towards opposite gender students. Offenders will be expelled based on offense severity.",
        },
        {
          ruleNumber: 10,
          description: "Late arrival to school results in denied entry.",
        },
        {
          ruleNumber: 11,
          description: "Violation of gatepass rules or attempts to cross school walls result in a Rs. 200 fine, punishment, or both.",
        },
        {
          ruleNumber: 12,
          description: "Mobile phones not allowed except during Farewell Party, Welcome Party, or Annual Function. Penalties for violations: 1st - Rs. 500/- fine; 2nd - Rs. 1000/- fine; 3rd - phone returned at academic session end.",
        },
        {
          ruleNumber: 13,
          description: "Female students not allowed to cut hair, and male students must maintain a very short Crew Cut.",
        },
        {
          ruleNumber: 14,
          description: "No admission fee refunds for students leaving school for personal reasons.",
        }
      ];

  return (
    <main className='max-w-[800px] w-[96vw] outline-1 mt-2  mx-auto'> 
        <h1 className="font-primary font-bold text-center tracking-tight  text-xl uppercase">RULES TO BE FOLLOWED BY STUDENTS: </h1>
        <h1 className='font-primary font-medium text-center tracking-tight'>(Student Code of Conduct)</h1>
        <ol className='pl-7 my-5'>
            {
                studentRules.map((rule)=>(
                    <li className=' font-secondary font-medium text-lg list-decimal' key={rule.ruleNumber}>
                        {rule.description}
                    </li>
                ))
            }
        </ol>
    </main>
  )
}

export default RulesPage