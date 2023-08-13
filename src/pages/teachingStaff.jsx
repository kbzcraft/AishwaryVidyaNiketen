import React from 'react'

import { MissKhageshwariAwasthi, MrBadriPrasadPaudel, MrDharmaDevBhatta, MrGovindPrasadJoshi, MrManishMudbhari, MrOmPrakashPandey, MrsManjuBinadi, principle, vicePrinciple } from "../imgLinks";
import { ContactListsViewer } from '../components/contactListsViewer';
const teachingStaffs = [
    {
        id: 0,
        name: "Mr. Prem Nidhi Ojha",
        address: "Dhangadhi-5,Kailali",
        email: "premnidhi71@gmail.com",
        contactNumber: "9858420171",
        designation: "Principal",
        img: principle
    },
    {
        id: 1,
        name: "Mr.Sanjay Kumar Pant",
        address: "Dhangadhi-6,Kailali",
        email: "",
        contactNumber: "9858421747",
        designation: "Vice-Principal",
        img: vicePrinciple
    },
    {
        id: 2,
        name: "Mr. Badri Prasad Paudel",
        address: "Dhangadhi-7,Kailali",
        email: "",
        contactNumber: "9848442726",
        designation: "Co-ordinator (Morning Shift) (11 & 12)",
        img:MrBadriPrasadPaudel
    },
    {
        id: 3,
        name: "Mr. Om Prakash Pandey",
        address: "Dhangadhi-8,Kailali",
        email: "",
        contactNumber: "9848421451",
        designation: "Co-ordinator (Day Shift) (11 & 12)",
        img:MrOmPrakashPandey

    },
    {
        id: 4,
        name: "Mr. Govind Prasad Joshi",
        address: "Dhangadhi-5,Kailali",
        email: "",
        contactNumber: "984842417",
        designation: "Co-ordinator (9 & 10)",
        img: MrGovindPrasadJoshi
    },
    {
        id: 5,
        name: "Miss.Khageshwari Awasthi",
        address: "Dhangadhi,Kailali",
        email: "",
        contactNumber: "9858426005",
        designation: "Co-ordinator (6 to 8)",
        img: MissKhageshwariAwasthi
    },
    {
        id: 6,
        name: "Mr. Manish Mudbhari",
        address: "Dhnagadhi,Kailali",
        email: "",
        contactNumber: "9848494909",
        designation: "Co-ordinator (1 to 5)",
        img: MrManishMudbhari
    },
    {
        id: 7,
        name: "Mrs. Manju Binadi",
        address: "Dhangadhi-5,Kailali",
        email: "",
        contactNumber: "9848464279",
        designation: "Co-ordinator (PG to UKG)",
        img: MrsManjuBinadi
    },
    {
        id: 8,
        name: "Mr. Dharma Dev Bhatta",
        address: "Dhangadhi-5,Kailali",
        email: "bhattadharmadev71@gmail.com",
        contactNumber: "9858485184",
        designation: "Campus Chief",
        img: MrDharmaDevBhatta
    },
    {
        id: 9,
        name: "Mr. Dabal Bahadur Bista",
        address: "Dhangadhi-5,Kailali",
        email: "",
        contactNumber: "9848424777",
        designation: "Teacher"
    },
    {
        id: 10,
        name: "Mr.Naresh Pant",
        address: "Dhangadhi,Kailali",
        email: "",
        contactNumber: "9848425911",
        designation: "Teacher"
    },
    {
        id: 10,
        name: "Mr.Naresh Pant",
        address: "Dhangadhi,Kailali",
        email: "",
        contactNumber: "9848425911",
        designation: "Teacher"
    },
    {
        id: 11,
        name: "Mr. Chandra Narayan Thakur",
        address: "Dhangadhi-1,Kailali",
        email: "",
        contactNumber: "9865777771",
        designation: "Teacher"
    },
    {
        id: 12,
        name: "Mr. Raghu Bir Bhatta",
        address: "Dhangadhi-4,Kailali",
        email: "",
        contactNumber: "9848422828",
        designation: "Teacher"
    },
    {
        id: 13,
        name: "Mr.Liladhar Sapkota",
        address: "Dhangadhi-5,Kailali",
        email: "",
        contactNumber: "9858424545",
        designation: "Teacher"
    },
    {
        id: 14,
        name: "Mr. Narayan Datta Awasthi",
        address: "Dhangadhi-4, Kailali",
        email: "",
        contactNumber: "9848451000",
        designation: "Teacher"
    },
    {
        id: 15,
        name: "Mr.Dharam Khadka",
        address: "Dhangadhi,Kailali",
        email: "",
        contactNumber: "9800620449",
        designation: "Teacher"
    },
    {
        id: 16,
        name: "Mr.Pushpa Raj Pandey",
        address: "Dhangadhi-5,Kailali",
        email: "",
        contactNumber: "9848432441",
        designation: "Teacher"
    },
    {
        id: 17,
        name: "Mrs.Nanda Ter",
        address: "Mahendranagar, Kanchanpur",
        email: "",
        contactNumber: "9848722418",
        designation: "Teacher"
    },
    {
        id: 18,
        name: "Mrs.Tulashi Sharma",
        address: "Dhangadhi-5,Kailali",
        email: "",
        contactNumber: "9848425731",
        designation: "Teacher"
    },
    {
        id: 19,
        name: "Mr. Khem Raj Pant",
        address: "Dhangadhi, Kailali",
        email: "kpant7@gmail.com",
        contactNumber: "9848428762",
        designation: "Teacher"
    },
    {
        id: 20,
        name: "Mrs. Chanda Pathak",
        address: "Dhangadhi, Kailali",
        email: "",
        contactNumber: "9849112458",
        designation: "Teacher"
    },
    {
        id: 21,
        name: "Mr. Tek Adhikari",
        address: "Dhangadhi, Kailali",
        email: "",
        contactNumber: "9848424474",
        designation: "Teacher"
    },
    {
        id: 22,
        name: "Mr. Narendra Bhatta",
        address: "Dhangadhi, Kailali",
        email: "",
        contactNumber: "9848426742",
        designation: "Teacher"
    },
    {
        id: 23,
        name: "Mr. Jang Bahadur Kathayat",
        address: "Dhangadhi, Kailali",
        email: "",
        contactNumber: "9868460805",
        designation: "Teacher"
    },
    {
        id: 24,
        name: "Mr. Anand Joshi",
        address: "Dhangadhi, Kailali",
        email: "",
        contactNumber: "9848608596;9865777772",
        designation: "Teacher"
    },
    {
        id: 25,
        name: "Mr. Manoj Ojha",
        address: "Dhangadhi, Kailali",
        email: "",
        contactNumber: "9848456310",
        designation: "Teacher"
    },
    {
        id: 26,
        name: "Mr. Hari Prasad Bhatta",
        address: "Dhangadhi-1, Kailali",
        email: "",
        contactNumber: "9848420573",
        designation: "Teacher"
    },
    {
        id: 27,
        name: "Mr. Uttam Bhatta",
        address: "Dhangadhi-5, Kailali",
        email: "",
        contactNumber: "9848425772",
        designation: "Teacher"
    },
    {
        id: 28,
        name: "Mr. Kamal Raj Joshi",
        address: "Dhangadhi-5, Kailali",
        email: "",
        contactNumber: "9848422700",
        designation: "Teacher"
    },
    {
        id: 29,
        name: "Mr. Dev Raj Ojha",
        address: "Dhangadhi-5, Kailali",
        email: "",
        contactNumber: "9848454584",
        designation: "Teacher"
    },
    {
        id: 30,
        name: "Mr. Lakshendra Kadayat",
        address: "Dhangadhi, Kailali",
        email: "",
        contactNumber: "9848424355",
        designation: "Teacher"
    },
    {
        id: 31,
        name: "Mr. Deepak Paudel",
        address: "Dhangadhi, Kailali",
        email: "",
        contactNumber: "9848489450",
        designation: "Teacher"
    },
    {
        id: 32,
        name: "Mr. Bikash Singh",
        address: "Dhangadhi-5, Kailali",
        email: "",
        contactNumber: "9848426566",
        designation: "Teacher"
    },
    {
        id: 33,
        name: "Mr. Bhan Bahadur Bist",
        address: "Dhangadhi-5, Kailali",
        email: "",
        contactNumber: "9804604744",
        designation: "Teacher"
    },
    {
        id: 34,
        name: "Mr. Yadav Prasad Mishra",
        address: "Dhangadhi-5, Kailali",
        email: "",
        contactNumber: "9848484444",
        designation: "Teacher"
    },
    {
        id: 35,
        name: "Mr. Indra Dev Bhatta",
        address: "Dhangadhi, Kailali",
        email: "",
        contactNumber: "9848493656",
        designation: "Teacher"
    },
    {
        id: 36,
        name: "Mrs. Dipika Pandey",
        address: "Dhangadhi, Kailali",
        email: "",
        contactNumber: "9848422211",
        designation: "Teacher"
    },
    {
        id: 37,
        name: "Mr. Manish Mudbhari",
        address: "Dhangadhi-1, Kailali",
        email: "",
        contactNumber: "9848494909",
        designation: ""
    },
    {
        id: 38,
        name: "Mrs. Radha Joshi",
        address: "Dhangadhi-5, Kailali",
        email: "",
        contactNumber: "9848470925",
        designation: "Teacher"
    },
    {
        id: 39,
        name: "Mr. Prem Nidhi Ojha",
        address: "Dhangadhi-5,Kailali",
        email: "premnidhi71@gmail.com",
        contactNumber: "9858420171",
        designation: "Principal"
    },
    {
        id: 40,
        name: "Mr. Sanjay Kumar Pant",
        address: "Dhangadhi-6,Kailali",
        email: "",
        contactNumber: "9858421747",
        designation: "Vice-Principal"
    },
    {
        id: 41,
        name: "Mr. Badri Prasad Paudel",
        address: "Dhangadhi-7,Kailali",
        email: "",
        contactNumber: "9848442726",
        designation: "Co-ordinator (Morning Shift) (11 & 12)"
    },
    {
        id: 42,
        name: "Mr. Om Prakash Pandey",
        address: "Dhangadhi-8,Kailali",
        email: "",
        contactNumber: "9848421451",
        designation: "Co-ordinator (Day Shift) (11 & 12)"
    },
    {
        id: 43,
        name: "Mr. Govind Prasad Joshi",
        address: "Dhangadhi-5,Kailali",
        email: "",
        contactNumber: "984842417",
        designation: "Co-ordinator (9 & 10)"
    },
    {
        id: 44,
        name: "Miss.Khageshwari Awasthi",
        address: "Dhangadhi,Kailali",
        email: "",
        contactNumber: "9858426005",
        designation: "Co-ordinator (6 to 8)"
    },
    {
        id: 45,
        name: "Mr. Manish Mudbhari",
        address: "Dhnagadhi,Kailali",
        email: "",
        contactNumber: "9848494909",
        designation: "Co-ordinator (1 to 5)"
    },
    {
        id: 46,
        name: "Mrs. Manju Binadi",
        address: "Dhangadhi-5,Kailali",
        email: "",
        contactNumber: "9848464279",
        designation: "Co-ordinator (PG to UKG)"
    },
    {
        id: 47,
        name: "Mr. Dharma Dev Bhatta",
        address: "Dhangadhi-5,Kailali",
        email: "bhattadharmadev71@gmail.com",
        contactNumber: "9858485184",
        designation: "Campus Chief"
    },
    {
        id: 48,
        name: "Mr. Dabal Bahadur Bista",
        address: "Dhangadhi-5,Kailali",
        email: "",
        contactNumber: "9848424777",
        designation: "Teacher"
    },
    {
        id: 49,
        name: "Mr.Naresh Pant",
        address: "Dhangadhi,Kailali",
        email: "",
        contactNumber: "9848425911",
        designation: "Teacher"
    },
    {
        id: 50,
        name: "Mr. Chandra Narayan Thakur",
        address: "Dhangadhi-1,Kailali",
        email: "",
        contactNumber: "9865777771",
        designation: "Teacher"
    },
    {
        id: 51,
        name: "Mr. Raghu Bir Bhatta",
        address: "Dhangadhi-4,Kailali",
        email: "",
        contactNumber: "9848422828",
        designation: "Teacher"
    },
    {
        id: 52,
        name: "Mr.Liladhar Sapkota",
        address: "Dhangadhi-5,Kailali",
        email: "",
        contactNumber: "9858424545",
        designation: "Teacher"
    },
    {
        id: 53,
        name: "Mr. Narayan Datta Awasthi",
        address: "Dhangadhi-4, Kailali",
        email: "",
        contactNumber: "9848451000",
        designation: "Teacher"
    },
    {
        id: 54,
        name: "Mr.Dharam Khadka",
        address: "Dhangadhi,Kailali",
        email: "",
        contactNumber: "9800620449",
        designation: "Teacher"
    },
    {
        id: 55,
        name: "Mr.Pushpa Raj Pandey",
        address: "Dhangadhi-5,Kailali",
        email: "",
        contactNumber: "9848432441",
        designation: "Teacher"
    },
    {
        id: 56,
        name: "Mrs.Nanda Ter",
        address: "Mahendranagar, Kanchanpur",
        email: "",
        contactNumber: "9848722418",
        designation: "Teacher"
    },
    {
        id: 57,
        name: "Mrs.Tulashi Sharma",
        address: "Dhangadhi-5,Kailali",
        email: "",
        contactNumber: "9848425731",
        designation: "Teacher"
    },
    {
        id: 58,
        name: "Mr. Khem Raj Pant",
        address: "Dhangadhi, Kailali",
        email: "kpant7@gmail.com",
        contactNumber: "9848428762",
        designation: "Teacher"
    },
    {
        id: 59,
        name: "Mrs. Chanda Pathak",
        address: "Dhangadhi, Kailali",
        email: "",
        contactNumber: "9849112458",
        designation: "Teacher"
    },
    {
        id: 60,
        name: "Mr. Tek Adhikari",
        address: "Dhangadhi, Kailali",
        email: "",
        contactNumber: "9848424474",
        designation: "Teacher"
    },
    {
        id: 61,
        name: "Mr. Narendra Bhatta",
        address: "Dhangadhi, Kailali",
        email: "",
        contactNumber: "9848426742",
        designation: "Teacher"
    },
    {
        id: 62,
        name: "Mr. Jang Bahadur Kathayat",
        address: "Dhangadhi, Kailali",
        email: "",
        contactNumber: "9868460805",
        designation: "Teacher"
    },
    {
        id: 63,
        name: "Mr. Anand Joshi",
        address: "Dhangadhi, Kailali",
        email: "",
        contactNumber: "9848608596;9865777772",
        designation: "Teacher"
    },
    {
        id: 64,
        name: "Mr. Manoj Ojha",
        address: "Dhangadhi, Kailali",
        email: "",
        contactNumber: "9848456310",
        designation: "Teacher"
    },
    {
        id: 65,
        name: "Mr. Hari Prasad Bhatta",
        address: "Dhangadhi-1, Kailali",
        email: "",
        contactNumber: "9848420573",
        designation: "Teacher"
    },
    {
        id: 66,
        name: "Mr. Uttam Bhatta",
        address: "Dhangadhi-5, Kailali",
        email: "",
        contactNumber: "9848425772",
        designation: "Teacher"
    },
    {
        id: 67,
        name: "Mr. Kamal Raj Joshi",
        address: "Dhangadhi-5, Kailali",
        email: "",
        contactNumber: "9848422700",
        designation: "Teacher"
    },
    {
        id: 68,
        name: "Mr. Dev Raj Ojha",
        address: "Dhangadhi-5, Kailali",
        email: "",
        contactNumber: "9848454584",
        designation: "Teacher"
    },
    {
        id: 69,
        name: "Mr.Lakshendra Kadayat",
        address: "Dhangadhi, Kailali",
        email: "",
        contactNumber: "9848424355",
        designation: "Teacher"
    },
    {
        id: 70,
        name: "Mr. Deepak Paudel",
        address: "Dhangadhi, Kailali",
        email: "",
        contactNumber: "9848489450",
        designation: "Teacher"
    },
    {
        id: 71,
        name: "Mr. Bikash Singh",
        address: "Dhangadhi-5, Kailali",
        email: "",
        contactNumber: "9848426566",
        designation: "Teacher"
    },
    {
        id: 72,
        name: "Mr. Bhan Bahadur Bist",
        address: "Dhangadhi-5, Kailali",
        email: "",
        contactNumber: "9804604744",
        designation: "Teacher"
    },
    {
        id: 73,
        name: "Mr. Yadav Prasad Mishra",
        address: "Dhangadhi-5, Kailali",
        email: "",
        contactNumber: "9848484444",
        designation: "Teacher"
    },
    {
        id: 74,
        name: "Mr. Indra Dev Bhatta",
        address: "Dhangadhi, Kailali",
        email: "",
        contactNumber: "9848493656",
        designation: "Teacher"
    },
    {
        id: 75,
        name: "Mrs. Dipika Pandey",
        address: "Dhangadhi, Kailali",
        email: "",
        contactNumber: "9848422211",
        designation: "Teacher"
    },
    {
        id: 76,
        name: "Mr. Manish Mudbhari",
        address: "Dhangadhi-1, Kailali",
        email: "",
        contactNumber: "9848494909",
        designation: ""
    },
    {
        id: 77,
        name: "Mrs. Radha Joshi",
        address: "Dhangadhi-5, Kailali",
        email: "",
        contactNumber: "9848470925",
        designation: "Teacher"
    },
    {
        id: 78,
        name: "Mr. Sanjay Kumar Pant",
        address: "Dhangadhi-6, Kailali",
        email: "",
        contactNumber: "9858421747",
        designation: "Vice-Principal"
    },
    {
        id: 79,
        name: "Mr. Badri Prasad Paudel",
        address: "Dhangadhi-7, Kailali",
        email: "",
        contactNumber: "9848442726",
        designation: "Co-ordinator (Morning Shift) (11 & 12)"
    },
    {
        id: 80,
        name: "Mr. Om Prakash Pandey",
        address: "Dhangadhi-8, Kailali",
        email: "",
        contactNumber: "9848421451",
        designation: "Co-ordinator (Day Shift) (11 & 12)"
    },
    {
        id: 81,
        name: "Mr. Govind Prasad Joshi",
        address: "Dhangadhi-5, Kailali",
        email: "",
        contactNumber: "984842417",
        designation: "Co-ordinator (9 & 10)"
    },
    {
        id: 82,
        name: "Miss.Khageshwari Awasthi",
        address: "Dhangadhi, Kailali",
        email: "",
        contactNumber: "9858426005",
        designation: "Co-ordinator (6 to 8)"
    },
    {
        id: 83,
        name: "Mr. Manish Mudbhari",
        address: "Dhnagadhi, Kailali",
        email: "",
        contactNumber: "9848494909",
        designation: "Co-ordinator (1 to 5)"
    },
    {
        id: 84,
        name: "Mrs. Manju Binadi",
        address: "Dhangadhi-5, Kailali",
        email: "",
        contactNumber: "9848464279",
        designation: "Co-ordinator (PG to UKG)"
    },
    {
        id: 85,
        name: "Mr. Dharma Dev Bhatta",
        address: "Dhangadhi-5, Kailali",
        email: "bhattadharmadev71@gmail.com",
        contactNumber: "9858485184",
        designation: "Campus Chief"
    },
    {
        id: 86,
        name: "Mr. Dabal Bahadur Bista",
        address: "Dhangadhi-5, Kailali",
        email: "",
        contactNumber: "9848424777",
        designation: "Teacher"
    },
    {
        id: 87,
        name: "Mr.Naresh Pant",
        address: "Dhangadhi, Kailali",
        email: "",
        contactNumber: "9848425911",
        designation: "Teacher"
    },
    {
        id: 88,
        name: "Mr. Chandra Narayan Thakur",
        address: "Dhangadhi-1, Kailali",
        email: "",
        contactNumber: "9865777771",
        designation: "Teacher"
    },
    {
        id: 89,
        name: "Mr. Raghu Bir Bhatta",
        address: "Dhangadhi-4, Kailali",
        email: "",
        contactNumber: "9848422828",
        designation: "Teacher"
    },
    {
        id: 90,
        name: "Mr.Liladhar Sapkota",
        address: "Dhangadhi-5, Kailali",
        email: "",
        contactNumber: "9858424545",
        designation: "Teacher"
    },
    {
        id: 91,
        name: "Mr. Narayan Datta Awasthi",
        address: "Dhangadhi-4, Kailali",
        email: "",
        contactNumber: "9848451000",
        designation: "Teacher"
    },
    {
        id: 92,
        name: "Mr.Dharam Khadka",
        address: "Dhangadhi, Kailali",
        email: "",
        contactNumber: "9800620449",
        designation: "Teacher"
    },
    {
        id: 93,
        name: "Mr.Pushpa Raj Pandey",
        address: "Dhangadhi-5, Kailali",
        email: "",
        contactNumber: "9848432441",
        designation: "Teacher"
    },
    {
        id: 94,
        name: "Mrs.Nanda Ter",
        address: "Mahendranagar, Kanchanpur",
        email: "",
        contactNumber: "9848722418",
        designation: "Teacher"
    },
    {
        id: 95,
        name: "Mrs.Tulashi Sharma",
        address: "Dhangadhi-5, Kailali",
        email: "",
        contactNumber: "9848425731",
        designation: "Teacher"
    },
    {
        id: 96,
        name: "Mr. Khem Raj Pant",
        address: "Dhangadhi, Kailali",
        email: "kpant7@gmail.com",
        contactNumber: "9848428762",
        designation: "Teacher"
    },
    {
        id: 97,
        name: "Mrs. Chanda Pathak",
        address: "Dhangadhi, Kailali",
        email: "",
        contactNumber: "9849112458",
        designation: "Teacher"
    },
    {
        id: 98,
        name: "Mr. Tek Adhikari",
        address: "Dhangadhi, Kailali",
        email: "",
        contactNumber: "9848424474",
        designation: "Teacher"
    },
    {
        id: 99,
        name: "Mr. Narendra Bhatta",
        address: "Dhangadhi, Kailali",
        email: "",
        contactNumber: "9848426742",
        designation: "Teacher"
    }    
];



export const TeachingStaffPage = () => {
  return (
    <main>
        <ContactListsViewer data={teachingStaffs} name="Teaching Staffs" />
    </main>
  )
}
