import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import service from "../service";

export const getImg = createAsyncThunk(
  'CaVyNcHIKOZkP7cRY-JiipOfzXc2Q-xwd_gXbrnZrmA', 
  async (param, {rejectValue}) => {
    try {
      const res = await service.getImg();
      console.log('response :', res);
      return res;
    } catch (error) {
      rejectValue(error);
    }
  });

  const initialState = {
    images: []
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
      builder.addCase(getImg.fulfilled, (state, action) => {
        // console.log(action.payload, '<<<< payload');
        state.images = action.payload;
      });
    }
  })

  export const { setChangeImg } = sliceImg.actions;
  export default sliceImg.reducer;