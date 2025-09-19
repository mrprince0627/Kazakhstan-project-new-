import Header from './components/Homepage/Header';
import Hero from './components/Homepage/Hero';
import UniversityGrid from './components/Homepage/UniversityGrid';
import AboutKyrgyzstan from './components/Homepage/AboutKyrgyzstan';
import CompareUniversities from './components/Homepage/CompareUniversities';
import Scholarships from './components/Homepage/Scholarships';
import EducationSystem from './components/Homepage/EducationSystem';
import MinistryLinks from './components/Homepage/MinistryLinks';
import Footer from './components/Homepage/Footer';
import { Routes, Route } from 'react-router-dom';
import UniversityDetail from './components/university/UniversityDetail';
import Scholarshipmain from './components/Scholarships/schloshipmain';
import UniversityList from './components/university/UniversityList';

import ScolarshipDetail from './components/Scholarships/ScholarshipsDetail';
import EducationSystemNav from './components/Pages/EducationSystemNav';
import AboutKyrgyzstanNav from './components/Pages/AboutKyrgyzstanNav';
import AboutUs from './components/Pages/AboutUs';
import ContactTeam from './components/Pages/OurPartners/ContactTeam';
import Signup from './components/Auth/Signup';

import Partners from './components/Pages/OurPartners/Partners';

import StudentDashboard from './components/Pages/Student/Dashboard';
import AgentDashboard from './components/Pages/Agent/AgentDashboard';
import BlognewsMain from './components/Pages/Blog&News/BlogNewsMain';
import ApplicationForm from './components/Pages/Student/ApplicationForm';
import { MBBSCoursePage } from './components/university/UniversityCourses/MBBSCoursePage';



function App(): JSX.Element {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Routes ko wrap kiya */}
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <UniversityGrid />
              <AboutKyrgyzstan />
              <CompareUniversities />
              <Scholarships />
              <EducationSystem />
              <MinistryLinks />
            </>
          }
        />
        <Route path="/universities/:slug" element={<UniversityDetail />} />
        <Route path="/scholarships" element={<Scholarshipmain />} />
        <Route path="/universities" element={<UniversityList />} />
        <Route path="/education-system" element={<EducationSystemNav />} />
        <Route path="/compare" element={<CompareUniversities />} />
        <Route path="/about-kyrgyzstan" element={<AboutUs />} />
        <Route path="/about-us" element={<AboutKyrgyzstanNav />} />
        
        <Route path="/contact-us" element={<ContactTeam onBack={() => window.history.back()} />} />
        <Route path="/auth" element={<Signup />} />

        <Route path="/our-partners" element={<Partners />} />
        <Route path="/student-dashboard" element={<StudentDashboard applications={[]} student={{} as any} />} />

        <Route path='/agent-dashboard' element={<AgentDashboard />} />
        <Route path="/scholarships/:universityId/:scholarshipId" element={<ScolarshipDetail />} />
        <Route path="/blog-news" element={<BlognewsMain />} />
        <Route
          path="/student/application-form"
          element={
            <ApplicationForm onApplicationSubmit={(applicationData) => {
              // handle application submission here
              console.log('Application submitted:', applicationData);
            }} />
          }
        />
         <Route path='/universities/:slug/mbbscourses' element={<MBBSCoursePage />} />

      </Routes>


      <Footer />
    </div>
  );
}

export default App;
