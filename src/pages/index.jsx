import Head from 'next/head'
import { Container } from '@/components/Container'
import { Faqs } from '@/components/Faqs'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'
import { Testimonials } from '@/components/Testimonials'
import { Pricing } from '@/components/Pricing'
import { About } from '@/components/About'
import HowItWorks from '@/components/HowItWorks'
import { storefront } from 'utils'
import Link from 'next/link'


const icons = [
  "https://content.ibuypower.com/cdn-cgi/image/width=3840,format=auto,quality=75/https://content.ibuypower.com/Images/Base/icon_cpu.svg",
  "https://content.ibuypower.com/cdn-cgi/image/width=3840,format=auto,quality=75/https://content.ibuypower.com/Images/Base/icon_gpu.svg",
  "https://content.ibuypower.com/cdn-cgi/image/width=3840,format=auto,quality=75/https://content.ibuypower.com/Images/Base/icon_memory.svg",
  "https://content.ibuypower.com/cdn-cgi/image/width=3840,format=auto,quality=75/https://content.ibuypower.com/Images/Base/icon_hard drive.svg",
]


export default function Home({ products }) {
  const product = products.edges[0].node
  const specs = product.metafield.value
  const image = product.images.edges[0].node
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
          className="relative scroll-mt-14 sm:scroll-mt-32 mt-10"
        >
          <Container className="flex justify-between w-full items-center">
            <div className="bg-white">
              <div className="py-16 max-w-7xl">
                <h2 className="text-6xl font-[Anton] uppercase text-gray-900 mb-10">FEATURED BUILD</h2>
                {/* Featured build */}
                <div className="grid grid-cols-3">
                  <Link key={product.handle} href={`/build-your-pc/products/${product.handle}`}>
                    <a className="group col-span-2">
                      <div className="rounded-l h-full max-w-30 overflow-hidden">
                        <img
                          src={image.transformedSrc}
                          alt={image.altText}
                          className="h-full object-center object-cover group-hover:opacity-75 duration-100 ease-in"
                        />
                      </div>
                    </a>
                  </Link>
                  <div className="col-span-1 h-full w-full bg-secondary rounded-r px-5 pb-5 flex flex-col justify-between">
                    <div>
                      <div className="mt-4 flex items-center justify-between text-base font-medium mb-5">
                        <h3 className="text-lg">{product.title}</h3>
                      </div>
                      <ul>
                        {specs.split('\n').map((spec, i) => (
                          <li key={i} className="flex items-center text-sm font-display">
                            <img src={icons[i]} className="w-10 h-10" />
                            {spec}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Link key={product.handle} href={`/build-your-pc/products/${product.handle}`}>
                      <div>
                        <p className="font-bold text-2xl">${product.priceRange.minVariantPrice.amount}</p>
                        <div className="flex justify-center items-center w-full cursor-pointer bg-gray-900 text-white font-display mt-5 rounded-md py-3">Buy now</div>
                      </div>
                    </Link>
                  </div>

                </div>
              </div>
            </div>
          </Container>
        </section>
        <HowItWorks />
        <SecondaryFeatures />
        {/* <Pricing /> */}
        {/* <CallToAction /> */}
        <Faqs />
        <Testimonials />
      </main>
      <Footer />
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
      products(first:1, query:"tag:featured") {
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