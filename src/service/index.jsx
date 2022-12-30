import axios from "axios";

const api = axios.create({ baseURL:'https://api.unsplash.com/photos/?client_id=CaVyNcHIKOZkP7cRY-JiipOfzXc2Q-xwd_gXbrnZrmA',});

const service = {
  getImg: async () => {
    try {
      const res = await api.get()
      console.log('datas api :', res.data);
      return res.data;
    } catch (error) {
      return error
    }
  }
}

export default service;