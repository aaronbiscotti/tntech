import { ButtonLink } from '@/components/Button'
import { Container } from '@/components/Container'
import { GridPattern } from '@/components/GridPattern'

const products = [
    {
        id: 1,
        name: 'Basic Tee',
        href: '#',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
        color: 'Black',
    },
    {
        id: 1,
        name: 'Basic Tee',
        href: '#',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
        color: 'Black',
    },
    {
        id: 1,
        name: 'Basic Tee',
        href: '#',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
        color: 'Black',
    },
    // More products...
]

export function About() {
    return (
        <section
            id="pricing"
            aria-labelledby="pricing-title"
            className="relative scroll-mt-14 pt-16 sm:scroll-mt-32 sm:pt-15 mt-10 lg:pt-18"
        >
            <Container className="flex justify-between w-full items-center">
                <div className="bg-white">
                    <div className="mx-auto py-16 max-w-7xl">
                        <h2 className="text-6xl font-[Anton] uppercase text-gray-900 mb-10">FEATURED BUILDS</h2>
                        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                            {products.map((product) => (
                                <div key={product.id} className="group relative">
                                    <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
                                        <img
                                            src={product.imageSrc}
                                            alt={product.imageAlt}
                                            className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                                        />
                                    </div>
                                    <div className="mt-4 flex justify-between">
                                        <div>
                                            <h3 className="text-sm text-gray-700">
                                                <a href={product.href}>
                                                    <span aria-hidden="true" className="absolute inset-0" />
                                                    {product.name}
                                                </a>
                                            </h3>
                                            <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                                        </div>
                                        <p className="text-sm font-medium text-gray-900">{product.price}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* <div>
                    <p className="mt-8 uppercase font-title text-5xl text-main sm:text-6xl w-[600px]">
                        BEST SELLERS
                    </p>
                    <p className="mt-4 text-lg max-w-3xl tracking-tight text-main">
                        Welcome to TNTech, where gaming is our passion and building top-of-the-line gaming computers is our expertise. Our team know firsthand what it takes to deliver the best gaming experience- from selecting the most powerful processors and graphics cards, to choosing the perfect components for optimal cooling and speed, we’ve got you covered for your budget.
                    </p>
                </div>
                <div className="relative">
                    <img src="/hero_image.png" className="hover:scale-[1.02] duration-100 ease-in-out" />
                    <img src="/element.svg" className="absolute top-10 right-1/3 h-3/4 -z-10 hover:scale-[1.04] duration-100 ease-in-out" />
                </div> */}
            </Container>
        </section>
    )
}
