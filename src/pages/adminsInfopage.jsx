import React, {useState} from 'react'
// import { Link } from "react-router-dom";
import { MrBharthariRamChaudhary, MrBhimRajPaudel, MrBirNarayanChaudhary, MrChetRajOjha, MrDipakRajJoshi, MrKamalPrasadBakhariya, MrKrishnaBahadurBista, MrNandaRamDhami } from "../imgLinks";

import { ContactListsViewer } from '../components/contactListsViewer';


const AdminsInfopage = () => {
    
    const admins = [
        {
            name: "Mr.Bir Narayan Chaudhary",
            address: "Dhangadhi-8,Kailali",
            email: "birnarayan28@gmail.com",
            contactNumber: "9848422075",
            designation: "Sr.Administration Officer",
            profileLink: "/Profile/44",
            id:0,
            img: MrBirNarayanChaudhary
        },
        {
            id:1,
            name: "Mr. Dipak Raj Joshi",
            address: "Dhangadhi,Kailali",
            email: "",
            contactNumber: "9848442550",
            designation: "Library Officer",
            profileLink: "/Profile/45",
            img: MrDipakRajJoshi
        },
        {
            id:2,
            name: "Mr. Nanda Ram Dhami",
            address: "Dhangadhi-5,Kailali",
            email: "dhaminandaram@gmail.com",
            contactNumber: "9848430748",
            designation: "Store Keeper",
            profileLink: "/Profile/46",
            img:MrNandaRamDhami
        },
        {
            id:3,
            name: "Mr. Kamal Prasad Bakhariya",
            address: "Dhangadhi-1,Kailali",
            email: "bkhrya@yahoo.com",
            contactNumber: "9848420020",
            designation: "Lab Assistant",
            profileLink: "/Profile/47",
            img: MrKamalPrasadBakhariya
        },
        {
            id:4,
            name: "Mr.Krishna Bahadur Bista",
            address: "Dhangadhi, Kailali",
            email: "krishnabista@gmail.com",
            contactNumber: "9848422189",
            designation: "Nayab Subba",
            profileLink: "/Profile/48",
            img:MrKrishnaBahadurBista
        },
        {
            id:5,
            name: "Mr. Bhim Raj Paudel",
            address: "Dhangadhi-1, Kailali",
            email: "bhimpaudel@gmail.com",
            contactNumber: "9848661966",
            designation: "Nayab Subba",
            profileLink: "/Profile/49",
            img: MrBhimRajPaudel
        },
        {
            id:6,
            name: "Mr.Bharthari Ram Chaudhary",
            address: "Dhangadhi-8,Kailali",
            email: "bhartharichaudhary@gmail.com",
            contactNumber: "9848421775",
            designation: "Sr. Account Officer",
            profileLink: "/Profile/43",
            img: MrBharthariRamChaudhary
        },
        {
            id:7,
            name: "Mr. Chet Raj Ojha",
            address: "Dhangadhi-1, Kailali",
            email: "chetojha40@gmail.com",
            contactNumber: "9868525009",
            designation: "IT Assistant",
            profileLink: "/Profile/50",
            img: MrChetRajOjha
        }
    ];
  return (
    <>
    
    <ContactListsViewer data={admins} name="Administration Staffs" />
   
    </>
  )
}

export default AdminsInfopage