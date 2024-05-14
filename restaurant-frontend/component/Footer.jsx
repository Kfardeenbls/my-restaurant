import Link from "next/link";
import { ToCamelCase } from "../util/CamelCase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Button from "./Button";

const footerData = [
  {
    heading: "company",
    subContent: [
      {
        content: "about us",
        link: "/about",
      },
      {
        content: "contact us",
        link: "/contact",
      },
      {
        content: "reservation",
        link: "/reservation",
      },
      {
        content: "privacy policy",
        link: "/privacyPolicy",
      },
      {
        content: "terms and conditions",
        link: "/termsAndConditions",
      },
    ],
  },
  {
    heading: "contact",
    subContent: [
      {
        title: "123 street, New York, USA",
        icon: <FontAwesomeIcon icon={faLocationDot} />,
      },
      { title: "+91 8114602855", icon: <FontAwesomeIcon icon={faPhone} /> },
      { title: "info@gamil.com", icon: <FontAwesomeIcon icon={faEnvelope} /> },
    ],
    icons: [
      {
        title: "twitter",
        icon: <FontAwesomeIcon icon={faTwitter} />,
      },
      {
        title: "facebook",
        icon: <FontAwesomeIcon icon={faFacebook} />,
      },
      {
        title: "youtube",
        icon: <FontAwesomeIcon icon={faYoutube} />,
      },
      {
        title: "linkedIn",
        icon: <FontAwesomeIcon icon={faLinkedin} />,
      },
    ],
  },
  {
    heading: "opening",
    subContent: {
      daysBetween: "monday - saturday",
      time: "09AM - 08PM",
      holiday: "Sunday",
      holidayTime: "10AM - 08PM",
    },
  },
  {
    heading: "newsletter",
    desc: "Dolor amet sit justo amet elitr clita ipsum elitr est.",
    inputFieldContent: {
      placeholder: "your email",
      btnContent: "SIGNUP",
    },
  },
];

export const SingleSideBarHeader = ({ text }) => {
  return (
    <div className="header-section single-side-bar-header my-2">
      <div className="upper flex-gap">
        <h5 className="heading">{ToCamelCase(text)}</h5>
        <span></span>
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <div className="footer-section px-3">
      <div className="top-container flex-gap py-5">
        {footerData &&
          footerData.map((item, index) => (
            <div className="footer-items" key={index}>
              {item.heading && <SingleSideBarHeader text={item.heading} />}
              {item.heading === "company" &&
                item.subContent.map((subItem, subIndex) => (
                  <div className="item flex-gap mb-1" key={subIndex}>
                    <span className="icon" style={{ width: ".5rem" }}>
                      <FontAwesomeIcon icon={faChevronRight} />
                    </span>
                    <Link className="link" href={subItem.link}>
                      {subItem.content}
                    </Link>
                  </div>
                ))}
              {item.heading === "contact" && (
                <div>
                  {item.subContent &&
                    item.subContent.map((subItem, subIndex) => (
                      <div className="flex-gap mb-1 item" key={subIndex}>
                        <span style={{ width: "1rem" }}>{subItem.icon}</span>
                        <span>{subItem.title}</span>
                      </div>
                    ))}
                  {item.icons && (
                    <div className="item flex-gap mb-1">
                      {item.icons &&
                        item.icons.map((icon, iconIndex) => (
                          <div
                            className="icon-wrapper icon mb-1"
                            key={iconIndex}
                            style={{ width: "1.5rem" }}
                          >
                            <span>{icon.icon}</span>
                          </div>
                        ))}
                    </div>
                  )}
                </div>
              )}
              {item.heading === "opening" && (
                <div className="flex-col-gap item mb-1">
                  <span>{item.subContent.daysBetween}</span>
                  <span>{item.subContent.time}</span>
                  <span>{item.subContent.holiday}</span>
                  <span>{item.subContent.holidayTime}</span>
                </div>
              )}
              {item.heading === "newsletter" && (
                <div className="flex-col-gap item mb-1">
                  <p>{item.desc}</p>
                  <div className="signup-input flex">
                  <input
                  className="input"
                    type="text"
                    placeholder={item.inputFieldContent.placeholder}
                  />
                  <Button text={item.inputFieldContent.btnContent} btnType="btn" href="/" style={{padding: "0.5rem 0.5rem"}}/>
                  </div>
                </div>
              )}
            </div>
          ))}
      </div>
      <div className="bottom-container"></div>
    </div>
  );
};

export default Footer;
