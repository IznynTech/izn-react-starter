import { Http } from './http';
import endpoint from './endpoint';

export default {
  login(data) {
    return Http.post(endpoint.login, data);
  },

  logout() {
    return Http.post(endpoint.logout);
  },

  register(data) {
    return Http.post(endpoint.register, data);
  },

  forgotPassword(data) {
    return Http.post(endpoint.forgotPassword, data);
  },

  resetPassword(data) {
    return Http.post(endpoint.resetPassword, data);
  },
};
