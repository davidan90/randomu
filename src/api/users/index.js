import { checkStatus, logError } from '../utils';


const users = {
  endpoints(params) {
    const mainUrl = 'https://randomuser.me/api';
    return {
      all: `${mainUrl}/?results=10&seed=randomu&page=${params.page}`,
    };
  },

  async getAll(page = 1) {
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    };
    return fetch(this.endpoints({ page }).all, options)
      .then(checkStatus)
      .then(response => response.json())
      .then(data => data)
      .catch(logError('Users getAll'));
  },
};

export default users;
