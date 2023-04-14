// createCheckout.js
import { GraphQLClient } from 'graphql-request';

const graphQLClient = new GraphQLClient('https://tntechshop.myshopify.com/api/2023-04/graphql.json', {
    headers: {
        'Content-Type': 'application/json',
        'X-Shopify-Storefront-Access-Token': '429049546d68d4f0fb34eb364b557d35',
    },
});

const createCheckout = async (variantId, quantity) => {
    const checkoutData = {
        query: `
        mutation($input: CheckoutCreateInput!) {
          checkoutCreate(input: $input) {
            checkout {
              id
              webUrl
            }
            checkoutUserErrors {
              code
              field
              message
            }
          }
        }
      `,
        variables: {
            input: {
                lineItems: [{ variantId, quantity }],
            },
        },
    };

    try {
        const response = await graphQLClient.request(checkoutData.query, checkoutData.variables);
        console.log('Checkout response:', response); // Add this line
        const errors = response.checkoutCreate.checkoutUserErrors;
        if (errors.length) {
            console.error('Checkout creation errors:', errors);
            return null;
        }
        return response.checkoutCreate.checkout;
    } catch (error) {
        console.error('Error creating checkout:', error);
        return null;
    }
};

export { createCheckout };
