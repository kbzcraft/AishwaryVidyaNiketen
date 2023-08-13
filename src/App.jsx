import { Routes, Route } from "react-router-dom"

import { HomePage } from "./pages/Homepage"
import "./index.css"
import { AboutUsPage } from "./pages/AboutUsPage"
import { Navbar } from "./components/Navbar"
import { ContactPage } from "./pages/ContactPage"
import { ProgramsPage } from "./pages/ProgramsPage"
import { Footer } from "./components/footer"
import { RulesPage } from "./pages/rulesPage"
import { AdminsInfopage } from "./pages/adminsInfopage"
import { ManagementCommittee } from "./pages/managementCommittee"
import { QuickSearch } from "./sidebar/quickSearch"
import { OnThisPage } from "./sidebar/onThisPage"
import { TeachingStaffPage } from "./pages/teachingStaff"
const App = () => {
  

  return (
    <>
    {/* <QuickSearch /> */}

    <Navbar />
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/about-us" element={<AboutUsPage />}></Route>
      <Route path="/contact-us" element={<ContactPage />} ></Route>
      <Route path="/academic-programs" element={<ProgramsPage />} ></Route>
      <Route path="/law" element={<RulesPage />}></Route>
      <Route path="/contact-admins" element={<AdminsInfopage />}></Route>
      <Route path="/contact/management-committee" element={<ManagementCommittee />}></Route>
      <Route path="/contact/teaching-staff" element={<TeachingStaffPage />} />
    </Routes>
    <Footer />
    
    {/* <OnThisPage /> */}
    </>
  )
}

export default App
