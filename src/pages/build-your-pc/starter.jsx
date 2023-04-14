import { Fragment, useState } from 'react'
import {
  Dialog,
  Disclosure,
  Menu,
  Popover,
  Tab,
  Transition,
} from '@headlessui/react'
import {
  MenuIcon,
  QuestionMarkCircleIcon,
  SearchIcon,
  ShoppingBagIcon,
  XIcon,
} from '@heroicons/react/outline'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { storefront } from 'utils'
import Link from 'next/link'

const icons = [
  'https://content.ibuypower.com/cdn-cgi/image/width=3840,format=auto,quality=75/https://content.ibuypower.com/Images/Base/icon_cpu.svg',
  'https://content.ibuypower.com/cdn-cgi/image/width=3840,format=auto,quality=75/https://content.ibuypower.com/Images/Base/icon_gpu.svg',
  'https://content.ibuypower.com/cdn-cgi/image/width=3840,format=auto,quality=75/https://content.ibuypower.com/Images/Base/icon_memory.svg',
  'https://content.ibuypower.com/cdn-cgi/image/width=3840,format=auto,quality=75/https://content.ibuypower.com/Images/Base/icon_hard drive.svg',
]

export default function starter({ products }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
  return (
    <>
      <div>
        <Header />
        <div className="relative h-[75px] overflow-hidden" />
        <div>
          {/* Mobile menu */}
          <Transition.Root show={mobileMenuOpen} as={Fragment}>
            <Dialog
              as="div"
              className="fixed inset-0 z-40 flex lg:hidden"
              onClose={setMobileMenuOpen}
            >
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
                <div className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
                  <div className="flex px-4 pt-5 pb-2">
                    <button
                      type="button"
                      className="-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <span className="sr-only">Close menu</span>
                      <XIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                  <div className="space-y-6 border-t border-gray-200 py-6 px-4">
                    <div className="flow-root">
                      <a
                        href="#"
                        className="-m-2 block p-2 font-medium text-gray-900"
                      >
                        Create an account
                      </a>
                    </div>
                    <div className="flow-root">
                      <a
                        href="#"
                        className="-m-2 block p-2 font-medium text-gray-900"
                      >
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
            <Dialog
              as="div"
              className="fixed inset-0 z-40 flex sm:hidden"
              onClose={setMobileFiltersOpen}
            >
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
            <div className="mb-20 max-w-3xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8 relative">
              {/* Product grid */}
              <div className="mb-20 bg-cover bg-top bg-no-repeat py-5 text-center">
                <div>
                  <h1 className="font-[Anton] text-6xl uppercase">
                    Starter Series
                  </h1>
                  <p className="mx-auto mt-4 max-w-3xl text-base">
                    Thoughtfully designed for new gamers.
                  </p>
                </div>
              </div>
              <section aria-labelledby="products-heading">
                <h2 id="products-heading" className="sr-only">
                  Products
                </h2>

                <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-2 xl:gap-x-8">
                  {products.edges.map((item, i) => {
                    const product = item.node
                    const specs = product.metafield.value
                    const image = product.images.edges[0].node

                    return (
                      <div key={i}>
                        <div className="md:grid md:grid-cols-4">
                          <Link
                            key={product.handle}
                            href={`/build-your-pc/products/${product.handle}`}
                          >
                            <a className="group col-span-2">
                              <div className="max-w-30 h-full overflow-hidden rounded-l">
                                <img
                                  src={image.transformedSrc}
                                  alt={image.altText}
                                  className="max-h-[400px] h-full object-cover object-center duration-100 ease-in group-hover:opacity-75"
                                />
                              </div>
                            </a>
                          </Link>

                          <div className="col-span-2 flex h-full w-full flex-col justify-between rounded-r bg-secondary px-5 pb-5">
                            <div className="mt-4 mb-5 flex items-center justify-between text-base font-medium">
                              <h3 className="text-lg">{product.title}</h3>
                              <p className="font-bold">
                                ${product.priceRange.minVariantPrice.amount}
                              </p>
                            </div>
                            <ul>
                              {specs.split('\n').map((spec, i) => (
                                <li
                                  key={i}
                                  className="flex items-center font-display text-xs"
                                >
                                  <img src={icons[i]} className="h-7 w-7" />
                                  {spec}
                                </li>
                              ))}
                            </ul>
                            <Link
                              key={product.handle}
                              href={`/build-your-pc/products/${product.handle}`}
                            >
                              <div className="mt-5 flex w-full cursor-pointer items-center justify-center rounded-md bg-gray-900 py-3 font-display text-white">
                                Buy now
                              </div>
                            </Link>
                          </div>

                        </div>
                      </div>
                    )
                  })}
                </div>
              </section>

              <section aria-labelledby="featured-heading" className="hidden lg:block relative mt-16 rounded-lg overflow-hidden lg:h-96 mb-20">
                <div className="absolute inset-0 bg-[#F5F5F8]">
                  <img
                    src="/computer.svg"
                    className="absolute -right-[150px] -top-[250px]"
                  />
                </div>
                <div
                  aria-hidden="true"
                  className="relative h-96 w-full lg:hidden"
                />
                <div
                  aria-hidden="true"
                  className="relative h-32 w-full lg:hidden"
                />
                <div className="absolute inset-x-0 bottom-0 space-y-10 rounded-bl-lg rounded-br-lg bg-opacity-75 p-6 backdrop-filter sm:flex sm:items-center lg:inset-y-0 lg:inset-x-auto lg:w-96 lg:flex-col lg:items-start lg:justify-center lg:rounded-tl-lg lg:rounded-br-none">
                  <div>
                    <h2
                      id="featured-heading"
                      className="font-[Anton] text-5xl uppercase text-black"
                    >
                      Casual Series
                    </h2>
                    <p className="mt-1 text-sm text-black">
                      Upgrade your experience with the latest industry hardware.
                      For gamers, built by gamers.
                    </p>
                  </div>
                  <a
                    href="/build-your-pc/casual"
                    className="mt-6 flex flex-shrink-0 items-center justify-center rounded-md border border-black border-opacity-25 bg-opacity-0 py-3 px-4 text-base font-medium text-black hover:bg-opacity-10 sm:mt-0 sm:ml-8 lg:ml-0 lg:w-full"
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
    },
    revalidate: 60,
  }
}

const gql = String.raw

const productsQuery = gql`
  query Products {
    products(first: 100, query: "tag:starter") {
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
