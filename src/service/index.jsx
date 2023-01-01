import axios from 'axios';

export const apiKey = 'CaVyNcHIKOZkP7cRY-JiipOfzXc2Q-xwd_gXbrnZrmA';
const api = axios.create({ baseURL: 'https://api.unsplash.com' });

const service = {
  findImg: async (query, page, per_page = 5) => {
    try {
      const res = await api.get('/search/photos', {
        params: {
          client_id: apiKey,
          query,
          page,
          per_page,
        },
      });
      return res.data;
    } catch (error) {
      return error;
    }
  },
};

export default service;
