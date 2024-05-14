"use client";
import {useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import logo from "../public/logo.png";
import hero_img from "../public/hero-img.png";
import Button from "./Button";

const Navbar = () => {
  const [activeHref, setActiveHref] = useState(null);
  const Links = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Service", href: "/service" },
    { label: "Menu", href: "/menu" },
    {
      label: "More",
      dropdown: [
        { label: "Booking", href: "/more/booking" },
        { label: "Our Team", href: "/more/team" },
        { label: "Testimonial", href: "/more/testimonial" },
      ],
    },
    { label: "Contact Us", href: "/contact" },
  ];
  const pathname = usePathname();

  const pathSegments = pathname.split("/").filter((segment) => segment !== "");

  const handleClick = (link) => {
    setActiveHref(link);
  };

  return (
    <div className="container-xxl relative">
      <nav className="navbar justify-space-between mlr-4 px-3">
        <Link href="/" className="brand-link">
          <Image src={logo} alt="" height={100} width={100} style={{objectFit:"contain"}} />
        </Link>
        <button
          className="navbar-toggler d-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span className="menu-icon"></span>
        </button>
        <div
          className="collapse-menu justify-space-between align-center"
          id="navbarCollapse"
        >
          <div className="nav-links justify-align-center">
            {Links.map((link, index) => (
              <div key={index}>
                {link?.dropdown ? (
                  <div
                    className={`nav-link  ${
                      !link.href ? "dropdown" : ""
                    } relative`}
                  >
                    {link?.href ? (
                      <Link
                        href={`${link.href}`}
                        className={`nav-link  ${
                          activeHref.href === link.href ? "active" : ""
                        }`}
                        onClick={() => handleClick(link)}
                      >
                        {link.label}
                      </Link>
                    ) : (
                      <div className="nav-dropdown-link">{link.label}</div>
                    )}
                    <div
                      className="dropdown-content absolute d-none"
                      id="dropdownContent"
                    >
                      {link?.dropdown.map((subLink, subIndex) => (
                        <Link
                          key={subIndex}
                          href={subLink.href}
                          onClick={() => handleClick(subLink)}
                          className={`nav-link dropdown-item ${
                            activeHref?.href === subLink.href ? "active" : ""
                          }`}
                        >
                          {subLink.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div>
                    {link.href ? (
                      <Link
                        href={`${link.href}`}
                        className={`nav-link ${
                          activeHref?.href === link.href ? "active" : ""
                        }`}
                        onClick={() => handleClick(link)}
                      >
                        {link.label}
                      </Link>
                    ) : (
                      <div className="nav-link">{link.label}</div>
                    )}
                  </div>
                )}
              </div>
            ))}
            <Button text="Book A Table" btnType="Link" href="/more/booking" style={{padding: "0.5rem 1.5rem", marginLeft: "25px"}}/>
          </div>
        </div>
      </nav>
      {pathname === "/" ? (
        <div className="hero-container flex-gap my-5 p-4">
          <div className="left-container pb-4 ">
          <h1 class="hero-title animated slideInLeft">
            Enjoy Our
            <br />
            Delicious Meal
          </h1>
          <p class="desc animated slideInLeft mb-4 pb-2">
            Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
            diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet
            lorem sit clita duo justo magna dolore erat amet
          </p>
          <Button text="Book A Table" btnType="Link" href="/book" style={{padding: "1rem 2rem"}}/>
          </div>
          <div className="right-container relative">
           <Image src={hero_img} alt="hero_img" fill className="img"/>
          </div>
        </div>
      ) : (
        <div className="hero-container text-center my-5 pb-4">
          <h1 className="hero-title mb-3 animated slideInDown">
            {activeHref?.label}
          </h1>
          <div className="navigated-path pb-4 my-5 justify-align-center">
          Taste Philippines
            {pathSegments.map((segment, index) => (
              <>
                <span style={{ color: "rgba(255, 255, 255, .5)" }}>/</span>
                <li key={index} className="segment">
                  {segment}
                </li>
              </>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
