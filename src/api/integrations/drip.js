function DripApi (apiKey) {
  this.client = require('drip-api')({
    apiKey: apiKey
  });
}

DripApi.prototype.getCustomers = () => {
  return this.client.accounts().then(d => d);
};
