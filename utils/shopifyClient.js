import Client from 'shopify-buy';

const client = Client.buildClient({
    domain: 'tntechshop.myshopify.com',
    storefrontAccessToken: process.env.ACCESS_TOKEN,
});

export default client;
