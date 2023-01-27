import Head from 'next/head'
import { Header } from '@/components/Header'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'

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

                <SecondaryFeatures />
            </main>
        </>
    )
}
