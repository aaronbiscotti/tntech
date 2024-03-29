import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { storefront } from 'utils';
import { useState } from 'react';
import ReactHtmlParser from 'react-html-parser';
import { createCheckout } from 'utils/createCheckout';

const icons = [
    "https://content.ibuypower.com/cdn-cgi/image/width=3840,format=auto,quality=75/https://content.ibuypower.com/Images/Base/icon_cpu.svg",
    "https://content.ibuypower.com/cdn-cgi/image/width=3840,format=auto,quality=75/https://content.ibuypower.com/Images/Base/icon_gpu.svg",
    "https://content.ibuypower.com/cdn-cgi/image/width=3840,format=auto,quality=75/https://content.ibuypower.com/Images/Base/icon_memory.svg",
    "https://content.ibuypower.com/cdn-cgi/image/width=3840,format=auto,quality=75/https://content.ibuypower.com/Images/Base/icon_hard drive.svg",
]

export default function ProductPage({ product }) {
    const images = product.images.edges
    const specs = product.metafield.value.split('\n');
    const variantId = product.variants.edges[0].node.id
    const [featuredImage, setFeaturedImage] = useState(images[0]);
    const [isLoading, setIsLoading] = useState(false);
    const transform = (node, index) => {
        if (node.type === 'tag' && node.name === 'li') {
            return (
                <li key={index} className="list-disc ml-10">
                    {node.children.map((child, i) => ReactHtmlParser(child.data, { transform }))}
                </li>
            );
        }
    };

    async function checkout(e) {
        e.preventDefault();
        setIsLoading(true);
        try {
            const checkout = await createCheckout(variantId, 1);
            if (checkout && checkout.webUrl) {
                window.location.href = checkout.webUrl;
            } else {
                console.error('Checkout URL not found');
            }
        } catch (error) {
            console.error('Error handling checkout:', error);
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <>
            <Header />
            <div className="bg-white flex justify-center">
                <div className="pt-6">
                    <div className="mx-3 max-w-2xl px-4 pt-10 pb-16 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-4 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pt-16 lg:pb-24">
                        <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
                        </div>
                        <div className="mt-4 lg:row-span-3 lg:col-span-2 lg:mt-0">
                            <h1 className="text-4xl font-[Anton] uppercase text-main sm:text-5xl">{product.title}</h1>
                            <div className="w-[100px] h-1 bg-black mt-4 mb-7" />
                            <div className="lg:hidden lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8">
                                <div className="relative rounded-lg max-w-xl">
                                    <img src={featuredImage.node.url} className="object-cover rounded-lg" />
                                </div>
                                <div className="flex mt-2 space-x-2 overflow-x-auto">
                                    {images.map((image
                                        , i) => (
                                        <img key={i} src={image.node.url} alt={image.altText} className="h-14 object-cover cursor-pointer rounded-lg mb-4" onClick={() => {
                                            setFeaturedImage(image)
                                        }} />
                                    ))}
                                </div>
                            </div>
                            <h1 className="text-3xl font-display mt-3 text-main sm:text-3xl">${product.priceRange.minVariantPrice.amount}</h1>
                            <button
                                onClick={checkout}
                                type="submit"
                                className="flex mt-5 sm:hidden w-full items-center justify-center rounded-md border border-transparent bg-main py-3 px-8 mb-8 text-base font-medium duration-100 ease-in text-white hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                            >
                                {isLoading && (
                                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                )}
                                Buy Now
                            </button>
                            <div className="mt-5">
                                <div className="space-y-6">
                                    <div className="text-base text-gray-900">
                                        {ReactHtmlParser(product.descriptionHtml, { transform })}
                                    </div>
                                </div>
                            </div>
                            <div className="mb-10">
                                <h1 className="font-display font-semibold text-xl mb-2 mt-5">Specifications</h1>
                                <ul>
                                    {specs.map((spec, i) => (
                                        <li key={i} className="flex items-center text-sm font-display">
                                            <img src={icons[i]} className="w-10 h-10" />
                                            {spec}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <form>
                                <button
                                    onClick={checkout}
                                    type="submit"
                                    className="hidden sm:flex w-full items-center justify-center rounded-md border border-transparent bg-main py-3 px-8 mb-8 text-base font-medium duration-100 ease-in text-white hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                >
                                    {isLoading && (
                                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                    )}
                                    Buy Now
                                </button>
                            </form>
                        </div>

                        <div className="hidden lg:block lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8">
                            <div className="relative rounded-lg max-w-xl">
                                <img src={featuredImage.node.url} className="object-cover rounded-lg" />
                            </div>
                            <div className="flex mt-2 space-x-2 overflow-x-auto">
                                {images.map((image, i) => (
                                    <img key={i} src={image.node.url} alt={image.altText} className="h-14 object-cover cursor-pointer rounded-lg mb-4" onClick={() => {
                                        setFeaturedImage(image)
                                    }} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
const gql = String.raw

export async function getServerSideProps({ params }) {
    const handle = params.handle[0];
    const { data } = await storefront(singleProductQuery, { handle })
    console.log("Data from API:", JSON.stringify(data, null, 2));
    return {
        props: {
            product: data.product,
        },
    }
}

const singleProductQuery = gql`
    query SingleProduct($handle: String!) {
        product(handle: $handle) {
            title
            descriptionHtml
            priceRange {
                minVariantPrice {
                    amount
                }
            }
            metafield(namespace: "custom", key: "specs") {
                value
            }
            images(first: 20) {
                edges {
                    node {
                        id
                        url
                    }
                }
            }
            variants(first: 1) {
                edges {
                    node {
                        id
                    }
                }
            }
        }
    }
`