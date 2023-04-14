import Head from 'next/head'
import { Container } from '@/components/Container'
import { Faqs } from '@/components/Faqs'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'
import { Testimonials } from '@/components/Testimonials'
import HowItWorks from '@/components/HowItWorks'
import { storefront } from 'utils'
import Link from 'next/link'
import { useState } from 'react'
import Carousel from '@/components/Carousel'

const icons = [
  'https://content.ibuypower.com/cdn-cgi/image/width=3840,format=auto,quality=75/https://content.ibuypower.com/Images/Base/icon_cpu.svg',
  'https://content.ibuypower.com/cdn-cgi/image/width=3840,format=auto,quality=75/https://content.ibuypower.com/Images/Base/icon_gpu.svg',
  'https://content.ibuypower.com/cdn-cgi/image/width=3840,format=auto,quality=75/https://content.ibuypower.com/Images/Base/icon_memory.svg',
  'https://content.ibuypower.com/cdn-cgi/image/width=3840,format=auto,quality=75/https://content.ibuypower.com/Images/Base/icon_hard drive.svg',
]

export default function Home({ products }) {
  return (
    <>
      <Head>
        <title>TNTech - Elevate Your Game with Custom PCs</title>
        <meta
          name="description"
          content="Unleash the full potential of your gaming with our intuitive building services. Complexity becomes a thing of the past, as we've distilled all the mission-critical features for a seamless gaming experience."
        />
      </Head>
      <Header />
      <main>
        <PrimaryFeatures />
        <section
          id="featured"
          aria-labelledby="pricing-title"
          className="relative -mt-20 sm:mt-0"
        >
          {/* <FeaturedBuilds props={products}/> */}
          {featuredBuilds({ products })}
        </section>
        <SecondaryFeatures />
        <HowItWorks />
        <Testimonials />
        <Faqs />
      </main>
      <Footer />
    </>
  )
}

export function featuredBuilds(props) {
  const { products } = props || {}

  return (
    <Container className="relative flex w-full items-center justify-between">
      <div className="relative h-full w-full mt-20 sm:mt-0 bg-white">
        <div className="relative h-full max-w-7xl mt-10 sm:mt-0 sm:py-16">
          <h2 className="mb-10 sm:text-center font-[Anton] text-6xl uppercase text-gray-900">
            FEATURED BUILDS
          </h2>

          <Carousel>
            {products.edges.map((item, i) => {
              const product = item.node
              const specs = product.metafield.value
              const image = product.images.edges[0].node
              return (
                <div className="md:flex h-full" key={i}>
                  <div className="flex-1">
                    <Link
                      key={product.handle}
                      href={`/build-your-pc/products/${product.handle}`}
                    >
                      <a className="group col-span-2 h-full">
                        <div className="rounded-l h-full">
                          <img
                            src={image.transformedSrc}
                            alt={image.altText}
                            className="w-full object-cover object-center duration-100 ease-in group-hover:opacity-75"
                          />
                        </div>
                      </a>
                    </Link>
                  </div>
                  <div className="flex-1 flex flex-col justify-between rounded-r bg-secondary md:mx-0 px-5 pb-5 md:pr-20">
                    <div className="">
                      <div className="mt-2 mb-3 md:mt-4 md:mb-5 flex items-center justify-between text-base font-medium">
                        <h3 className="text-lg">{product.title}</h3>
                      </div>
                      <ul>
                        {specs.split('\n').map((spec, i) => (
                          <li
                            key={i}
                            className="flex items-center font-display text-sm"
                          >
                            <img src={icons[i]} className="h-8 w-8 md:h-10 md:w-10" />
                            {spec}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Link
                      key={product.handle}
                      href={`/build-your-pc/products/${product.handle}`}
                    >
                      <div>
                        <p className="text-2xl font-bold">
                          ${product.priceRange.minVariantPrice.amount}
                        </p>
                        <div className="mt-6 flex w-full cursor-pointer items-center justify-center rounded-md bg-gray-900 py-3 font-display text-white duration-300 ease-in-out hover:opacity-80">
                          Buy now
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              )
            })}
          </Carousel>

        </div>
      </div>
    </Container>
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
    products(first: 3, query: "tag:featured") {
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
