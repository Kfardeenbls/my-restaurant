import { ToCamelCase } from "../util/CamelCase";

const Header = ({ text , style, bar, subColor }) => {
  return (
    <div className="header-section flex mb-4 fadeInUp" style={{alignItems : style}}>
      <div className="upper flex-gap">
        {bar ? "" : <span></span>}
        <h5 className="heading">{ToCamelCase(text.heading)}</h5>
        <span></span>
      </div>
      <h1 className="sub-heading" style={{color : subColor}}>{ToCamelCase(text.subHeading)}</h1>
    </div>
  );
};

export default Header;
