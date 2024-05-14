import { CartIcon } from "@/icon/CartIcon";
import { ChefIcons } from "@/icon/chefIcons";
import { CustomerSupportIcon } from "@/icon/customerSupportIcon";
import { ForkIcon } from "@/icon/forkIcon";

export const Card = () => {
  return (CardData = 
    [
    {
      title: "Master Chef",
      description:
        "Experience culinary perfection crafted by our renowned master chef.",
      icon: <ChefIcons/>,
    },
    {
      title: "Quality Food",
      description:
        "Enjoy high-quality ingredients and impeccable taste in every dish we serve.",
      icon: <ForkIcon/>,
    },
    {
      title: "Online Order",
      description:
        "Conveniently order your favorite dishes online and have them delivered to your doorstep.",
      icon: <CartIcon/>,
    },
    {
      title: "24/7 Service",
      description:
        "We're here to serve you round-the-clock, ensuring you enjoy delicious meals anytime, day or night.",
      icon: <CustomerSupportIcon/>,
    },
    {
      title: "Fine Dining Experience",
      description:
        "Immerse yourself in an exquisite culinary journey with our fine dining experience.",
      icon: "fine-dining-icon.png",
    },
    {
      title: "Gourmet Cuisine",
      description:
        "Indulge in our gourmet dishes crafted by our expert chefs using the finest ingredients.",
      icon: "gourmet-cuisine-icon.png",
    },
    {
      title: "Outdoor Seating",
      description:
        "Enjoy your meal in the fresh air with our outdoor seating options.",
      icon: "outdoor-seating-icon.png",
    },
    {
      title: "Live Music Events",
      description:
        "Enhance your dining experience with live music performances on select evenings.",
      icon: "live-music-icon.png",
    },
    {
      title: "Private Dining",
      description:
        "Host intimate gatherings or business meetings in our elegant private dining rooms.",
      icon: "private-dining-icon.png",
    },
    {
      title: "Craft Cocktails",
      description:
        "Savor handcrafted cocktails made with premium spirits and fresh ingredients.",
      icon: "craft-cocktails-icon.png",
    },
    {
      title: "Family-Friendly Atmosphere",
      description:
        "Bring the whole family and enjoy a warm and welcoming atmosphere.",
      icon: "family-friendly-icon.png",
    },
    {
      title: "Weekend Brunch",
      description:
        "Start your weekend off right with our delicious brunch offerings, available every Saturday and Sunday.",
      icon: "weekend-brunch-icon.png",
    },
  ]);
};
