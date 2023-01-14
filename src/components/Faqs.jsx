import Image from 'next/image'

import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-faqs.jpg'

const faqs = [
  [
    {
      question: 'Are these prebuilt rigs?',
      answer:
        'No, we\'ll send you everything you need to build it yourself!',
    },
    {
      question: 'Can I finance my order?',
      answer: 'At the moment, we do not support financing.',
    },
  ],
  [
    {
      question: 'How will I get my order?',
      answer:
        'We\'ll send you a box with everything you need.',
    },
    {
      question:
        'How do I know if the computer I purchase has the performance I need it to have?',
      answer:
        'You can contact us and our 24/7 support will help you pick the perfect rig with details for every component included.',
    }
  ],
  [
    {
      question: 'Something here?',
      answer:
        'Something else here',
    },
    {
      question: 'Can we expect more inventory features?',
      answer: 'In life it’s really better to never expect anything at all.',
    },
  ],
]

export function Faqs() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="relative overflow-hidden bg-slate-50 py-20 sm:py-32"
    >
      <h2 id="faq-title" className="sr-only">
        Frequently asked questions
      </h2>
      <div className="absolute top-0 left-1/2 -translate-x-[30%] -translate-y-[25%]">
        <Image
          src={backgroundImage}
          alt=""
          width={1558}
          height={946}
          layout="fixed"
          unoptimized
        />
      </div>
      <Container className="relative">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <p className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">
            Frequently asked questions
          </p>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            If you can’t find what you’re looking for, email our support team
            and if you’re lucky someone will get back to you.
          </p>
        </div>
        <ul className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
          {faqs.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul className="space-y-8">
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    <h3 className="font-display text-lg leading-7 text-slate-900">
                      {faq.question}
                    </h3>
                    <p className="mt-4 text-sm text-slate-700">{faq.answer}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
