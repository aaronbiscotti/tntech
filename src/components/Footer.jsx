import React from "react";
import { AiFillInstagram, AiFillFacebook } from "react-icons/ai";

const information = [
  {
    name: "About Us",
    link: "#",
  },
  {
    name: "About TNTech",
    link: "#",
  },
  {
    name: "Privacy Policy",
    link: "#",
  },
  {
    name: "Search",
    link: "#",
  },
  {
    name: "Terms",
    link: "#",
  },
  {
    name: "Orders and Returns",
    link: "#",
  },
  {
    name: "Contact Us",
    link: "#",
  },
  {
    name: "Advanced Search",
    link: "#",
  },
  {
    name: "Newsletter Subscription",
    link: "#",
  },
];

const pcParts = [
  {
    name: "CPUS",
    link: "#",
  },
  {
    name: "Add On Cards",
    link: "#",
  },
  {
    name: "Hard Drives (Internal)",
    link: "#",
  },
  {
    name: "Graphic Cards",
    link: "#",
  },
  {
    name: "Keyboards / Mice",
    link: "#",
  },
  {
    name: "Cases / Power Supplies / Cooling",
    link: "#",
  },
  {
    name: "RAM (Memory)",
    link: "#",
  },
  {
    name: "Software",
    link: "#",
  },
  {
    name: "Speakers / Headsets",
    link: "#",
  },
  {
    name: "Motherboards",
    link: "#",
  },
];

const desktopPCs = [
  {
    name: "Custom PCs",
    link: "#",
  },
  {
    name: "Servers",
    link: "#",
  },
  {
    name: "MSI All-In-One PCs",
    link: "#",
  },
  {
    name: "HP/Compaq PCs",
    link: "#",
  },
  {
    name: "ASUS PCs",
    link: "#",
  },
  {
    name: "Tecs PCs",
    link: "#",
  },
];

const laptops = [
  {
    name: "Everyday Use Notebooks",
    link: "#",
  },
  {
    name: "MSI Workstation Series",
    link: "#",
  },
  {
    name: "MSI Prestige Series",
    link: "#",
  },
  {
    name: "Tablets and Pads",
    link: "#",
  },
  {
    name: "Netbooks",
    link: "#",
  },
  {
    name: "Infinity Gaming Notebooks",
    link: "#",
  },
];

const Footer = () => {
  return (
    <div className="bg-black py-12 px-48">
      <div className="">
        <h3 className="text-[40px] mb-[10px]">Sign Up To Our Newsletter.</h3>
        <p className="">Be the first to hear about the latest offers</p>
      </div>

      <div className="mt-[45px] mb-[36px] flex justify-left flex-wrap gap-x-16">
        <div>
          <h3 className="text-[12px] text-gray-400 font-bold mb-[30px]">
            Information
          </h3>
          {information.map(page => (
            <div>
              <a className="text-[12px] font-light" href={page.link}>
                {page.name}
              </a>
            </div>
          ))}
        </div>

        <div>
          <h3 className="text-[12px] text-gray-400 font-bold mb-[30px]">
            PC Parts
          </h3>
          {pcParts.map(page => (
            <div>
              <a className="text-[12px] font-light" href={page.link}>
                {page.name}
              </a>
            </div>
          ))}
        </div>

        <div>
          <h3 className="text-[12px] text-gray-400 font-bold mb-[30px]">
            Desktop PCs
          </h3>
          {desktopPCs.map(page => (
            <div>
              <a className="text-[12px] font-light" href={page.link}>
                {page.name}
              </a>
            </div>
          ))}
        </div>

        <div>
          <h3 className="text-[12px] text-gray-400 font-bold mb-[30px]">
            Laptops
          </h3>
          {laptops.map(page => (
            <div>
              <a className="text-[12px] font-light" href={page.link}>
                {page.name}
              </a>
            </div>
          ))}
        </div>
      </div>

      <hr className="opacity-20"></hr>

      <div className="mt-[15px] flex justify-between text-lg">
        <div className="opacity-50 flex gap-x-3">
          <AiFillFacebook />
          <AiFillInstagram />
        </div>

        <div>
          <p className="opacity-50 text-xs">© 2022 TNTech. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
