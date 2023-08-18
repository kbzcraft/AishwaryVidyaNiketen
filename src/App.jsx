import { useCallback, useEffect, lazy, Suspense } from "react"
import {  Routes, Route, useLocation} from "react-router-dom"
import "./index.css"
const HomePage = lazy(() => import("./pages/Homepage"));
const AboutUsPage = lazy(() => import("./pages/AboutUsPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const ProgramsPage = lazy(() => import("./pages/ProgramsPage"));
const RulesPage = lazy(() => import("./pages/rulesPage"));
const AdminsInfopage = lazy(() => import("./pages/adminsInfopage"));
const ManagementCommittee = lazy(() => import("./pages/managementCommittee"));
const TeachingStaffPage = lazy(() => import("./pages/teachingStaff"));
const FourOfour = lazy(() => import("./components/fourOfour"));
const FacilitiesPage = lazy(() => import("./pages/facilitiesPage"));
const AnnouncementPage = lazy(()=> import("./pages/AnnouncementPage"));
const AnnouncementDetails = lazy(()=> import("./pages/AnnouncementDetails"));

import { Navbar } from "./components/Navbar";
import { Footer } from "./components/footer";

const App = () => {
  
  const {pathname} =  useLocation()
  const pathLists = [
    "/AishwaryVidyaNiketen",
    "/AishwaryVidyaNiketen/about-us",
    "/AishwaryVidyaNiketen/contact-us",
    "/AishwaryVidyaNiketen/academic-programs",
    "/AishwaryVidyaNiketen/law",
    "/AishwaryVidyaNiketen/contact-admins",
    "/AishwaryVidyaNiketen/contact/management-committee",
    "/AishwaryVidyaNiketen/contact/teaching-staff",
    "/AishwaryVidyaNiketen/facilities"
  ]
  const scrlTOTop = useCallback(() => {
    if (pathLists.includes(pathname)) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      console.log("Page changed to " + pathname);
    }
  }, [pathname]);
  useEffect(()=>{
    
    scrlTOTop()
  }, [pathname])
  return (
    <>
    {/* <QuickSearch /> */}

    <Navbar />
    <Suspense fallback={<div>Loading...</div>}>
    <Routes>
    
        <Route path="/AishwaryVidyaNiketen" element={<HomePage />}></Route>
        <Route path="/AishwaryVidyaNiketen/about-us" element={<AboutUsPage />}></Route>
        <Route path="/AishwaryVidyaNiketen/contact-us" element={<ContactPage />} ></Route>
        <Route path="/AishwaryVidyaNiketen/academic-programs" element={<ProgramsPage />} ></Route>
        <Route path="/AishwaryVidyaNiketen/law" element={<RulesPage />}></Route>
        <Route path="/AishwaryVidyaNiketen/contact-admins" element={<AdminsInfopage />}></Route>
        <Route path="/AishwaryVidyaNiketen/contact/management-committee" element={<ManagementCommittee />}></Route>
        <Route path="/AishwaryVidyaNiketen/contact/teaching-staff" element={<TeachingStaffPage />} />
        <Route path="/AishwaryVidyaNiketen/facilities" element={<FacilitiesPage />} />
        <Route path="/AishwaryVidyaNiketen/announcements" element={<AnnouncementPage />} />
        <Route path="/AishwaryVidyaNiketen/announcements/:ID" element={<AnnouncementDetails />} />
        <Route path="*" element={<FourOfour />} />
      
    </Routes>
    </Suspense>
    
    <Footer />
    
    {/* <OnThisPage /> */}
    </>
  )
}

export default App
