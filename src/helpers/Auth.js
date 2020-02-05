/*
 * auth.js
 */
import store from 'store';

const auth = {
  logout() {
    store.remove('APP_USER');
    store.remove('APP_USER_TOKEN');
  },

  loggedIn() {
    return !!store.get('APP_USER');
  },

  userToken() {
    let token = store.get('APP_USER_TOKEN');
    if (token && typeof token !== 'undefined') {
      token = JSON.parse(token);
    }
    return token;
  },

  userData() {
    let userData = store.get('APP_USER');
    if (userData && typeof userData !== 'undefined') {
      userData = JSON.parse(userData);
    }
    return userData;
  },

  setUserData(userData) {
    store.set('APP_USER', JSON.stringify(userData));
    if (typeof userData.api_token !== 'undefined') {
      store.set('APP_USER_TOKEN', JSON.stringify(userData.api_token));
    }
  },
};

export default auth;
