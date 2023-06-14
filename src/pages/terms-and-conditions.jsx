import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XIcon } from '@heroicons/react/outline'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

export default function TermsAndConditions() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <>
            <Header />
            <div className="relative h-[75px] overflow-hidden" />

            <Transition.Root show={mobileMenuOpen} as={Fragment}>
                <Dialog
                    as="div"
                    className="fixed inset-0 z-40 flex lg:hidden"
                    onClose={setMobileMenuOpen}
                >
                    <Transition.Child
                        as={Fragment}
                        enter="transition-opacity ease-linear duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="transition-opacity ease-linear duration-300"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <Transition.Child
                        as={Fragment}
                        enter="transition ease-in-out duration-300 transform"
                        enterFrom="-translate-x-full"
                        enterTo="translate-x-0"
                        leave="transition ease-in-out duration-300 transform"
                        leaveFrom="translate-x-0"
                        leaveTo="-translate-x-full"
                    >
                        <div className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
                            <div className="flex px-4 pt-5 pb-2">
                                <button
                                    type="button"
                                    className="-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    <span className="sr-only">Close menu</span>
                                    <XIcon className="h-6 w-6" aria-hidden="true" />
                                </button>
                            </div>
                        </div>
                    </Transition.Child>
                </Dialog>
            </Transition.Root>

            <main>
                <div className="mb-20 max-w-3xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                    <h1 className="font-[Anton] text-6xl uppercase text-center pt-10 pb-5">
                        Terms & Conditions
                    </h1>
                    <div className="prose prose-lg mx-auto">
                        <GeneralTerms />
                        <ProductsAndWarranty />
                        <ReturnsAndRefunds />
                        <LimitationOfLiability />
                        <IntellectualProperty />
                        <GoverningLaw />
                    </div>
                </div>
            </main>

            <Footer />
        </>
    )
}

const GeneralTerms = () => (
    <div className="mb-8">
        <h2 className="text-2xl font-bold mb-2">General Terms</h2>
        <p className="text-base">
            Welcome to TNTech, the leading provider of high-quality refurbished gaming computers.
            TNTech is a company registered under the laws of [Insert Country] and operates under the applicable laws and regulations of that jurisdiction.
            By accessing our website or purchasing our products, you confirm that you are at least 18 years old or have obtained parental/guardian consent.
            These Terms apply to all users and customers of TNTech.
            TNTech reserves the right to modify, update, or replace these Terms at any time without prior notice. By continuing to use our services, you agree to be bound by the revised Terms.
        </p>
    </div>
)

const ProductsAndWarranty = () => (
    <div className="mb-8">
        <h2 className="text-2xl font-bold mb-2">Products and Warranty</h2>
        <p className="text-base">
            TNTech specializes in selling refurbished gaming computers. These products may have undergone previous use but have been thoroughly tested, repaired, and restored to excellent working condition.
            TNTech provides a 30-day warranty from the date of purchase on all refurbished gaming computers. This warranty covers defects in materials and workmanship under normal use.
            The warranty does not cover damages caused by accidents, misuse, neglect, unauthorized modifications, or any other factors not arising from defects in materials and workmanship.
            To claim warranty service, the customer must contact TNTech through the provided contact information within the warranty period. TNTech will assess the issue and, at its discretion, repair, replace, or refund the product.
            TNTech will cover the cost of shipping for warranty claims within the warranty period.
        </p>
    </div>
)

const ReturnsAndRefunds = () => (
    <div className="mb-8">
        <h2 className="text-2xl font-bold mb-2">Returns and Refunds</h2>
        <p className="text-base">
            If you are not completely satisfied with your purchase, you may return the product within 14 days of the original purchase date.
            To initiate a return, the customer must contact TNTech through the provided contact information. TNTech will provide further instructions on the return process.
            The returned product must be in its original condition, including all accessories, manuals, and packaging materials. Any missing items may result in a deduction from the refund amount.
            Once TNTech receives the returned product and verifies its condition, a refund will be issued to the original payment method used for the purchase. The refund amount will exclude any shipping charges.
            The customer is responsible for covering the shipping costs associated with returning the product unless the return is due to an error on TNTech's part.
        </p>
    </div>
)

const LimitationOfLiability = () => (
    <div className="mb-8">
        <h2 className="text-2xl font-bold mb-2">Limitation of Liability</h2>
        <p className="text-base">
            TNTech is not liable for any indirect, incidental, special, or consequential damages arising out of or in connection with the use or inability to use our products or services.
            In no event shall TNTech's total liability exceed the amount paid by the customer for the purchased product or service.
        </p>
    </div>
)

const IntellectualProperty = () => (
    <div className="mb-8">
        <h2 className="text-2xl font-bold mb-2">Intellectual Property</h2>
        <p className="text-base">
            All intellectual property rights, including trademarks, copyrights, and patents, related to TNTech's products, website, and content, are the property of TNTech or its licensors.
            Users and customers are not permitted to use, reproduce, distribute, or modify TNTech's intellectual property without obtaining prior written consent from TNTech.
        </p>
    </div>
)

const GoverningLaw = () => (
    <div className="mb-8">
        <h2 className="text-2xl font-bold mb-2">Governing Law and Jurisdiction</h2>
        <p className="text-base">
            These Terms shall be governed by and construed in accordance with the laws of United States. Any disputes arising from these Terms shall be subject to the exclusive jurisdiction of the courts located in New York, United States.
            For any inquiries or concerns regarding these Terms or TNTech's services, please contact us at tntechshop.com@gmail.com. We will make every effort to address your questions in a timely manner.
            Thank you for choosing TNTech as your preferred refurbished gaming computer provider. Enjoy your gaming experience!
            Date of last update: 06/02/2023
        </p>
    </div>
)
