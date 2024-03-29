const perks = [
  {
    name: 'Let us know your requirements',
    imageSrc: '/pc.svg',
    description:
      "Scour our collections for computers that match your requirements, or sign up for a consultation with one of our experts. We build according to YOUR budget and needs.",
  },
  {
    name: 'We build it',
    imageSrc: 'https://tailwindui.com/img/ecommerce/icons/icon-warranty-light.svg',
    description:
      "Once you have your desired specifications, we'll determine the best latest technologies for you when it comes to processors, memory, and graphics cards. Before shipment, we perform multiple play tests to ensure the highest quality PC is delivered.",
  },
  {
    name: 'Secure payment & shipment',
    imageSrc: 'https://tailwindui.com/img/ecommerce/icons/icon-delivery-light.svg',
    description:
      'For prebuilt and custom gaming computers, we handle the packaging and shipping. Leave all your worries at the door, we\'ll provide you with secure packaging and detailed tracking on where your computer is in the process.',
  },
  {
    name: 'Enjoy your favorite games',
    imageSrc: 'https://tailwindui.com/img/ecommerce/icons/icon-planet-light.svg',
    description:
      "Plug in your mouse, keyboard, and a monitor, and enjoy the latest games for the best quality experience!",
  },
]

export default function HowItWorks() {
  return (
    <div className="bg-gray-50 sm:mt-20 relative h-full" id="how-it-works">
      {/* <img src="/leftside.png" className="absolute h-full" />
      <img src="/right.png" className="absolute h-full right-0" /> */}
      <div className="max-w-7xl mx-auto py-24 sm:px-4 sm:py-32 lg:px-8">
        <p className="mt-8 uppercase text-center font-title text-5xl sm:text-6xl mb-20">
          How it works
        </p>
        <div className="max-w-2xl mx-auto px-4 grid grid-cols-1 gap-y-12 gap-x-8 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
          {perks.map((perk) => (
            <div key={perk.name} className="sm:flex">
              <div className="sm:flex-shrink-0 flex justify-center sm:justify-start">
                <div className="flow-root">
                  <img className="w-28 h-24" src={perk.imageSrc} alt="" />
                </div>
              </div>
              <div className="mt-3 sm:mt-0 sm:ml-3 text-center sm:text-left">
                <h3 className="text-xl font-medium text-main">{perk.name}</h3>
                <p className="mt-2 text-main">{perk.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
