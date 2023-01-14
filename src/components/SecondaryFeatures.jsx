import { useId } from 'react'
import Image from 'next/image'
import { Tab } from '@headlessui/react'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import iteration1 from '@/images/screenshots/iteration1.png'
import iteration2 from '@/images/screenshots/iteration2.png'
import iteration3 from '@/images/screenshots/iteration3.png'
import fire from '@/images/fire.svg'
import water from '@/images/water.svg'
import earth from '@/images/earth.svg'

const features = [
  {
    name: 'Fire',
    summary: 'Cutting-edge performance.',
    description:
      'These computers prioritize powerful CPU, GPU, and sufficient memory and storage to ensure fast and responsive gameplay.',
    image: iteration1,
    icon: function ReportingIcon() {
      let id = useId()
      return (
        <>
          <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-flame" width="28" height="28" viewBox="0 0 24 24" stroke-width="2" stroke="white" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M12 12c2 -2.96 0 -7 -1 -8c0 3.038 -1.773 4.741 -3 6c-1.226 1.26 -2 3.24 -2 5a6 6 0 1 0 12 0c0 -1.532 -1.056 -3.94 -2 -5c-1.786 3 -2.791 3 -4 2z"></path>
          </svg>
        </>
      )
    },
  },
  {
    name: 'Water',
    summary:
      'Next-generation graphics.',
    description:
      'Machines paired with dedicated graphics cards capable of running games at the highest frame rates and resolutions for an immersive experience.',
    image: iteration2,
    icon: function InventoryIcon() {
      return (
        <>
          <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-droplet" width="28" height="28" viewBox="0 0 24 24" stroke-width="2" stroke="white" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M6.8 11a6 6 0 1 0 10.396 0l-5.197 -8l-5.2 8z"></path>
          </svg>
        </>
      )
    },
  },
  {
    name: 'Earth',
    summary:
      'Wide range expandability',
    description:
      'High-quality prioritization of expansion slots and ports for adding additional components such as additional storage, graphics cards, or extra RAM.',
    image: iteration3,
    icon: function ContactsIcon() {
      return (
        <>
          <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-mountain" width="28" height="28" viewBox="0 0 24 24" stroke-width="2" stroke="white" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M3 20h18l-6.921 -14.612a2.3 2.3 0 0 0 -4.158 0l-6.921 14.612z"></path>
            <path d="M7.5 11l2 2.5l2.5 -2.5l2 3l2.5 -2"></path>
          </svg>
        </>
      )
    },
  },
]

function Feature({ feature, isActive, className, ...props }) {
  return (
    <div
      className={clsx(className, { 'opacity-75 hover:opacity-100': !isActive })}
      {...props}
    >
      <div
        className={clsx('w-9 rounded-lg', {
          'bg-[#222646]': isActive,
          'bg-slate-500': !isActive,
        })}
      >
        <div className="h-[40px] flex justify-center items-center">
          <feature.icon />
        </div>
      </div>
      <h3
        className={clsx('mt-6 text-sm font-medium', {
          'text-red-600': isActive,
          'text-slate-600': !isActive,
        })}
      >
        {feature.name}
      </h3>
      <p className="mt-2 font-display text-xl text-slate-900">
        {feature.summary}
      </p>
      <p className="mt-4 text-sm text-slate-600">{feature.description}</p>
    </div>
  )
}

function FeaturesMobile() {
  return (
    <div className="-mx-4 mt-20 space-y-10 overflow-hidden px-4 sm:-mx-6 sm:px-6 lg:hidden">
      {features.map((feature) => (
        <div key={feature.name}>
          <Feature feature={feature} className="mx-auto max-w-2xl" isActive />
          <div className="relative mt-10 pb-10">
            <div className="absolute -inset-x-4 bottom-0 top-8 bg-slate-200 sm:-inset-x-6" />
            <div className="relative mx-auto aspect-[844/428] w-[52.75rem] overflow-hidden rounded-xl bg-white shadow-lg shadow-slate-900/5 ring-1 ring-slate-500/10">
              <Image
                src={feature.image}
                alt=""
                layout="fill"
                sizes="52.75rem"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

function FeaturesDesktop() {
  return (
    <Tab.Group as="div" className="hidden lg:mt-20 lg:block">
      {({ selectedIndex }) => (
        <>
          <Tab.List className="grid grid-cols-3 gap-x-8">
            {features.map((feature, featureIndex) => (
              <Feature
                key={feature.name}
                feature={{
                  ...feature,
                  name: (
                    <Tab className="[&:not(:focus-visible)]:focus:outline-none">
                      <span className="absolute inset-0" />
                      {feature.name}
                    </Tab>
                  ),
                }}
                isActive={featureIndex === selectedIndex}
                className="relative"
              />
            ))}
          </Tab.List>
          <Tab.Panels className="relative mt-20 overflow-hidden rounded-4xl bg-slate-200 px-14 py-16 xl:px-16">
            <div className="-mx-5 flex">
              {features.map((feature, featureIndex) => (
                <Tab.Panel
                  static
                  key={feature.name}
                  className={clsx(
                    'px-5 transition duration-500 ease-in-out [&:not(:focus-visible)]:focus:outline-none',
                    {
                      'opacity-60': featureIndex !== selectedIndex,
                    }
                  )}
                  style={{ transform: `translateX(-${selectedIndex * 100}%)` }}
                  aria-hidden={featureIndex !== selectedIndex}
                >
                  <div className="rounded-xl">
                    <Image
                      src={feature.image}
                      alt=""
                      className="object-contain"
                    />
                  </div>
                </Tab.Panel>
              ))}
            </div>
            <div className="pointer-events-none absolute inset-0 rounded-4xl ring-1 ring-inset ring-slate-900/10" />
          </Tab.Panels>
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
            className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl"
          >
            Change the way you game.
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            Elevate your gaming experience with TNTech. From performance to energy efficiency, we have a wide range of options to choose from.
          </p>
        </div>
        <FeaturesMobile />
        <FeaturesDesktop />
      </Container>
    </section>
  )
}
