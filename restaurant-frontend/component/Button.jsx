import Link from "next/link";
import React from "react";

const Button = ({ text, style, btnType , href, width}) => {

  return (
    <div style={{width : width}}>
      {btnType === "btn" ? (
        <button className="primery-btn" style={style}>
          {text}
        </button>
      ) : (
        <Link href={`${href}`} className="primery-btn" style={style}>
          {text}
        </Link>
      )}
    </div>
  );
};

export default Button;
