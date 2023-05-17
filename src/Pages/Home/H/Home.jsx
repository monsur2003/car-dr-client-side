import Services from "../Services/Services";
import AboutUs from "./AboutUs/AboutUs";
import Banner from "./Banner/Banner";

const Home = () => {
   return (
      <div>
         <Banner></Banner>
         <AboutUs></AboutUs>
         <Services></Services>
         <h1>This is home</h1>
      </div>
   );
};

export default Home;
