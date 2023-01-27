import { ButtonLink } from '@/components/Button'
import { Container } from '@/components/Container'
import { GridPattern } from '@/components/GridPattern'

export function About() {
    return (
        <section
            id="pricing"
            aria-labelledby="pricing-title"
            className="relative scroll-mt-14 pt-16 sm:scroll-mt-32 sm:pt-15 mt-10 lg:pt-18"
        >
            <Container className="flex justify-between w-full items-center">
                <div>
                    <p className="mt-8 uppercase font-title text-5xl text-main sm:text-6xl w-[600px]">
                        Assembled by gamers, for gamers.
                    </p>
                    <p className="mt-4 text-lg max-w-3xl tracking-tight text-main">
                        Welcome to TNTech, where gaming is our passion and building top-of-the-line gaming computers is our expertise. Our team know firsthand what it takes to deliver the best gaming experience- from selecting the most powerful processors and graphics cards, to choosing the perfect components for optimal cooling and speed, we’ve got you covered for your budget.
                    </p>
                </div>
                <div className="relative">
                    <img src="/hero_image.png" className="hover:scale-[1.02] duration-100 ease-in-out" />
                    <img src="/element.svg" className="absolute top-10 right-1/3 h-3/4 -z-10 hover:scale-[1.04] duration-100 ease-in-out" />
                </div>
            </Container>
        </section>
    )
}
