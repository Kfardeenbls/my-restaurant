import RestaurantIcon from "@mui/icons-material/Restaurant";
import SupportAgentOutlinedIcon from "@mui/icons-material/SupportAgentOutlined";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import Person4Icon from "@mui/icons-material/Person4";

const HomeCardSection = ({count}) => {
  const CardData = [
    {
      title: "Master Chef",
      description:
        "Experience culinary perfection crafted by our renowned master chef.",
      icon: <Person4Icon className="icon" />,
    },
    {
      title: "Quality Food",
      description:
        "Enjoy high-quality ingredients and impeccable taste in every dish we serve.",
      icon: <RestaurantIcon className="icon" />,
    },
    {
      title: "Online Order",
      description:
        "Conveniently order your favorite dishes online and have them delivered to your doorstep.",
      icon: <AddShoppingCartOutlinedIcon className="icon" />,
    },
    {
      title: "24/7 Service",
      description:
        "We're here to serve you round-the-clock, ensuring you enjoy delicious meals anytime, day or night.",
      icon: <SupportAgentOutlinedIcon className="icon" />,
    },
    {
      title: "Master Chef",
      description:
        "Experience culinary perfection crafted by our renowned master chef.",
      icon: <Person4Icon className="icon" />,
    },
    {
      title: "Quality Food",
      description:
        "Enjoy high-quality ingredients and impeccable taste in every dish we serve.",
      icon: <RestaurantIcon className="icon" />,
    },
    {
      title: "Online Order",
      description:
        "Conveniently order your favorite dishes online and have them delivered to your doorstep.",
      icon: <AddShoppingCartOutlinedIcon className="icon" />,
    },
    {
      title: "24/7 Service",
      description:
        "We're here to serve you round-the-clock, ensuring you enjoy delicious meals anytime, day or night.",
      icon: <SupportAgentOutlinedIcon className="icon" />,
    },
  ];

  return (
    <div className="home-card-conatiner  ">
      <div className="wrapper justify-center py-5">
        {CardData.slice(0, count).map((data, index) => {
          return (
            <div className="card flex-col-gap" key={index}>
              <div>{data?.icon}</div>
              <h5 className="title">{data?.title}</h5>
              <p className="desc">{data?.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HomeCardSection;
