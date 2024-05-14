import Image from "next/image";
import Button from "../../../../component/Button";
import Header from "../../../../component/header";
import bookingImg from "../../../../public/booking.jpg";
import { PlayBtn } from "../../../../component/PlayBtn";

const Booking = () => {
  return (
    <div className="booking-section flex my-2  ">
      <div className="media-section relative">
        <Image src={bookingImg} alt="" fill style={{objectFit:"cover"}}/>
        <div className="overlay">
        <PlayBtn/>
        </div>
      </div>
      <div className="input-section p-3">
        <Header
          text={{ heading: "reservation", subHeading: "book a table online" }}
          bar="none"
          subColor="#f1f8ff"
          style="start"
        />
        <div className="input-fields flex-gap">
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
          <input type="datetime-local" id="datetime" className="input" />
          <select id="options" className="input">
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
            <textarea
              id="message"
              placeholder="Your Message"
              className="input textarea"
            ></textarea>
          <Button
            text="Book Now"
            btnType="btn"
            width="100%"
            style={{ padding: "1rem 3rem", width: "100%" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Booking;
