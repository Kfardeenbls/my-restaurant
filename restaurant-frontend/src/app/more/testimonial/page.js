import React from 'react'
import CardCarousel from '../../../../component/cardCarousel'
import Header from '../../../../component/header'
import team1 from "../../../../public/team/team-1.jpg";
import team2 from "../../../../public/team/team-2.jpg";
import team3 from "../../../../public/team/team-3.jpg";
import team4 from "../../../../public/team/team-4.jpg";

const Testimonial = () => {
  const cardItem = [
    {
      title: "John Doe",
      desc: "Experienced software engineer with a passion for problem-solving.",
      profession: "Software Engineer",
      thumbnail: team1,
    },
    {
      title: "Jane Smith",
      desc: "Creative graphic designer with a keen eye for detail and aesthetics.",
      profession: "Graphic Designer",
      thumbnail: team2,
    },
    {
      title: "David Brown",
      desc: "Dedicated project manager with a proven track record of successful project delivery.",
      profession: "Project Manager",
      thumbnail: team3,
    },
    {
      title: "Emily Johnson",
      desc: "Skilled marketing strategist with a focus on digital marketing and branding.",
      profession: "Marketing Strategist",
      thumbnail: team4,
    },
    {
      title: "John Doe",
      desc: "Experienced software engineer with a passion for problem-solving.",
      profession: "Software Engineer",
      thumbnail: team1,
    },
    {
      title: "Jane Smith",
      desc: "Creative graphic designer with a keen eye for detail and aesthetics.",
      profession: "Graphic Designer",
      thumbnail: team2,
    },
    {
      title: "David Brown",
      desc: "Dedicated project manager with a proven track record of successful project delivery.",
      profession: "Project Manager",
      thumbnail: team3,
    },
    {
      title: "Emily Johnson",
      desc: "Skilled marketing strategist with a focus on digital marketing and branding.",
      profession: "Marketing Strategist",
      thumbnail: team4,
    },
  ];
  return (
    <div className='testimonial-section py-2'>
      <Header
        text={{ heading: "testimonial", subHeading: "our client say!!!" }}
      />
      <CardCarousel cardItem={cardItem}/>
    </div>
  )
}

export default Testimonial