import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelopeOpen } from "@fortawesome/free-solid-svg-icons";
import { SingleSideBarHeader } from "../../../component/Footer";
import Header from "../../../component/header";
import Button from "../../../component/Button";

const Contact_Us = () => {
  return (
    <div className="contact-us-section py-2 mx-2">
      <Header
        text={{ heading: "contact us", subHeading: "contact for any quary" }}
      />
      <div className="mail-conatiner flex">
        <div className="item">
          <SingleSideBarHeader text="booking" />
          <div className="mail-info flex-gap">
            <FontAwesomeIcon icon={faEnvelopeOpen} className="mail-icon" />
            <p className="mail-id">book@example.com</p>
          </div>
        </div>
        <div className="item">
          <SingleSideBarHeader text="general" />
          <div className="mail-info flex-gap">
            <FontAwesomeIcon icon={faEnvelopeOpen} className="mail-icon" />
            <p className="mail-id">info@example.com</p>
          </div>
        </div>
        <div className="item">
          <SingleSideBarHeader text="technical" />
          <div className="mail-info flex-gap">
            <FontAwesomeIcon icon={faEnvelopeOpen} className="mail-icon" />
            <p className="mail-id">tech@example.com</p>
          </div>
        </div>
      </div>
      <div className="contact-form flex-gap py-2">
        <div className="map ">
        <iframe class="relative"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd"
                            frameborder="0" style={{minHeight: "350px", border:0 , height:"100%", width:"100%"}} allowfullscreen="" aria-hidden="false"
                            tabindex="0"></iframe>
        </div>
        <div className="form flex-gap">
        <input
              type="text"
              id="name"
              placeholder="Your Name"
              className="input"
            />
           <input
              type="email"
              id="email"
              placeholder="Your Email"
              className="input"
            />
            <input
              type="text"
              id="name"
              placeholder="Subject"
              className="input subject"
            />
             <textarea
              id="message"
              placeholder="Your Message"
              className="input textarea"
            ></textarea>
             <Button
            text="send massage"
            btnType="btn"
            width="100%"
            style={{ padding: "1.5rem 3rem", width: "100%" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Contact_Us;
