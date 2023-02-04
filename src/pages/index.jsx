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
          className="relative scroll-mt-14 pb-10 sm:scroll-mt-32 mt-10"
        >
          <Container className="flex justify-between w-full items-center">
            <div className="bg-white">
              <div className="py-16 max-w-7xl">
                <h2 className="text-6xl font-[Anton] uppercase text-gray-900 mb-10">FEATURED BUILDS</h2>
                <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
                  {products.edges.map((item) => {
                    const product = item.node
                    const image = product.images.edges[0].node
                    return (
                      //           <div key={product.id} className="group relative">
                      //   <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
                      //     <img
                      //       src={product.imageSrc}
                      //       alt={product.imageAlt}
                      //       className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                      //     />
                      //   </div>
                      //   <div className="mt-4 flex justify-between">
                      //     <div>
                      //       <h3 className="text-sm text-gray-700">
                      //         <a href={product.href}>
                      //           <span aria-hidden="true" className="absolute inset-0" />
                      //           {product.name}
                      //         </a>
                      //       </h3>
                      //       <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                      //     </div>
                      //     <p className="text-sm font-medium text-gray-900">{product.price}</p>
                      //   </div>
                      // </div>
                      <Link key={product.handle} href={`/build-your-pc/products/${product.handle}`} >
                        <a className="group">
                          <div className="aspect-w-1 h-full w-full aspect-h-1 overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none">
                            <img
                              src={image.transformedSrc}
                              alt={image.altText}
                              className="w-full h-full object-center object-cover group-hover:opacity-75 duration-100 ease-in"
                            />
                          </div>
                          <div className="mt-4 flex text-base font-medium flex-col space-y-2">
                            <h3 className="text-xl font-bold font-display">{product.title}</h3>
                            <p className="font-bold">${product.priceRange.minVariantPrice.amount}</p>
                          </div>
                          <p className="mt-1 text-sm italic text-gray-500">{product.description}</p>
                        </a>
                      </Link>
                    )
                  })}
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
      products(first:100, query:"tag:featured") {
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