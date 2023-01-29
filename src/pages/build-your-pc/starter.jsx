import { Fragment, useState } from 'react'
import { Dialog, Disclosure, Menu, Popover, Tab, Transition } from '@headlessui/react'
import { MenuIcon, QuestionMarkCircleIcon, SearchIcon, ShoppingBagIcon, XIcon } from '@heroicons/react/outline'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { storefront } from 'utils'
import Link from 'next/link'
import banner from '@/images/banner.png'
import Image from 'next/image'

export default function starter({ products }) {
    console.log(products);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

    return (
        <>
            <div className="bg-gray-50">
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
                        <div className="py-52 text-center w-screen bg-starterbg bg-cover bg-no-repeat bg-top">
                            <h1 className="text-6xl font-[Anton] uppercase text-white">Starter computers</h1>
                            <p className="mt-4 max-w-3xl mx-auto text-base text-white">
                                Thoughtfully designed for new gamers.
                            </p>
                        </div>
                        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8 relative mt-20">
                            {/* Product grid */}
                            <section aria-labelledby="products-heading">
                                <h2 id="products-heading" className="sr-only">
                                    Products
                                </h2>

                                <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:gap-x-8">
                                    {products.edges.map((item) => {
                                        const product = item.node
                                        const image = product.images.edges[0].node
                                        return (
                                            <Link key={product.handle} href={`/build-your-pc/products/${product.handle}`} >
                                                <a className="group">
                                                    <div className="w-full aspect-w-4 aspect-h-3 rounded-lg overflow-hidden">
                                                        <img
                                                            src={image.transformedSrc}
                                                            alt={image.altText}
                                                            className="w-full h-full object-center object-cover group-hover:opacity-75 duration-100 ease-in"
                                                        />
                                                    </div>
                                                    <div className="mt-4 flex items-center justify-between text-base font-medium text-gray-900">
                                                        <h3>{product.title}</h3>
                                                        <p className="font-bold">${product.priceRange.minVariantPrice.amount}</p>
                                                    </div>
                                                    <p className="mt-1 text-sm italic text-gray-500">{product.description}</p>
                                                </a>
                                            </Link>
                                        )
                                    })}
                                </div>
                            </section>

                            <section aria-labelledby="featured-heading" className="relative mt-16 rounded-lg overflow-hidden lg:h-96 mb-10">
                                <div className="absolute inset-0">
                                    <Image
                                        src={banner}
                                        alt=""
                                        className="object-contain"
                                    />
                                </div>
                                <div aria-hidden="true" className="relative w-full h-96 lg:hidden" />
                                <div aria-hidden="true" className="relative w-full h-32 lg:hidden" />
                                <div className="absolute inset-x-0 bottom-0 bg-black bg-opacity-75 p-6 rounded-bl-lg rounded-br-lg backdrop-filter backdrop-blur sm:flex sm:items-center sm:justify-between lg:inset-y-0 lg:inset-x-auto lg:w-96 lg:rounded-tl-lg lg:rounded-br-none lg:flex-col lg:items-start">
                                    <div>
                                        <h2 id="featured-heading" className="text-5xl font-[Anton] uppercase text-white">
                                            Casual Collection
                                        </h2>
                                        <p className="mt-1 text-sm text-gray-300">
                                            Upgrade your experience with the latest industry hardware. For gamers, built by gamers.
                                        </p>
                                    </div>
                                    <a
                                        href="/build-your-pc/casual"
                                        className="mt-6 flex-shrink-0 flex bg-white bg-opacity-0 py-3 px-4 border border-white border-opacity-25 rounded-md items-center justify-center text-base font-medium text-white hover:bg-opacity-10 sm:mt-0 sm:ml-8 lg:ml-0 lg:w-full"
                                    >
                                        View the collection
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
        products(first:100, query:"tag:starter") {
            edges {
                node {
                title
                handle
                priceRange {
                    minVariantPrice {
                    amount
                    }
                }
                images(first: 1) {
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