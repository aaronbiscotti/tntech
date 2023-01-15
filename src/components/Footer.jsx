import Link from 'next/link'

import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'
import React from "react";
import { AiFillInstagram, AiFillFacebook } from "react-icons/ai";

export function Footer() {
  return (
    <footer className="bg-main text-white">
      <Container>
        <div className="py-20 flex justify-between items-start">
          <div>
            <h3 className="text-[40px] mb-[10px]">Sign Up To Our Newsletter.</h3>
            <p>Be the first to hear about the latest offers</p>
          </div>

          <div className="mt-[35px] mb-[35px] flex justify-left flex-wrap gap-x-16">
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
                About
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
        </div>
        <hr className="opacity-20" />
        <div className="mt-[15px] flex justify-between text-lg">
          <div className="opacity-50 flex gap-x-3">
            <AiFillFacebook />
            <AiFillInstagram />
          </div>
          <div className="mb-10">
            <p className="opacity-50 text-xs">© 2023 TNTech. All rights reserved.</p>
          </div>
        </div>
      </Container>
    </footer>
  )
}


const information = [
  {
    name: "Terms & Conditions",
    link: "#",
  },
  {
    name: "Privacy Policy",
    link: "#",
  },
  {
    name: "Refund Policy",
    link: "#",
  },
  {
    name: "Shipping Policy",
    link: "#",
  },
];

const desktopPCs = [
  {
    name: "Build Your PC",
    link: "#",
  },
  {
    name: "Why TNTech",
    link: "#",
  },
  {
    name: "Support",
    link: "#",
  },
];

const laptops = [
  {
    name: "Starter",
    link: "#",
  },
  {
    name: "Intermediate",
    link: "#",
  },
  {
    name: "Prodigy",
    link: "#",
  },
];