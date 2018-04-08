const api = require('intercom-client');

function IntercomApi (token) {
  this.client = api.Client({token: token});
}

IntercomApi.prototype.getAccounts = () => {
  return this.client.users.list(d => d);
};
