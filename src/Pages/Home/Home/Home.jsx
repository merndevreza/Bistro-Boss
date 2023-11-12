import Banner from "../Sections/Banner";
import CTA from "../Sections/CTA";
import CallUs from "../Sections/CallUs";
import Category from "../Sections/Category";
import ChefRecommends from "../Sections/ChefRecommends";
import Featured from "../Sections/Featured";
import HomeMenu from "../Sections/HomeMenu";
import Testimonial from "../Sections/Testimonial";


const Home = () => {
   return (
      <div>
         <Banner></Banner>
         <Category></Category>
         <CTA></CTA>
         <HomeMenu></HomeMenu>
         <CallUs></CallUs>
         <ChefRecommends></ChefRecommends>
         <Featured></Featured>
         <Testimonial></Testimonial>
      </div>
   );
};

export default Home;