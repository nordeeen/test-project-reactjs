import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import service from "../service";

  export const findImg = createAsyncThunk(
    '/search/photos',
    async (param, { rejectValue }) => {
      try {
        const res = await service.findImg(param.query, param.page);
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
    keyword: '',
    detailArr: []
  };

  const sliceImg = createSlice({
    name: 'sliceImg',
    initialState: { ...initialState },
    reducers: {
      setKeyword: (state, action) => {
        state.keyword = action.payload;
      },
      setDetailArr: (state, action) => {
        state.detailArr = action.payload;
      },
    },
    extraReducers: (builder) => {
      builder.addCase(findImg.fulfilled, (state, action) => {
        const newArr = state.images.concat(action.payload.results);
        state.images = newArr;
      });
    },
  });

  export const { setKeyword, setDetailArr } = sliceImg.actions;
  export default sliceImg.reducer;