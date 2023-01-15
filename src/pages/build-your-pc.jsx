import Head from 'next/head'
import { CallToAction } from '@/components/CallToAction'
import { Faqs } from '@/components/Faqs'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'
import { Testimonials } from '@/components/Testimonials'

export default function Home() {
    return (
        <>
            <Head>
                <title>Build Your PC - TNTech</title>
                <meta
                    name="description"
                    content="Unleash the full potential of your gaming with our intuitive building services. Complexity becomes a thing of the past, as we've distilled all the mission-critical features for a seamless gaming experience."
                />
            </Head>
            <Header />
            <main>
                <div className="relative overflow-hidden bg-no-repeat bg-cover bg-center bg-background h-[140px]">Hello</div>
                <SecondaryFeatures />
            </main>
        </>
    )
}
