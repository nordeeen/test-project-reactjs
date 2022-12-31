import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import service from "../service";
import { apiKey } from "../service";


export const getImg = createAsyncThunk(
  `${apiKey}`, 
  async (param, {rejectValue}) => {
    try {
      const res = await service.getImg();
      console.log('response :', res);
      return res;
    } catch (error) {
      rejectValue(error);
    }
  });

  export const findImg = createAsyncThunk(
    '/search/photos',
    async (param, { rejectValue }) => {
      try {
        const res = await service.findImg(param.query, param.page);
        console.log('find img :', res);
        return res;
      } catch (error) {
        rejectValue(error);
      }
    }
  );

  export const getImgDetail = createAsyncThunk(
    '/search/photos',
    async (param, { rejectValue }) => {
      try {
        const res = await service.getImgDetail(id);
        console.log('id img :', res);
        return res;
      } catch (error) {
        rejectValue(error);
      }
    }
  );


  const initialState = {
    images: [],
    findImages: {},
    isLoading: false,
  };

  const sliceImg = createSlice({
    name: 'sliceImg',
    initialState: {...initialState},
    reducers: {
      setChangeImg: (state, action) => {
        state[action.payload.key] = action.payload.value;
      },
    },
    extraReducers: (builder) => {
      builder.addCase(findImg.fulfilled, (state, action) => {
        // console.log(action.payload, '<<<< payload');
        state.images = action.payload.results;
      });
    }
  })

  export const { setChangeImg } = sliceImg.actions;
  export default sliceImg.reducer;