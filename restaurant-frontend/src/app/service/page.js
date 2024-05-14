import Header from "../../../component/header"
import HomeCardSection from "../../../component/serviceCard"

const Service = () => {
  return (
    <div className="service-section py-5 flex-col">
      <Header text={{heading : " Our Services", subHeading : "Explore Our Services"}}  Style={{alignItem : "start"}}/>
      <HomeCardSection count={8}/>
    </div>
  )
}

export default Service