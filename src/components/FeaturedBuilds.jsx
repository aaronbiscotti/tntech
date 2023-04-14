import { Container } from '@/components/Container';
import { Carousel } from '@/components/Carousel';

export default function FeaturedBuilds(props) {
   const { products } = props || {}
 
   return (
     <Container className="relative flex h-full w-full items-center justify-between">
       <div className="relative h-full w-full bg-white">
         <div className="relative h-full max-w-7xl py-16">
           <h2 className="mb-10 text-center font-[Anton] text-6xl uppercase text-gray-900">
             FEATURED BUILDS
           </h2>
 
           <Carousel className="h-full w-full">
             {products.edges.map((item, i) => {
               const product = item.node
               const specs = product.metafield.value
               const image = product.images.edges[0].node
               return (
                 // <div className="grid grid-cols-3" key={i}>
                 <div className="h-full bg-black lg:flex" key={i}>
                   <Link
                     key={product.handle}
                     href={`/build-your-pc/products/${product.handle}`}
                   >
                     <a className="group col-span-2">
                       <div className="rounded-l">
                         <img
                           src={image.transformedSrc}
                           alt={image.altText}
                           className="object-cover object-center duration-100 ease-in group-hover:opacity-75"
                         />
                       </div>
                     </a>
                   </Link>
                   {/* <div className="col-span-1 h-full w-full bg-secondary rounded-r px-5 pb-5 flex flex-col justify-between pr-20"> */}
                   <div className="col-span-1 flex h-full w-full flex-col justify-between rounded-r bg-secondary px-5 pb-5 pr-20">
                     <div>
                       <div className="mt-4 mb-5 flex items-center justify-between text-base font-medium">
                         <h3 className="text-lg">{product.title}</h3>
                       </div>
                       <ul>
                         {specs.split('\n').map((spec, i) => (
                           <li
                             key={i}
                             className="flex items-center font-display text-sm"
                           >
                             <img src={icons[i]} className="h-10 w-10" />
                             {spec}
                           </li>
                         ))}
                       </ul>
                     </div>
                     <Link
                       key={product.handle}
                       href={`/build-your-pc/products/${product.handle}`}
                     >
                       <div>
                         <p className="text-2xl font-bold">
                           ${product.priceRange.minVariantPrice.amount}
                         </p>
                         <div className="mt-5 flex w-full cursor-pointer items-center justify-center rounded-md bg-gray-900 py-3 font-display text-white duration-300 ease-in-out hover:opacity-80">
                           Buy now
                         </div>
                       </div>
                     </Link>
                   </div>
                 </div>
               )
             })}
           </Carousel>
         </div>
       </div>
     </Container>
   )
 }


export async function getServerSideProps() {
   const { data } = await storefront(productsQuery)
   return {
     props: {
       products: data.products,
     },
   }
 }
 
 const gql = String.raw
 
 const productsQuery = gql`
   query Products {
     products(first: 3, query: "tag:featured") {
       edges {
         node {
           title
           handle
           priceRange {
             minVariantPrice {
               amount
             }
           }
           metafield(namespace: "custom", key: "specs") {
             value
           }
           images(first: 1) {
             edges {
               node {
                 transformedSrc
                 altText
               }
             }
           }
         }
       }
     }
   }
 `
 