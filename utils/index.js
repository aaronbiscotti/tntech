export async function storefront(query, variables = {}) {
    const response = await fetch(
        process.env.API_URL,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "X-Shopify-Storefront-Access-Token": process.env.ACCESS_TOKEN
            },
            body: JSON.stringify({ query, variables }),
        }
    )
    return response.json()
}

export async function createCheckout(id, quantity) {
    const query = `
      mutation {
        checkoutCreate(input: {
          lineItems: [{ variantId: "${id}", quantity: ${quantity}}]
        }) {
          checkout {
            id
            webUrl
          }
        }
      }`;

    const response = await ShopifyData(query);

    const checkout = response.data.checkoutCreate.checkout
        ? response.data.checkoutCreate.checkout
        : [];

    return checkout;
}

export async function updateCheckout(id, lineItems) {
    const lineItemsObject = lineItems.map((item) => {
        return `{
        variantId: "${item.id}",
        quantity:  ${item.variantQuantity}
      }`;
    });

    const query = `
    mutation {
      checkoutLineItemsReplace(lineItems: [${lineItemsObject}], checkoutId: "${id}") {
        checkout {
          id
          webUrl
          lineItems(first: 25) {
            edges {
              node {
                id
                title
                quantity
              }
            }
          }
        }
      }
    }`;

    const response = await ShopifyData(query);

    const checkout = response.data.checkoutLineItemsReplace.checkout
        ? response.data.checkoutLineItemsReplace.checkout
        : [];

    return checkout;
}