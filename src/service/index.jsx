import axios from "axios";

export const apiKey = 'CaVyNcHIKOZkP7cRY-JiipOfzXc2Q-xwd_gXbrnZrmA';
// https://api.unsplash.com/photos/?client_id=${apiKey}
const api = axios.create({ baseURL:'https://api.unsplash.com'});
export const searchImg = axios.create({baseURL: `https://api.unsplash.com/search/photos?client_id=${apiKey}&query=office&page=1`});


const service = {
  getImg: async () => {
    try {
      const res = await api.get('/photos/', {
        params: {
          client_id: apiKey,
        },
      });
      console.log('datas api :', res.data);
      return res.data;
    } catch (error) {
      return error;
    }
  },
  findImg: async (query, page) => {
    try {
      const res = await api.get('/search/photos', {
        params: {
          client_id: apiKey,
          query,
          page,
        },
      });
      return res.data;
    } catch (error) {
      return error;
    }
  },
};

export default service;