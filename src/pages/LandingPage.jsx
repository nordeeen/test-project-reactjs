import React, { useState } from 'react';
import Jumbotron from '../components/Jumbotron';
import SearchImages from '../components/SearchImages';
import WrapperImg from '../components/WrapperImg';
import { useDispatch, useSelector } from 'react-redux';
import { findImg, setKeyword } from '../store/reducers';



const LandingPage = () => {
  const [currPage, setCurrPage] = useState(1);
  const dispatch = useDispatch();
  const {keyword} = useSelector(state => state);

  window.onscroll = () => {
    let userScrollHeight = window.innerHeight + window.scrollY + 1;
    let splitHeight = userScrollHeight.toString().split('.')[0];
    let windowBottomHeight = document.documentElement.offsetHeight;


    if (parseInt(splitHeight) === windowBottomHeight) {
      setCurrPage(currPage + 1);
        loadImage(currPage);
    }
  };

  const onChangeHandler = (e) => {
    let {value} = e.target;
    dispatch(setKeyword(value));
  }

  const onSearchImg = (e) => {
    e.preventDefault();
    if(!keyword) {
      return;
    }   
    loadImage(1)
  };

  const loadImage = (page) => {
    dispatch(findImg({ query: keyword, page: page }));
  }; 

  return (
    <>
      <Jumbotron>
        <SearchImages onChange={onChangeHandler} value={keyword} onSubmit={onSearchImg} />
      </Jumbotron>
      <WrapperImg />
    </>
  );
};

export default LandingPage;
