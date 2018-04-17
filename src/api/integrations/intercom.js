import api from 'intercom-client';

class IntercomApi {
  constructor(token) {
    this.client = api.Client({token: token});
  }
  getAccounts() {
    return this.client.users.list(d => d);
  }
}
