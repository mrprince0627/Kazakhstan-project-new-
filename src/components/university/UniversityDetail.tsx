import UniversityHero from "../university/UniversityHero";
import About from "../university/About";
import Facilities from "../university/Facilities";
import CampusPhotos from "../university/CampusPhotos";
import Rankings from "../university/Rankings";
import InternationalStudents from "../university/InternationalStudents";
import ParentTestimonials from "../university/ParentTestimonials";
import RatingsReviews from "../university/RatingsReviews";
import ApplicationForm from "../university/ApplicationForm";
import ApplicationProcedure from "../university/ApplicationProcedure";
import FAQ from "../university/FAQ";
import TrustSeals from "../university/TrustSeals";



const UniversityDetail: React.FC = () => {
  return (
    <>
      <UniversityHero />
      <About />
      <Facilities />
      <CampusPhotos />
      <Rankings />
      <InternationalStudents />
      <ParentTestimonials />
      <RatingsReviews />
      <ApplicationForm />
      <ApplicationProcedure />
      <FAQ />
      <TrustSeals />


    </>
  );
};

export default UniversityDetail;
