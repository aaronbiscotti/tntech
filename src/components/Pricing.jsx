import { ButtonLink } from '@/components/Button'
import { Container } from '@/components/Container'
import { GridPattern } from '@/components/GridPattern'

export function Pricing() {
  return (
    <section
      id="pricing"
      aria-labelledby="pricing-title"
      className="scroll-mt-14 pt-16 pb-8 sm:scroll-mt-32 sm:pt-20 sm:pb-10 lg:pt-32 lg:pb-16"
    >
      <Container>
        <p className="mt-8 uppercase font-title text-5xl text-main sm:text-6xl">
          Change the way you game.
        </p>
        <p className="mt-4 max-w-xl text-lg tracking-tight text-main">
          Elevate your gaming experience with TNTech. From performance to energy efficiency, we have a wide range of options to choose from.
        </p>
      </Container>
      <div className="mx-auto mt-16 max-w-7xl lg:px-6">
        <div className="grid bg-slate-50 sm:px-6 sm:pb-16 md:grid-cols-3 md:rounded-6xl md:px-8 md:pt-16 lg:p-20">
          <div className="flex flex-col px-4 py-16 sm:px-10 md:py-12 lg:px-12">
            <h3 className="mt-7 text-lg font-semibold tracking-tight text-main">
              Noob
            </h3>
            <p className="mt-2 text-lg tracking-tight text-slate-600">
              The perfect starting point if you’re on a budget.
            </p>
            <p className="-order-1 mb-5 text-main">
              Starting from
            </p>
            <p className="-order-1 flex font-display font-bold">
              <span className="text-[1.75rem] leading-tight text-main">
                $
              </span>
              <span className="ml-1 mt-1 text-7xl tracking-tight text-main">
                1,225
              </span>
            </p>
            <div className="order-1 mt-8">
              <ul className="-my-2 divide-y divide-slate-200 text-base tracking-tight text-main">
                {[
                  'Entry-level processors and graphics cards',
                  'Adequate memory and storage',
                  'User-friendly interface',
                  'Easy to upgrade',
                  'Affordable price point',
                ].map((feature) => (
                  <li key={feature} className="flex py-2">
                    <svg
                      aria-hidden="true"
                      className="h-8 w-8 flex-none fill-slate-600"
                    >
                      <path d="M11.83 15.795a1 1 0 0 0-1.66 1.114l1.66-1.114Zm9.861-4.072a1 1 0 1 0-1.382-1.446l1.382 1.446ZM14.115 21l-.83.557a1 1 0 0 0 1.784-.258L14.115 21Zm.954.3c1.29-4.11 3.539-6.63 6.622-9.577l-1.382-1.446c-3.152 3.013-5.704 5.82-7.148 10.424l1.908.598Zm-4.9-4.391 3.115 4.648 1.661-1.114-3.114-4.648-1.662 1.114Z" />
                    </svg>
                    <span className="ml-4">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <ButtonLink
              href="/build-your-pc"
              color="slate"
              className="mt-8 bg-main"
              aria-label="Start building with the beginner plan"
            >
              Start building
            </ButtonLink>
          </div>
          <div className="relative bg-main py-16 px-4 sm:rounded-5xl sm:py-12 sm:px-10 sm:shadow-lg lg:px-12">
            <div className="absolute inset-0 text-white/10 [mask-image:linear-gradient(white,transparent)]">
              <GridPattern x="50%" y="50%" />
            </div>
            <div className="relative flex flex-col">
              <h3 className="mt-7 text-lg font-semibold tracking-tight text-white">
                Casual
              </h3>
              <p className="mt-2 text-lg tracking-tight text-white">
                Everything an experienced gamer could ever ask for.
              </p>
              <p className="-order-1 mb-5 text-white">
                Starting from
              </p>
              <p className="-order-1 flex font-display font-bold">
                <span className="text-[1.75rem] leading-tight text-gray-300">
                  $
                </span>
                <span className="ml-1 mt-1 text-7xl tracking-tight text-white">
                  1,520
                </span>
              </p>
              <div className="order-1 mt-8">
                <ul className="-my-2 divide-y divide-white/10 text-base tracking-tight text-white">
                  {[
                    'Mid-level processors and graphics cards',
                    'Adequate memory and storage',
                    'User-friendly interface',
                    'Easy to upgrade',
                    'Affordable price point',
                  ].map((feature) => (
                    <li key={feature} className="flex py-2">
                      <svg aria-hidden="true" className="h-8 w-8 fill-white">
                        <path d="M11.83 15.795a1 1 0 0 0-1.66 1.114l1.66-1.114Zm9.861-4.072a1 1 0 1 0-1.382-1.446l1.382 1.446ZM14.115 21l-.83.557a1 1 0 0 0 1.784-.258L14.115 21Zm.954.3c1.29-4.11 3.539-6.63 6.622-9.577l-1.382-1.446c-3.152 3.013-5.704 5.82-7.148 10.424l1.908.598Zm-4.9-4.391 3.115 4.648 1.661-1.114-3.114-4.648-1.662 1.114Z" />
                      </svg>
                      <span className="ml-4">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <ButtonLink
                href="/build-your-pc"
                color="white"
                className="mt-8"
                aria-label="Start building with the casual and experienced plan"
              >
                Start building
              </ButtonLink>
            </div>
          </div>
          <div className="flex flex-col px-4 py-16 sm:px-10 md:py-12 lg:px-12">
            <h3 className="mt-7 text-lg font-semibold tracking-tight text-main">
              Prodigy
            </h3>
            <p className="mt-2 text-lg tracking-tight text-slate-600">
              The ultimate choice for aspiring e-sports stars.
            </p>
            <p className="-order-1 mb-5 text-main">
              Starting from
            </p>
            <p className="-order-1 flex font-display font-bold">
              <span className="text-[1.75rem] leading-tight text-main">
                $
              </span>
              <span className="ml-1 mt-1 text-7xl tracking-tight text-main">
                2,287
              </span>
            </p>
            <div className="order-1 mt-8">
              <ul className="-my-2 divide-y divide-slate-200 text-base tracking-tight text-slate-900">
                {[
                  'High-performance processors and graphics cards',
                  'High-end memory and storage',
                  'Advanced cooling systems',
                  'Expandable hardware options',
                  'Premium price point',
                ].map((feature) => (
                  <li key={feature} className="flex py-2">
                    <svg
                      aria-hidden="true"
                      className="h-8 w-8 flex-none fill-slate-600"
                    >
                      <path d="M11.83 15.795a1 1 0 0 0-1.66 1.114l1.66-1.114Zm9.861-4.072a1 1 0 1 0-1.382-1.446l1.382 1.446ZM14.115 21l-.83.557a1 1 0 0 0 1.784-.258L14.115 21Zm.954.3c1.29-4.11 3.539-6.63 6.622-9.577l-1.382-1.446c-3.152 3.013-5.704 5.82-7.148 10.424l1.908.598Zm-4.9-4.391 3.115 4.648 1.661-1.114-3.114-4.648-1.662 1.114Z" />
                    </svg>
                    <span className="ml-4">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <ButtonLink
              href="/build-your-pc"
              color="slate"
              className="mt-8 bg-main"
              aria-label="Start building with the prodigy plan"
            >
              Start building
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  )
}
