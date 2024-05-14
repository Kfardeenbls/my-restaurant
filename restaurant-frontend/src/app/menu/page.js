"use client";
import LocalCafeIcon from "@mui/icons-material/LocalCafe";
import LunchDiningIcon from "@mui/icons-material/LunchDining";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import { useState } from "react";
import about1 from "../../../public/about-1.jpg";
import about2 from "../../../public/about-2.jpg";
import about3 from "../../../public/about-3.jpg";
import about4 from "../../../public/about-4.jpg";
import Image from "next/image";
import { TruncateString } from "../../../util/tTruncateString";
import { ToCamelCase } from "../../../util/CamelCase";
import Header from "../../../component/header";


const page = () => {
  const [active, setActive] = useState("break_fast");

  const foodData = [
    {
      title: "Master Chef",
      price : "$115",
      description:
        "Experience culinary perfection crafted by our renowned master chef.",
      icon: about1,
    },
    {
      title: "Quality Food",
      price : "$115",
      description:
        "Enjoy high-quality ingredients and impeccable taste in every dish we serve.",
      icon: about2,
    },
    {
      title: "Online Order",
      price : "$115",
      description:
        "Conveniently order your favorite dishes online and have them delivered to your doorstep.",
      icon: about3,
    },
    {
      title: "24/7 Service",
      price : "$115",
      description:
        "We're here to serve you round-the-clock, ensuring you enjoy delicious meals anytime, day or night.",
      icon: about4,
    },
    {
      title: "Fine Dining Experience",
      price : "$115",
      description:
        "Immerse yourself in an exquisite culinary journey with our fine dining experience.",
      icon: about1,
    },
    {
      title: "Gourmet Cuisine",
      price : "$115",
      description:
        "Indulge in our gourmet dishes crafted by our expert chefs using the finest ingredients.",
      icon: about2,
    },
    {
      title: "Outdoor Seating",
      price : "$115",
      description:
        "Enjoy your meal in the fresh air with our outdoor seating options.",
      icon: about3,
    },
    {
      title: "Live Music Events",
      price : "$115",
      description:
        "Enhance your dining experience with live music performances on select evenings.",
      icon: about4,
    },
    {
      title: "Private Dining",
      price : "$115",
      description:
        "Host intimate gatherings or business meetings in our elegant private dining rooms.",
      icon: about1,
    },
    {
      title: "Craft Cocktails",
      price : "$115",
      description:
        "Savor handcrafted cocktails made with premium spirits and fresh ingredients.",
      icon:about2,
    },
    {
      title: "Family-Friendly Atmosphere",
      price : "$115",
      description:
        "Bring the whole family and enjoy a warm and welcoming atmosphere.",
      icon: about3,
    },
    {
      title: "Weekend Brunch",
      price : "$115",
      description:
        "Start your weekend off right with our delicious brunch offerings, available every Saturday and Sunday.",
      icon: about4,
    },
  ];
  return (
    <div className="menu-section py-5">
      <Header
        text={{ heading: "food menu", subHeading: "most popular Item" }}
        Style={{alignItems : "center"}}
      />
      <div className="menu-navbar flex">
        <div
          className={`item flex ${active === "break_fast" ? "active" : ""}`}
          onClick={() => setActive("break_fast")}
        >
          <LocalCafeIcon className="icon" />
          <div>
            <p>Popular</p>
            <h6>{ToCamelCase("Break Fast")}</h6>
          </div>
        </div>
        <div
          className={`item flex ${active === "lunch" ? "active" : ""}`}
          onClick={() => setActive("lunch")}
        >
          <LunchDiningIcon className="icon" />
          <div>
            <p>Special</p>
            <h6>{ToCamelCase("lunch")}</h6>
          </div>
        </div>
        <div
          className={`item flex ${active === "dinner" ? "active" : ""}`}
          onClick={() => setActive("dinner")}
        >
          <RestaurantIcon className="icon" />
          <div>
            <p>Lovely</p>
            <h6>{ToCamelCase("dinner")}</h6>
          </div>
        </div>
      </div>
      {/* food items */}
      <div className="food-Item-List relative flex-gap  mb-4">
        {foodData.map((item, index)=>(
          <div className="item flex-gap" key={index}>
            <div className="icon relative">
              <Image src={item.icon} alt="" width={80} height={75}/>
            </div>
            <div className="content">
              <div className="title-amount justify-space-between ">
                <h5>{item.title}</h5>
                <h5 className="price">{item.price}</h5>
              </div>
              <p>{TruncateString(item.description)}</p>
              </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
