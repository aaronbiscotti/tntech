import React, { useEffect, useState } from "react"
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import Link from "next/link";

function Typewriter({ texts }) {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [delay, setDelay] = useState(1000);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const currentLength = currentText.length;
      const nextIndex = (currentIndex + 1) % texts.length;
      const nextText = texts[nextIndex];

      if (!isDeleting && currentLength === nextText.length) {
        setIsDeleting(true);
        setDelay(1000);
      } else if (isDeleting && currentLength === 0) {
        setIsDeleting(false);
        setCurrentIndex(nextIndex);
        setDelay(150);
      } else if (isDeleting) {
        setCurrentText(currentText.substring(0, currentLength - 1));
        setDelay(150);
      } else {
        setCurrentText(nextText.substring(0, currentLength + 1));
        setDelay(70);
      }
    }, delay);

    return () => clearInterval(intervalId);
  }, [currentText, currentIndex, delay, isDeleting, texts]);

  return <h1 className="text-5xl uppercase text-main sm:text-7xl md:text-6xl max-w-xl font-[Anton]">{currentText} &nbsp;</h1>;
}
export function PrimaryFeatures() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const intervalId = setInterval(() =>
      setIndex(index => index + 1),
      3000
    );
    return () => clearTimeout(intervalId);
  }, []);
  return (
    <div class="relative overflow-hidden py-20 sm:py-32 lg:pb-32 xl:pb-[20vh] xl:pt-[25vh]">
      <div class="hidden lg:block absolute top-0 left-0 w-full h-full bg-no-repeat bg-cover bg-background bg-right-bottom"></div>
      <Container>
        <div className="lg:grid lg:grid-cols-12 lg:gap-x-8 lg:gap-y-20">
          <div className="relative z-10 max-w-2xl lg:col-span-7 lg:max-w-none lg:pt-6 xl:col-span-6">
            <h2
              id="features-title"
              className="text-5xl text-main sm:text-7xl md:text-6xl md:max-w-xl md:pr-40 font-[Anton]"
            >
              EVERYTHING YOU NEED TO RUN
            </h2>
            <Typewriter texts={['Your favorite game', 'Cyberpunk 2077', 'Grand Theft Auto V', 'Overwatch', 'Elden Ring', 'Call of Duty', 'Fortnite']} />
            <p className="text-lg mt-5 max-w-md text-main">
              Unleash your gaming potential with a custom-built PC designed just for you. From cutting-edge components to personalized support, we'll help you dominate the competition and achieve victory.
            </p>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-4">
              <Link href="/prebuilt-pcs">
                <Button
                  variant="outline"
                  className="bg-white"
                >
                  <span>Explore the collection</span>
                </Button>
              </Link>
            </div>
          </div>
          <div className="sm:block lg:hidden col-span-full mt-10">
            <div className="rounded bg-background bg-right-bottom bg-no-repeat bg-cover h-[250px]"></div>
          </div>
        </div>
      </Container>
    </div >
  )
}
