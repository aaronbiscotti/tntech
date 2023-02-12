import React, { useEffect, useState } from "react"
import Image from "next/image"
import TextTransition, { presets } from "react-text-transition"
import { Container } from '@/components/Container'
import Typewriter from "typewriter-effect"
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
            className="text-3xl text-main sm:text-5xl md:text-7xl max-w-xl font-[Anton]"
          >
            EVERYTHING YOU NEED TO RUN
          </h2>
          <Typewriter
            options={{
              strings: ['Your favorite game', 'Cyberpunk 2077', 'Grand Theft Auto V', 'Overwatch', 'Elden Ring', 'Call of Duty', 'Fortnite'],
              autoStart: true,
              loop: true,
              wrapperClassName: 'text-3xl uppercase text-main sm:text-5xl md:text-7xl max-w-xl font-[Anton]',
              cursorClassName: 'text-3xl uppercase text-main sm:text-5xl md:text-7xl max-w-xl font-[Anton]'
            }}
          />
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
      </Container>
    </section>
  )
}
