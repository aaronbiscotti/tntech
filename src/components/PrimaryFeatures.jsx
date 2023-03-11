import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import TextTransition, { presets } from 'react-text-transition'
import { Container } from '@/components/Container'
import Typewriter from 'typewriter-effect'
import Link from 'next/link'

export function PrimaryFeatures() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const intervalId = setInterval(() => setIndex((index) => index + 1), 3000)
    return () => clearTimeout(intervalId)
  }, [])

  return (
    <section
      id="features"
      aria-labelledby="features-title"
      className="relative overflow-hidden bg-[#ADBDD4] bg-cover bg-right-bottom bg-no-repeat pt-20 pb-28 lg:py-[170px]"
    >
      <Container className="relative">
        <div className="mb-20 max-w-2xl md:text-left xl:max-w-none">
          <h2
            id="features-title"
            className="max-w-xl font-[Anton] text-4xl text-main sm:text-5xl md:text-7xl"
          >
            EVERYTHING YOU NEED TO RUN
          </h2>
          <Typewriter
            options={{
              strings: [
                'Your favorite game',
                'Cyberpunk 2077',
                'Grand Theft Auto V',
                'Overwatch',
                'Elden Ring',
                'Call of Duty',
                'Fortnite',
              ],
              autoStart: true,
              loop: true,
              wrapperClassName:
                'text-3xl uppercase text-main sm:text-5xl md:text-7xl max-w-xl font-[Anton]',
              cursorClassName:
                'text-3xl uppercase text-main sm:text-5xl md:text-7xl max-w-xl font-[Anton]',
            }}
          />
          <p className="mt-5 max-w-md text-lg text-main">
            Well everything you need if you aren’t that picky about minor
            details.
          </p>
          <a href="#how-it-works">
            <button className="mt-10 flex items-center justify-center space-x-5 font-display text-lg font-semibold text-main duration-100 ease-in-out hover:translate-y-2">
              <img src="/arrow.svg" className="h-12" />
              <h1>Learn more</h1>
            </button>
          </a>
        </div>
      </Container>

      {/* <Container>
        <Image src="/background.png" layout="fill" objectFit="contain" />
      </Container> */}
    </section>
  )
}
