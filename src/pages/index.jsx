import Head from 'next/head'
import { CallToAction } from '@/components/CallToAction'
import { Faqs } from '@/components/Faqs'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'
import { Testimonials } from '@/components/Testimonials'
import { Pricing } from '@/components/Pricing'
import { About } from '@/components/About'

export default function Home() {
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
        <About />
        <Pricing />
        <CallToAction />
        <Testimonials />
        <Faqs />
      </main>
      <Footer />
    </>
  )
}
