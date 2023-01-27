import React, { useEffect, useState } from "react"
import Image from "next/image"
import TextTransition, { presets } from "react-text-transition"
import { Container } from '@/components/Container'
import Link from "next/link"
const TEXTS = [
  "YOUR FAVORITE GAME",
  "CYBERPUNK 2077",
  "GRAND THEFT AUTO V",
  "OVERWATCH",
  "ELDEN RING",
  "CALL OF DUTY",
  "FORTNITE",
]

export function PrimaryFeatures() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() =>
      setIndex(index => index + 1),
      3000
    );
    return () => clearTimeout(intervalId);
  }, []);


  return (
    <section
      id="features"
      aria-labelledby="features-title"
      className="relative overflow-hidden bg-no-repeat bg-cover pt-20 pb-28 lg:py-[170px] bg-background bg-right-bottom" 
    >
      <Container className="relative">
        <div className="max-w-2xl mt-40 mb-20 md:text-left xl:max-w-none">
          <h2
            id="features-title"
            className="text-4xl text-main sm:text-5xl md:text-7xl max-w-xl font-[Anton]"
          >
            EVERYTHING YOU NEED TO RUN <TextTransition springConfig={presets.stiff} inline>{TEXTS[index % TEXTS.length]}</TextTransition>
          </h2>
          <p className="text-lg mt-5 max-w-md text-main">
            Well everything you need if you aren’t that picky about minor
            details.
          </p>
          <a href="#how-it-works">
            <button className="flex font-display font-semibold justify-center items-center space-x-5 text-main text-lg mt-10 hover:translate-y-2 duration-100 ease-in-out">
              <img src="/arrow.svg" className="h-12" />
              <h1>Learn more</h1>
            </button>
          </a>
        </div>
        {/* <div className="absolute top-1/3 left-1/3 translate-x-[10%] -translate-y-[42%]">
          <img src="/hero_image.png" className="h-full" />
        </div> */}
      </Container>
    </section>
  )
}
