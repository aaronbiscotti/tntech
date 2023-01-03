import React from "react";
import Footer from "./Footer.jsx";
import Nav from "./Nav.jsx";
import About1 from "../assets/about-1.png";
import About2 from "../assets/about-2.png";
import About3 from "../assets/about-3.png";
import About4 from "../assets/about-4.png";
import About5 from "../assets/about-5.png";

const about = [
  {
    heading: "A Family That Keeps On Growing",
    body: "We always aim to please the home market, supplying great computers and hardware at great prices to non-corporate customers, through our large Melbourne CBD showroom and our online store.\n\nShop management approach fosters a strong customer service focus in our staff. We prefer to cultivate long-term client relationships rather than achieve quick sales, demonstrated in the measure of our long-term success.",
    image: About1,
  },
  {
    heading: "shop.com",
    body: "Shop is a proudly Australian owned, Melbourne based supplier of I.T. goods and services, operating since 1991. Our client base encompasses individuals, small business, corporate and government organisations. We provide complete business IT solutions, centred on high quality hardware and exceptional customer service.",
    image: About2,
  },
  {
    heading: "You're In Safe Hands",
    body: "Experience a 40% boost in computing from last generation. MSI Desktop equips the 10th Gen. Intel® Core™ i7 processor with the upmost computing power to bring you an unparalleled gaming experience.\n\n*Performance compared to i7-9700. Specs varies by model.",
    image: About3,
  },
  {
    heading: "The Highest Quality of Products",
    body: "We guarantee the highest quality of the products we sell. Several decades of successful operation and millions of happy customers let us feel certain about that. Besides, all items we sell pass thorough quality control, so no characteristics mismatch can escape the eye of our professionals.",
    image: About4,
  },
  {
    heading: "Delivery to All Regions",
    body: "We deliver our goods all across Australia. No matter where you live, your order will be shipped in time and delivered right to your door or to any other location you have stated. The packages are handled with utmost care, so the ordered products will be handed to you safe and sound, just like you expect them to be.",
    image: About5,
  },
];

const testimonials = [];

const values = [
  {
    icon: "",
    heading: "Product Support",
    body: "Up to 3 years on-site warranty available for your peace of mind.",
  },
  {
    icon: "",
    heading: "Personal Account",
    body: "With big discounts, free delivery and a dedicated support specialist.",
  },
  {
    icon: "",
    heading: "Amazing Savings",
    body: "Up to 70% off new Products, you can be sure of the best price.",
  },
];
const About = () => {
  return (
    <div className="">
      <Nav />
      <h1 className="text-black text-2xl mb-6 mx-48">About Us</h1>

      {about.map((info, index) => {
        if (index % 2 === 0) {
          return (
            <div className="bg-black flex justify-center items-center px-48 py-16 gap-x-32">
              <div className="order-0">
                <h1 className="text-4xl mb-8">{info.heading}</h1>
                <p>{info.body}</p>
              </div>
              <img
                className="w-1/2 h-1/2 object-cover"
                src={info.image}
                alt=""
              ></img>
            </div>
          );
        } else {
          return (
            <div className="bg-white text-black flex justify-center items-center px-48 py-16 gap-x-32">
              <img
                className="w-1/2 h-1/2 object-cover"
                src={info.image}
                alt=""
              ></img>
              <div className="order-0">
                <h1 className="text-4xl mb-8">{info.heading}</h1>
                <p>{info.body}</p>
              </div>
            </div>
          );
        }
      })}

      <div className="bg-[#F5F7FF] flex justify-center px-48 py-16 gap-x-32">
        {values.map(value => (
          <div className="text-black text-center">
            <h3 className="font-bold">{value.heading}</h3>
            <p>{value.body}</p>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default About;
