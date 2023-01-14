import React, { useEffect, useState } from "react"
import TextTransition, { presets } from "react-text-transition"
import { Container } from '@/components/Container'

const TEXTS = [
  "LEAGUE OF LEGENDS",
  "GRAND THEFT AUTO V",
  "OVERWATCH",
  "SPIDER-MAN"
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
      className="relative pt-20 pb-28 sm:py-[170px] bg-[#222646]"
    >
      {/* <div className="absolute top-1/2 left-1/2 -translate-x-[44%] -translate-y-[42%]">
        <Image
          src={backgroundImage}
          alt=""
          width={2245}
          height={1636}
          layout="fixed"
          unoptimized
        />
      </div> */}
      <Container className="relative">
        <div className="max-w-2xl mt-20 md:text-left xl:max-w-none">
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
