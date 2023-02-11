import { Fragment, useState } from 'react'
import { Dialog, Disclosure, Menu, Popover, Tab, Transition } from '@headlessui/react'
import { MenuIcon, QuestionMarkCircleIcon, SearchIcon, ShoppingBagIcon, XIcon } from '@heroicons/react/outline'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { storefront } from 'utils'
import Link from 'next/link'

const icons = [
    "https://content.ibuypower.com/cdn-cgi/image/width=3840,format=auto,quality=75/https://content.ibuypower.com/Images/Base/icon_cpu.svg",
    "https://content.ibuypower.com/cdn-cgi/image/width=3840,format=auto,quality=75/https://content.ibuypower.com/Images/Base/icon_gpu.svg",
    "https://content.ibuypower.com/cdn-cgi/image/width=3840,format=auto,quality=75/https://content.ibuypower.com/Images/Base/icon_memory.svg",
    "https://content.ibuypower.com/cdn-cgi/image/width=3840,format=auto,quality=75/https://content.ibuypower.com/Images/Base/icon_hard drive.svg",
]

export default function starter({ products }) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
    return (
        <>
            <div>
                <Header />
                <div className="relative overflow-hidden h-[140px]" />
                <div>
                    {/* Mobile menu */}
                    <Transition.Root show={mobileMenuOpen} as={Fragment}>
                        <Dialog as="div" className="fixed inset-0 flex z-40 lg:hidden" onClose={setMobileMenuOpen}>
                            <Transition.Child
                                as={Fragment}
                                enter="transition-opacity ease-linear duration-300"
                                enterFrom="opacity-0"
                                enterTo="opacity-100"
                                leave="transition-opacity ease-linear duration-300"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                            >
                                <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-25" />
                            </Transition.Child>

                            <Transition.Child
                                as={Fragment}
                                enter="transition ease-in-out duration-300 transform"
                                enterFrom="-translate-x-full"
                                enterTo="translate-x-0"
                                leave="transition ease-in-out duration-300 transform"
                                leaveFrom="translate-x-0"
                                leaveTo="-translate-x-full"
                            >
                                <div className="relative max-w-xs w-full bg-white shadow-xl pb-12 flex flex-col overflow-y-auto">
                                    <div className="px-4 pt-5 pb-2 flex">
                                        <button
                                            type="button"
                                            className="-m-2 p-2 rounded-md inline-flex items-center justify-center text-gray-400"
                                            onClick={() => setMobileMenuOpen(false)}
                                        >
                                            <span className="sr-only">Close menu</span>
                                            <XIcon className="h-6 w-6" aria-hidden="true" />
                                        </button>
                                    </div>
                                    <div className="border-t border-gray-200 py-6 px-4 space-y-6">
                                        <div className="flow-root">
                                            <a href="#" className="-m-2 p-2 block font-medium text-gray-900">
                                                Create an account
                                            </a>
                                        </div>
                                        <div className="flow-root">
                                            <a href="#" className="-m-2 p-2 block font-medium text-gray-900">
                                                Sign in
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </Transition.Child>
                        </Dialog>
                    </Transition.Root>
                </div>

                <div>
                    {/* Mobile filter dialog */}
                    <Transition.Root show={mobileFiltersOpen} as={Fragment}>
                        <Dialog as="div" className="fixed inset-0 flex z-40 sm:hidden" onClose={setMobileFiltersOpen}>
                            <Transition.Child
                                as={Fragment}
                                enter="transition-opacity ease-linear duration-300"
                                enterFrom="opacity-0"
                                enterTo="opacity-100"
                                leave="transition-opacity ease-linear duration-300"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                            >
                                <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-25" />
                            </Transition.Child>
                        </Dialog>
                    </Transition.Root>

                    <main>
                        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8 relative">
                            {/* Product grid */}
                            <div className="py-20 text-center mb-10 bg-cover bg-no-repeat bg-top">
                                <div>
                                    <h1 className="text-6xl font-[Anton] uppercase">Prodigy Series</h1>
                                    <p className="mt-4 max-w-3xl mx-auto text-base">
                                        Carefully curated for the top 1%.
                                    </p>
                                </div>
                            </div>
                            <section aria-labelledby="products-heading">
                                <h2 id="products-heading" className="sr-only">
                                    Products
                                </h2>

                                <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-2 xl:gap-x-8">
                                    {products.edges.map((item) => {
                                        const product = item.node
                                        const specs = product.metafield.value
                                        const image = product.images.edges[0].node
                                        const previewImages = product.images.edges
                                        const [featuredImage, setFeaturedImage] = useState(image)
                                        return (
                                            <div>
                                                <div className="grid grid-cols-4">
                                                    <Link key={product.handle} href={`/build-your-pc/products/${product.handle}`}>
                                                        <a className="group col-span-2">
                                                            <div className="rounded-l h-full max-w-30 overflow-hidden">
                                                                <img
                                                                    src={featuredImage.transformedSrc}
                                                                    alt={image.altText}
                                                                    className="h-full object-center object-cover group-hover:opacity-75 duration-100 ease-in"
                                                                />
                                                            </div>
                                                        </a>
                                                    </Link>
                                                    <div className="col-span-2 h-full w-full bg-secondary rounded-r px-5 pb-5 flex flex-col justify-between">
                                                        <div className="mt-4 flex items-center justify-between text-base font-medium mb-5">
                                                            <h3 className="text-lg">{product.title}</h3>
                                                            <p className="font-bold">${product.priceRange.minVariantPrice.amount}</p>
                                                        </div>
                                                        <ul>
                                                            {specs.split('\n').map((spec, i) => (
                                                                <li key={i} className="flex items-center text-xs font-display">
                                                                    <img src={icons[i]} className="w-7 h-7" />
                                                                    {spec}
                                                                </li>
                                                            ))}
                                                        </ul>
                                                        <Link key={product.handle} href={`/build-your-pc/products/${product.handle}`}>
                                                            <div className="flex justify-center items-center w-full cursor-pointer bg-gray-900 text-white font-display mt-5 rounded-md py-3">Buy now</div>
                                                        </Link>
                                                    </div>
                                                </div>
                                                <div className="flex mt-1">{previewImages.map((item, i) => {
                                                    const image = item.node
                                                    return (
                                                        <img src={image.transformedSrc} key={i} className={`h-12 duration-200 ease-in-out ${image === featuredImage ? 'opacity-100' : 'opacity-75'}`} onClick={() => {
                                                            setFeaturedImage(image)
                                                        }} />
                                                    )
                                                })}</div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </section>

                            <section aria-labelledby="featured-heading" className="relative mt-16 rounded-lg overflow-hidden lg:h-96 mb-10">
                                <div className="absolute inset-0 bg-[#F5F5F8]">
                                    <img src="/computer.svg" className="absolute -right-[150px] -top-[250px]" />
                                </div>
                                <div aria-hidden="true" className="relative w-full h-96 lg:hidden" />
                                <div aria-hidden="true" className="relative w-full h-32 lg:hidden" />
                                <div className="absolute inset-x-0 bottom-0 bg-opacity-75 p-6 rounded-bl-lg rounded-br-lg backdrop-filter sm:flex sm:items-center space-y-10 lg:inset-y-0 lg:inset-x-auto lg:w-96 lg:rounded-tl-lg lg:rounded-br-none lg:flex-col lg:justify-center lg:items-start">
                                    <div>
                                        <h2 id="featured-heading" className="text-5xl font-[Anton] uppercase text-black">
                                            Casual Series
                                        </h2>
                                        <p className="mt-1 text-sm text-black">
                                            Upgrade your experience with the latest industry hardware. For gamers, built by gamers.
                                        </p>
                                    </div>
                                    <a
                                        href="/build-your-pc/casual"
                                        className="mt-6 flex-shrink-0 flex bg-opacity-0 py-3 px-4 border border-black border-opacity-25 rounded-md items-center justify-center text-base font-medium text-black hover:bg-opacity-10 sm:mt-0 sm:ml-8 lg:ml-0 lg:w-full"
                                    >
                                        Shop the collection
                                    </a>
                                </div>
                            </section>
                        </div>
                    </main>
                    <Footer />
                </div>
            </div>
        </>
    )
}

export async function getStaticProps() {
    const { data } = await storefront(productsQuery)
    return {
        props: {
            products: data.products,
        }
    }
}

const gql = String.raw

const productsQuery = gql`
    query Products {
        products(first:100, query:"tag:prodigy") {
            edges {
                node {
                title
                handle
                priceRange {
                    minVariantPrice {
                    amount
                    }
                }
                metafield(namespace: "custom", key: "specs") {
                    value
                } 
                images(first: 20) {
                    edges {
                    node {
                        transformedSrc
                        altText
                    }
                    }
                }
                }
            }
        }
    }
`