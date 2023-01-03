import React from "react";
import HomeNav from "./HomeNav.jsx";
import Footer from "../Footer.jsx";
import { FaBeer } from "react-icons/fa";
import PC1 from "../../assets/home-pc-1.png";
import PC2 from "../../assets/home-pc-2.png";
import PC3 from "../../assets/home-pc-3.jpeg";

const Home = () => {
  return (
    <div className="bg-[#460B80]">
      <HomeNav />

      <div className="mx-48 mt-12 mb-36">
        <div className="flex justify-center items-center gap-x-10">
          <div className="w-72">
            <h1 className="text-6xl mb-3">MSI MPG Trident 3</h1>
            <p className="text-sm mb-12">
              MSI MPG Trident 3 10SC-005AU Intel i7 10700F, 2060 SUPER, 16GB
              RAM, 512GB SSD, 2TB HDD, Windows 11 Home
            </p>

            <div className="flex justify-center gap-x-2">
              <FaBeer />
              <p className="font-normal text-md">EXPLORE MORE</p>
            </div>
          </div>

          <div>
            <img
              className="scale-150"
              src={PC1}
              alt="MSI MPG Trident 3; futuristic looking purple PC."
            ></img>
          </div>
        </div>

        <div className="mt-48 flex justify-center items-center gap-x-24 bg-[#875FDB] p-16 rounded-[44px]">
          <div>
            <img
              className="scale-[2]"
              src={PC2}
              alt="Two futuristic looking PCs."
            ></img>
          </div>

          <div className="w-90">
            <h1 className="text-4xl mb-3">Who are we?</h1>
            <p className="text-sm mb-12">
              Welcome to TNTech, where gaming is our passion and building
              top-of-the-line gaming computers is our expertise. Our team know
              firsthand what it takes to deliver the best gaming experience-
              from selecting the most powerful processors and graphics cards, to
              choosing the perfect components for optimal cooling and speed,
              we’ve got you covered for your budget.
            </p>
          </div>
        </div>

        <div className="mt-24">
          <div className="">
            <h1 className="text-4xl mb-3">Why buy from TNTech?</h1>
            <p className="text-sm mb-12 w-1/2 ">
              Welcome to TNTech, where gaming is our passion and building
              top-of-the-line gaming computers is our expertise. Our team know
              firsthand what it takes to deliver the best gaming experience-
              from selecting the most powerful processors and graphics cards, to
              choosing the perfect components for optimal cooling and speed,
              we’ve got you covered for your budget.
            </p>
          </div>

          <img
            className="rounded-[17px] shadow-black shadow-2xl h-96 w-full object-cover"
            src={PC3}
            alt=""
          ></img>
        </div>

        <div>
          <h1 className="mt-24 text-4xl mb-3">Hear what our clients say</h1>
          <p className="text-sm w-2/5">
            Don’t just take our word for it. Here are a few (of many) reviews of
            GatherPlace.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
