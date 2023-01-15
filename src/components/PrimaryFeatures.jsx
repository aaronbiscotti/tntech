import React, { useEffect, useState } from "react"
import Image from "next/image"
import TextTransition, { presets } from "react-text-transition"
import { Container } from '@/components/Container'
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
      className="relative overflow-hidden bg-no-repeat bg-cover pt-20 pb-28 sm:py-[170px] bg-background bg-right-bottom" 
    >
      <Container className="relative">
        <div className="max-w-2xl mt-40 mb-20 md:text-left xl:max-w-none">
          <h2
            id="features-title"
            className="text-4xl text-white sm:text-5xl md:text-7xl max-w-xl font-[Anton]"
          >
            EVERYTHING YOU NEED TO RUN <TextTransition springConfig={presets.stiff}>{TEXTS[index % TEXTS.length]}</TextTransition>
          </h2>
          <p className="text-lg mt-5 max-w-md text-white">
            Well everything you need if you aren’t that picky about minor
            details.
          </p>
          <button className="flex justify-center items-center space-x-5 text-white text-xl mt-10 hover:translate-y-2 duration-100 ease-in-out;">
            <img src="/arrow.svg" />
            <h1>EXPLORE MORE</h1>
          </button>
        </div>
        <div className="absolute top-1/3 left-1/3 translate-x-[10%] -translate-y-[42%]">
          <img src="/hero_image.png" className="h-full" />
        </div>
      </Container>
    </section>
  )
}
