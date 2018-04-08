const ShopifyApi = require('shopify-node-api');
const uuid = require('uuid/v4');
const { constants } = require('../../utils');

const authorize = (req, res) => {
  const api = new ShopifyApi({
    ...constants.defaultShopifyConfig,
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
