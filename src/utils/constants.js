const defaultShopifyConfig = {
  shopify_api_secret: process.env.SHOPIFY_SECRET,
  shopify_api_key: process.env.SHOPIFY_API_KEY,
  shopify_scope: process.env.SHOPIFY_SCOPES,
  verbose: false,
  rate_limit_delay: 5000,
  backoff: 36,
  backoff_delay: 1500
};

module.exports = {
  defaultShopifyConfig
}
