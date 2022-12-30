import React, {useEffect, useState} from 'react'
import Jumbotron from './components/Jumbotron'
import SearchImages from './components/SearchImages'
import WrapperImg from './components/WrapperImg'
// import useAxios from './hooks/useAxios'
import axios from 'axios'


function App() {
  const [img, setImg] = useState([]);
    const fetchApi = async () => {
      const res = await axios.get(`https://api.unsplash.com/photos/?client_id=CaVyNcHIKOZkP7cRY-JiipOfzXc2Q-xwd_gXbrnZrmA`);
      const datas = res.data
      console.log(datas);
      setImg(datas);
    }

    useEffect(() => {
      fetchApi();
    }, [])

  return (
    <>
    <Jumbotron>
      <SearchImages/>
    </Jumbotron>
    <WrapperImg/>
    </>
  )
}

export default App
