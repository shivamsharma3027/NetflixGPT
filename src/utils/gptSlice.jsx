import { createSlice } from "@reduxjs/toolkit";

const gptSlice=createSlice({
  name:'gpt',
  initialState:{
    showGptSearch:false
  },
  reducers:{
    togglegptSearchView:(state)=>{
      state.showGptSearch=!state.showGptSearch
    }
  }
})

export const {togglegptSearchView}=gptSlice.actions;
export default gptSlice.reducer;