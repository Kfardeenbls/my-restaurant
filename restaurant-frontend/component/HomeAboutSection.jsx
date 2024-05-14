"use client"
import Image from "next/image";
import about1 from "../public/about-1.jpg";
import about2 from "../public/about-2.jpg";
import about3 from "../public/about-3.jpg";
import about4 from "../public/about-4.jpg";
import Button from "./Button";
import Header from "./header";
import { Count } from "../util/count";


const HomeAboutSection = () => {
  const ImgData = [
    { img: about1 },
    { img: about2 },
    { img: about3 },
    { img: about4 },
  ];

  return (
    <div className="container-about flex-gap py-5">
      <div className="left-container flex">
        {ImgData.map((imgItem, index) => (
            <div className="wrapper">
          <div className="img-container relative" key={index}>
            <Image
              src={imgItem.img}
              alt={`About Image ${index + 1}`}
              style={{ objectFit: "cover" }}
              layout="fill"
            />
          </div>
            </div>
        ))}
      </div>
      <div className="right-container">
        <Header text={{heading : "ABOUT US", subHeading : "Welcome to My Resturant"}}  style="start"/>
        <p className="desc mb-4">
          Host intimate gatherings or business meetings in our elegant private
          dining rooms. Savor handcrafted cocktails made with premium spirits
          and fresh ingredients.
        </p>
        <p className="desc mb-4">
          Start your weekend off right with our delicious brunch offerings,
          available every Saturday and Sunday. Savor handcrafted cocktails made
          with premium spirits and fresh ingredients.
        </p>
        <div className="flex-gap mb-4">
         <div className="count-section flex-gap">
        <Count count={20} time={500} tag="h1" clsName="count"/>
         <div >
            <p>Years of</p>
            <h6>Experience</h6>
         </div>
         </div>
        <div>
         <div className="count-section flex-gap">
         <Count count={50} tag="h1" clsName="count"/>
         <div >
            <p>Years of</p>
            <h6>Experience</h6>
         </div>
         </div>
        </div>
        </div>
        <Button text="Read More" btnType="btn" href="/" style={{padding: "1rem 3rem", marginTop:".5rem"}}/>
      </div>
    </div>
  );
};

export default HomeAboutSection;
