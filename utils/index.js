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