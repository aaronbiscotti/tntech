import Image from 'next/image'
import { Container } from '@/components/Container'

import React, { useEffect, useState } from 'react'
import Faq from 'react-faq-component'

// const faqs = [
//   [
//     {
//       question: 'Are these prebuilt rigs?',
//       answer:
//         'No, we\'ll send you everything you need to build it yourself!',
//     },
//     {
//       question: 'Can I finance my order?',
//       answer: 'At the moment, we do not support financing.',
//     },
//   ],
//   [
//     {
//       question: 'How will I get my order?',
//       answer:
//         'We\'ll send you a box with everything you need.',
//     },
//     {
//       question:
//         'How do I know if the computer I purchase has the performance I need it to have?',
//       answer:
//         'You can contact us and our 24/7 support will help you pick the perfect rig with details for every component included.',
//     }
//   ],
//   [
//     {
//       question: 'Something here?',
//       answer:
//         'Something else here',
//     },
//     {
//       question: 'Can we expect more inventory features?',
//       answer: 'In life it’s really better to never expect anything at all.',
//     },
//   ],
// ]

const data = {
  rows: [
    {
      title: <p className="font-semibold">Are these prebuilt rigs?</p>,
      content: "Yes, all of our PCs are ready to be up and running straight out of the box!",
    },
    {
      title: <p className="font-semibold">Can I finance my order?</p>,
      content: 'At the moment, we do not support financing.',
    },
    {
      title: <p className="font-semibold">How will I get my order?</p>,
      content: "We'll send you a box with everything you need.",
    },
    {
      title: <p className="font-semibold">How do I know which PC fits my expectations?</p>,
      content:
        'You can contact us via Instagram and our 24/7 support will help you pick the perfect rig.',
    },
    {
      title: <p className="font-semibold">How long will it take to receive my order?</p>,
      content: 'Shipping times are dependent on your location however it should not exceed a week.',
    },
    {
      title: <p className="font-semibold">What should I do if I am experiencing an issue with my product?</p>,
      content: 'You can contact us via Instagram and our 24/7 support will get right back to you!',
    },
  ],
}

const styles = {
  bgColor: '#C4D7E3',
  titleTextColor: 'black',
  rowTitleColor: 'black',
  // rowContentColor: 'grey',
  // arrowColor: "red",
}

const config = {
  animate: true,
  // arrowIcon: "A",
  tabFocus: true
}

export function Faqs() {
  return (
    <div className="bg-[#C4D7E3] lg:p-24 p-12">
      <div className="mb-8">
        <p className="font-[Anton] text-6xl uppercase sm:text-6xl">
          Frequently asked questions
        </p>
        <p className="mt-4 text-lg text-gray-600 tracking-tight">
          If you can’t find what you’re looking for, email our support team and
          if you’re lucky someone will get back to you.
        </p>
      </div>
      <div className="font-display">
        <Faq data={data} styles={styles} config={config} />
      </div>
    </div>
  )
}
// export function Faqs() {
//   return (
//     <section
//       id="faq"
//       aria-labelledby="faq-title"
//       className="relative overflow-hidden bg-no-repeat bg-cover pt-20 pb-28 sm:py-[170px] bg-faqbg"
//     >
//       <h2 id="faq-title" className="sr-only">
//         Frequently asked questions
//       </h2>
//       {/* <img src="/machine.png" className="absolute top-0 right-0 h-full" /> */}
//       <Container className="relative">
//         <div className="mx-auto max-w-3xl lg:mx-0">
//           <p className="font-[Anton] text-3xl uppercase sm:text-6xl">
//             Frequently asked questions
//           </p>
//           <p className="mt-4 text-lg tracking-tight">
//             If you can’t find what you’re looking for, email our support team
//             and if you’re lucky someone will get back to you.
//           </p>
//         </div>
//         <ul className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
//           {faqs.map((column, columnIndex) => (
//             <li key={columnIndex}>
//               <ul className="space-y-8">
//                 {column.map((faq, faqIndex) => (
//                   <li key={faqIndex}>
//                     <h3 className="font-display text-lg leading-7 font-bold">
//                       {faq.question}
//                     </h3>
//                     <p className="mt-4 text-sm">{faq.answer}</p>
//                   </li>
//                 ))}
//               </ul>
//             </li>
//           ))}
//         </ul>
//       </Container>
//     </section>
//   )
// }
