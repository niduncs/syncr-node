class DripApi {
  constructor(apiKey) {
    this.client = require('drip-api')({
      apiKey: apiKey
    });
  }
  getCustomers() {
    return this.client.accounts().then(d => d);
  }
}
