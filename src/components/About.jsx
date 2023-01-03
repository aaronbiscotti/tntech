import React from "react";
import Footer from "./Footer.jsx";
import Nav from "./Nav.jsx";
import About1 from "../assets/about-image-1.png";

const About = () => {
  return (
    <div className="">
      <Nav />
      <h1 className="text-black text-2xl mb-6 mx-48">About Us</h1>

      <div className="bg-black flex justify-center items-center px-48 pt-16 gap-x-32">

        <div className="">
        <h1 className="text-4xl mb-8">A Family That Keeps On Growing</h1>
        <p>
          We always aim to please the home market, supplying great computers and
          hardware at great prices to non-corporate customers, through our large
          Melbourne CBD showroom and our online store. Shop management approach
          fosters a strong customer service focus in our staff. We prefer to
          cultivate long-term client relationships rather than achieve quick
          sales, demonstrated in the measure of our long-term success.
        </p>
        </div>

        <img className="w-1/2 h-1/2 object-cover" src={About1} alt=""></img>

      </div>
      <Footer />
    </div>
  );
};

export default About;
