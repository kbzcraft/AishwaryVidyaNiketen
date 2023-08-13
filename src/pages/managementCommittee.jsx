import React, { useState } from 'react'
import { MrNripBahadurOdd, MrRajendraPrasadBhatta, MrSantoshMudbhari, MrsRitaBhandari, ProfDrHemRajPant, principle } from '../imgLinks';
import { ContactListsViewer } from '../components/contactListsViewer';

export const ManagementCommittee = () => {
    const [profileIndex , setProfileIndex] = useState(0)
    
    const managementStaff = [
        {
            name: "Mr. Prem Nidhi Ojha",
            address: "Dhangadhi-5,Kailali",
            email: "",
            contactNumber: "9858420171",
            designation: "Secretary Member",
            img: principle,
            id: 0
          },
        {
          id: 1,
          name: "Mr. Nrip Bahadur Odd",
          address: "Dhangadhi-6,Kailali",
          email: "",
          contactNumber: "9858423074",
          designation: "President",
          img: MrNripBahadurOdd
        },
        {
          id: 2,
          name: "Prof.Dr.Hem Raj Pant",
          address: "Dhangadhi-5,Kailali",
          email: "",
          contactNumber: "9858750141",
          designation: "Member",
          img: ProfDrHemRajPant
        },
        {
          id:3,
          name: "Mr. Santosh Mudbhari",
          address: "Dhangadhi-1,Kailali",
          email: "",
          contactNumber: "9858494514",
          designation: "Member",
          img: MrSantoshMudbhari ,
        },
        {
          id:4,
          name: "Mrs. Rita Bhandari (Bam)",
          address: "Dhangadhi-2,Kailali",
          email: "",
          contactNumber: "9841572419",
          designation: "Member",
          img: MrsRitaBhandari
        },
        {
          id:5,
          name: "Mr. Rajendra Prasad Bhatta",
          address: "Dhangadhi,Kailali",
          email: "",
          contactNumber: "9848453494",
          designation: "Member",
          img:MrRajendraPrasadBhatta,
        },
        {
          id:6,
          name: "Representative Of DEO Kailali",
          address: "Dhangadhi,Kailali",
          email: "",
          contactNumber: "091-521143",
          designation: "Member",
          img:""
        },
        
      ];
  return (
    <>
    
    <ContactListsViewer data={managementStaff} name="Management Staffs" />
    </>
  )
}
