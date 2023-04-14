import { Container } from '@/components/Container'


const testimonials = [
  [
    {
      content:
        'TNTech made it very convenient for me to choose my own pc even though my budget was relatively low. They helped me throughout the entire process and were very responsive.',
      author: {
        name: 'Benson',
      },
    },
    {
      content:
        'I bought a great PC from TNTECH for a great price, capable of playing any game desired.',
      author: {
        name: 'Henry',
      },
    },
  ],
  [
    {
      content:
        'Great customer service, very fast replies. They helped me choose the right pc for me!',
      author: {
        name: 'Roger',
      },
    },
    {
      content:
        'Great company. Responds fast and are reliable. Don’t be shy and buy from them. Best prices for the pc parts on the market. I love the pc I bought from them!',
      author: {
        name: 'Ryan',
      },
    },
  ],
  [
    {
      content:
        'Great pc, performance exceeded my expectations.',
      author: {
        name: 'Amir',
      },
    },
    {
      content:
        'Would definitely recommend resorting to TNTech if you are looking to buy a computer or laptop. I’ve saved at least $500 thanks to TNTech.',
      author: {
        name: 'Cardin',
      },
    },
  ],
]

export function Testimonials() {
  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-title"
      className="bg-slate-50 py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl md:text-center">
          <h2
            id="testimonials-title"
            className="font-[Anton] uppercase text-4xl text-main sm:text-6xl"
          >
            Loved by gamers worldwide.
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            Our experience is so simple that people can’t help but fall in love
            with it.
          </p>
        </div>
        <ul className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:gap-8 lg:mt-20 lg:max-w-none lg:grid-cols-3">
          {testimonials.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul className="space-y-6 sm:space-y-8">
                {column.map((testimonial, testimonialIndex) => (
                  <li key={testimonialIndex}>
                    <figure className="relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10">
                      <svg
                        aria-hidden="true"
                        width={105}
                        height={78}
                        className="absolute top-6 left-6 fill-slate-100"
                      >
                        <path d="M25.086 77.292c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622C1.054 58.534 0 53.411 0 47.686c0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C28.325 3.917 33.599 1.507 39.324 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Zm54.24 0c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622-2.11-4.52-3.164-9.643-3.164-15.368 0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C82.565 3.917 87.839 1.507 93.564 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Z" />
                      </svg>
                      <blockquote className="relative">
                        <p className="text-lg tracking-tight text-slate-900">
                          {testimonial.content}
                        </p>
                      </blockquote>
                      <figcaption className="relative flex items-center justify-between pt-6">
                        <div>
                          <div className="font-display text-base text-slate-900">
                            {testimonial.author.name}
                          </div>
                        </div>
                      </figcaption>
                    </figure>
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
