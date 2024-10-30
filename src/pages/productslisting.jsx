import Banner from "../components/banner/Banner";
import Gtcertificate from "../components/certificate/Gtcertificate";
import CombocourseList from "../components/comboCourse/CombocourseList";
import Team from "../components/team/Team";
import Testimonials from "../components/testimonials/Testimonials";
import { Whychooseus } from "../components/whychoose/Whychooseus";

const Productslisting = () => {
  return (
    <>
      <Banner />
      <CombocourseList />
      <Whychooseus />
      <Gtcertificate />
      <Testimonials />
      <Team />
    </>
  );
};

export default Productslisting;
