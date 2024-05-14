import team1 from "../public/team/team-1.jpg";
import team2 from "../public/team/team-2.jpg";
import team3 from "../public/team/team-3.jpg";
import team4 from "../public/team/team-4.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";
import Header from "./header";

const HomeTeamsCard = ({count}) => {
  const teamsData = [
    {
      title: "Sizzling Chefs",
      designation: "Chinese Cuisine Specialist",
      thumblain: team1,
    },
    {
      title: "Taste Masters",
      designation: "Continental Cuisine Expert",
      thumblain: team2,
    },
    {
      title: "Flavor Ninjas",
      designation: "Indian Cuisine Maestro",
      thumblain: team3,
    },
    {
      title: "Service Heroes",
      designation: "Customer Satisfaction Specialist",
      thumblain: team4,
    },
    {
        title: "Sizzling Chefs",
        designation: "Chinese Cuisine Specialist",
        thumblain: team1,
      },
      {
        title: "Taste Masters",
        designation: "Continental Cuisine Expert",
        thumblain: team2,
      },
      {
        title: "Flavor Ninjas",
        designation: "Indian Cuisine Maestro",
        thumblain: team3,
      },
      {
        title: "Service Heroes",
        designation: "Customer Satisfaction Specialist",
        thumblain: team4,
      },
  ];
  return (
    <div className="teams-section py-2 ">
      <Header
        text={{ heading: "team members", subHeading: "our master chef" }}
        Style={{ alignItems: "center" }}
      />
      <div className="teams-card-conatiner flex">
        {teamsData.slice(0, count).map((team, index) => (
          <div key={index} className="card flex-col align-center m-2">
            <div className="img-container relative m-2">
              <Image
                src={team.thumblain}
                alt=""
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="details flex-col">
              <h5 className="title">{team.title}</h5>
              <small className="mb-1">{team.designation}</small>
              <div className="social flex-gap">
                <div className="icon-wrapper icon " style={{ width: "1.5rem" }}>
                  <FontAwesomeIcon icon={faTwitter} />
                </div>
                <div className="icon-wrapper icon " style={{ width: "1.5rem" }}>
                  <FontAwesomeIcon icon={faFacebook} />
                </div>
                <div className="icon-wrapper icon " style={{ width: "1.5rem" }}>
                  <FontAwesomeIcon icon={faLinkedin} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeTeamsCard;
