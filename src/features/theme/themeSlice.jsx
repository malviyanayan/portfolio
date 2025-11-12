import { createSlice } from '@reduxjs/toolkit';

const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    value: true,  //Assuming this is a boolean for dark mode toggle
  },
  reducers: {
    changeTheme: (state) => { state.value = !state.value; },
  },
});

export const { changeTheme } = themeSlice.actions;
export default themeSlice.reducer;
