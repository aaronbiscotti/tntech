import { useId, useState } from 'react'
import Image from 'next/image'
import { Tab } from '@headlessui/react'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import iteration1 from '@/images/screenshots/iteration1.png'
import iteration2 from '@/images/screenshots/iteration2.png'
import iteration3 from '@/images/screenshots/iteration3.png'
import Link from 'next/link'

const features = [
  {
    name: 'Starter',
    nameLC: 'starter',
    link: '/build-your-pc/starter',
    summary: 'Cutting-edge performance.',
    description:
      'Designed for those who are trying out. These computers prioritize powerful CPU, GPU, and sufficient memory and storage to ensure fast and responsive gameplay.',
    image: iteration1,
    icon: function ReportingIcon() {
      let id = useId()
      return (
        <>
          <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-flame" width="28" height="28" viewBox="0 0 24 24" strokeWidth="2" stroke="white" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M12 12c2 -2.96 0 -7 -1 -8c0 3.038 -1.773 4.741 -3 6c-1.226 1.26 -2 3.24 -2 5a6 6 0 1 0 12 0c0 -1.532 -1.056 -3.94 -2 -5c-1.786 3 -2.791 3 -4 2z"></path>
          </svg>
        </>
      )
    },
    perks: [
      'Entry-level processors and graphics cards',
      'Adequate memory and storage',
      'User-friendly interface',
      'Easy to upgrade',
      'Affordable price point',
    ],
    background: "bg-fire"
  },
  {
    name: 'Casual',
    nameLC: 'casual',
    link: '/build-your-pc/casual',
    summary:
      'Next-generation graphics.',
    description:
      'Machines paired with dedicated graphics cards capable of running games at the highest frame rates and resolutions for an immersive experience.',
    image: iteration2,
    icon: function InventoryIcon() {
      return (
        <>
          <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-droplet" width="28" height="28" viewBox="0 0 24 24" strokeWidth="2" stroke="white" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M6.8 11a6 6 0 1 0 10.396 0l-5.197 -8l-5.2 8z"></path>
          </svg>
        </>
      )
    },
    perks: [
      'Mid-level processors and graphics cards',
      'Adequate memory and storage',
      'User-friendly interface',
      'Easy to upgrade',
      'Affordable price point',
    ],
    background: "bg-water"
  },
  {
    name: 'Prodigy',
    nameLC: 'prodigy',
    link: '/build-your-pc/prodigy',
    summary:
      'Wide range expandability',
    description:
      'The best of the best. High-quality prioritization of expansion slots and ports for adding additional components such as additional storage, graphics cards, or extra RAM.',
    image: iteration3,
    icon: function ContactsIcon() {
      return (
        <>
          <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-mountain" width="28" height="28" viewBox="0 0 24 24" strokeWidth="2" stroke="white" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M3 20h18l-6.921 -14.612a2.3 2.3 0 0 0 -4.158 0l-6.921 14.612z"></path>
            <path d="M7.5 11l2 2.5l2.5 -2.5l2 3l2.5 -2"></path>
          </svg>
        </>
      )
    },
    perks: [
      'High-performance processors and graphics cards',
      'High-end memory and storage',
      'Advanced cooling systems',
      'Expandable hardware options',
      'Premium price point',
    ],
    background: "bg-earth"
  },
]

function Feature({ feature, isActive, className, ...props }) {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  }

  return (
    <div
      className="hover:opacity-75 duration-300 ease-in-out"
      onClick={handleClick}
      {...props}
    >
      <div
      >
        <div className="h-[40px] flex justify-center items-center bg-black rounded-lg w-9">
          <feature.icon />
        </div>
      </div>
      <h3
        className="mt-6 text-sm font-medium"
      >
        {feature.name}
      </h3>
      <p className="mt-2 font-[Anton] uppercase tracking-wider text-5xl">
        {feature.summary}
      </p>
      <p className="mt-4 text-md">{feature.description}</p>
      <Link href={feature.link}>
      <div className="w-full flex justify-center bg-gray-900 text-white font-display mt-5 rounded-md cursor-pointer py-3">Explore {feature.nameLC} collection</div>
      </Link>
      <div className="rounded-xl cursor-pointer hover:opacity-100">
        <Image
          src={feature.image}
          alt=""
          className="object-contain"
        />
      </div>
    </div>
  )
}

function FeaturesMobile() {
  return (
    <div className="-mx-4 mt-20 space-y-10 overflow-hidden px-4 sm:-mx-6 sm:px-6 lg:hidden">
      {features.map((feature) => (
        <div key={feature.name}>
          <Feature feature={feature} className={`p-5 rounded-lg ${feature.background} mx-auto max-w-2xl`} isActive />
          <hr></hr>
        </div>
      ))}
    </div>
  )
}

function FeaturesDesktop() {
  return (
    <Tab.Group as="div" className="hidden lg:mt-10 lg:block">
      {({ selectedIndex }) => (
        <>
          <Tab.List className="grid grid-cols-3 gap-x-2">
            {features.map((feature, featureIndex) => (
              <div key={feature.name} className={`p-5 rounded-lg ${feature.background}`}>
              <Feature
                feature={{
                  ...feature,
                  name: (
                    <Tab className="outline-none">
                      <span className="bg-black inset-0 outline-none" />
                      {feature.name}
                    </Tab>
                  ),
                }}
                isActive={featureIndex === selectedIndex}
                  className="relative"
                />
                  <Tab.Panel
                    static
                    className={clsx(
                      'px-5 transition duration-500 ease-in-out [&:not(:hover-visible)]:hover:outline-none hover:opacity-100',
                      {
                        'opacity-60': featureIndex !== selectedIndex,
                      }
                    )}
                    aria-hidden={featureIndex !== selectedIndex}
                >
                </Tab.Panel>
              </div>
            ))}
          </Tab.List>
        </>
      )}
    </Tab.Group>
  )
}

export function SecondaryFeatures() {
  return (
    <section
      id="secondary-features"
      aria-labelledby="secondary-features-title"
      className="pt-20 pb-14 sm:pb-20 sm:pt-32 lg:pb-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl md:text-center">
          <h2
            id="secondary-features-title"
            className="font-[Anton] text-6xl uppercase text-main sm:text-6xl"
          >
            Change the way you game.
          </h2>
          <p className="mt-4 text-lg tracking-tight text-main">
            Elevate your gaming experience with TNTech. From performance to energy efficiency, choose from three tiers of complexity to best suit your gaming needs.
          </p>
        </div>
        <FeaturesMobile />
        <FeaturesDesktop />
      </Container>
    </section>
  )
}