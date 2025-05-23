// import Hero06 from "@/components/hero-06/hero-06";
// import HomeCollections from "../../components/collections/homeCollections";
// import HomeNewsHighlights from "@/components/bulletin/homeNews";
import IntroInfoCard from "@/components/Introduction/intro";
import SGPAHome from "../sgpa/sgpaHome";
import CGPAHome from "../cgpa/cgpaHome";
import AboutMeButton from "@/components/aboutButton/aboutMe";

const HomePage = () => {

  return (

    <>
      {/* < Hero06 /> */}
      < IntroInfoCard />
      < CGPAHome />
      < SGPAHome />
    </>

  );
};

export default HomePage;

