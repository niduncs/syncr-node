const ShopifyApi = require('shopify-node-api');
const uuid = require('uuid/v4');

const defaultShopifyConfig = {
  shopify_api_secret: process.env.SHOPIFY_SECRET,
  shopify_api_key: process.env.SHOPIFY_API_KEY,
  shopify_scope: process.env.SHOPIFY_SCOPES,
  verbose: false,
  rate_limit_delay: 5000,
  backoff: 36,
  backoff_delay: 1500
};

const authorize = (req, res) => {
  const api = new ShopifyApi({
    ...defaultShopifyConfig,
    shop: req.query.shop,
    redirect_uri: process.env.SHOPIFY_CALLBACK_URL,
    nonce: uuid()
  });

  return res.json({ redirect_url: api.buildAuthURL() });
};

const install = (req, res) => {
  const api = new ShopifyApi({
    ...defaultShopifyConfig,
    shop: req.params.shop
  });

  api.exchange_temporary_token(req.query, (err, data) => {
    if (err || !data['access_token']) return res.json({ success: false });
    return res.json({success: true});
  });

  return res.json({ success: false });
};

module.exports = {
  authorize,
  install
};
