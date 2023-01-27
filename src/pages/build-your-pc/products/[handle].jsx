import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { storefront } from 'utils'
import { useState } from 'react';
import ReactHtmlParser from 'react-html-parser';


export default function ProductPage({ product }) {
    const images = product.images.edges
    const variantId = product.variants.edges[0].node.id
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
    console.log(variantId);
    const checkout = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        const { data } = await storefront(checkoutMutation, { variantId });
        const { webUrl } = data.checkoutCreate.checkout;

        window.location.href = webUrl;
    };
    return (
        <>
            <Header />
            <div className="relative overflow-hidden h-[140px]" />
            <div className="bg-white">
                <div className="pt-6">
                    <div className="flex mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-6 lg:gap-x-8 lg:px-8">
                        <div className="flex flex-col">
                            {images.map((image, i) => (
                                <img key={i} src={image.node.url} alt={image.altText} className="w-full object-cover cursor-pointer rounded-lg mb-4" onClick={() => {
                                    product.featuredImage = image
                                }} />
                            ))}
                        </div>
                        <div className="relative rounded-lg col-span-5">
                            <img src={images[0].node.url} className="object-cover rounded-lg" />
                        </div>
                    </div>
                    {/* Product info */}
                    <div className="mx-auto max-w-2xl px-4 pt-10 pb-16 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pt-16 lg:pb-24">
                        <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
                            <h1 className="text-4xl font-[Anton] uppercase text-main sm:text-5xl">{product.title}</h1>
                            <h1 className="text-3xl font-display mt-3 text-main sm:text-3xl">${product.priceRange.minVariantPrice.amount}</h1>
                        </div>
                        <div className="mt-4 lg:row-span-3 lg:mt-0">
                            <form>
                                <button
                                    onClick={checkout}
                                    type="submit"
                                    className="flex w-full items-center justify-center rounded-md border border-transparent bg-main py-3 px-8 text-base font-medium duration-100 ease-in text-white hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
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

                        <div className="lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8">
                            <div className="mt-5">
                                <div className="space-y-6">
                                    <div className="text-base text-gray-900">
                                        {ReactHtmlParser(product.descriptionHtml, { transform })}
                                    </div>
                                </div>
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

export async function getStaticPaths() {
    const { data } = await storefront(gql`
        {
            products(first: 6) {
                edges {
                     node {
                        handle
                     }
                }
            }
        }
    `)
    return {
        paths: data.products.edges.map(product => ({ params: { handle: product.node.handle } })),
        fallback: false,
    }
}

export async function getStaticProps({ params }) {
    const { data } = await storefront(singleProductQuery, { handle: params.handle })
    return {
        props: {
            product: data.product,
        }
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

const checkoutMutation = gql`
    mutation CheckoutCreate($variantId: ID!) {
        checkoutCreate(input: {
            lineItems: {
                variantId: $variantId,
                quantity: 1
            } 
        }) {
            checkout {
                webUrl
            }
        }
    }
`