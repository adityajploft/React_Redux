// import { createSlice } from "@reduxjs/toolkit";
// const initialState = { value: 0 };
// export const counterSlice = createSlice({
//   name: "counter",
//   initialState,
//   reducers: {},
// });
// export const { increment, decrement } = counterSlice.actions;
// export default counterSlice.reducer;

// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// export const showUser = createAsyncThunk(
//     "showUser",
//     async ({ rejectWithValue }) => {
//       const response = await fetch(
//         "https://642fe1d0c26d69edc885c2bc.mockapi.io/curd"
//       );
  
//       try {
//         const res = await response.JSON();
//         console.log(res);
//         return res;
//       } catch (error) {
//         console.log(error);
//         return rejectWithValue(error);
//       }
//     }
//   );


  
// export const showSlice = createSlice({
//     name: "showSlice",
//     initialState: {
//       user: [],
//       loading: false,
//       error: null,
//     },
//     extraReducers: {
  
//       // show || get
//       [showUser.pending]: (state) => {
//         state.loading = true;
//       },
//       [showUser.fulfilled]: (state, action) => {
//         state.loading = false;
//         state.user = action.payload;
//       },
//       [showUser.rejected]: (state, action) => {
//         state.loading = false;
//         state.users = action.payload;
//       },
//     },
//   });
  
//   export default showSlice.reducer;