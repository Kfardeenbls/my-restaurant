import HomeAboutSection from "../../component/HomeAboutSection";
import HomeTeamsCard from "../../component/HomeTeamsCard";
import HomeMenu from "../../component/homeMenu";
import HomeCardSection from "../../component/serviceCard";
import Booking from "./more/booking/page";
import Testimonial from "./more/testimonial/page";

export default function Home() {
  return (
    <main>
      <HomeCardSection count={4}/>
      <HomeAboutSection/>
      <HomeMenu/>
      <Booking/>
      <HomeTeamsCard count={4}/>
      <Testimonial/>
    </main>
  );
}
