import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// create Action

export const createuser = createAsyncThunk(
  "createUser",
  async (data, { rejectWithValue }) => {
    const response = await fetch(
      "https://642fe1d0c26d69edc885c2bc.mockapi.io/curd",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    try {
      const res = await response.JSON();
      console.log(res);
      return res;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error);
    }
  }
);

// Read Action get user

export const showUser = createAsyncThunk(
  "showUser",
  async (args, { rejectWithValue }) => {
    const response = await fetch(
      "https://642fe1d0c26d69edc885c2bc.mockapi.io/curd"
    );

    try {
      const res = await response.json();
      console.log(res);
      return res;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error);
    }
  }
);

// delete action
export const deleteUser = createAsyncThunk(
  "deleteUser",
  async (id, { rejectWithValue }) => {
    const response = await fetch(
      `https://642fe1d0c26d69edc885c2bc.mockapi.io/curd/${id}`,
      { method: "Delete" }
    );

    try {
      const res = await response.json();
      console.log(res);
      return res;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error);
    }
  }
);
// update || edit
export const upDateUser = createAsyncThunk(
  "upDateUser",
  async (data, { rejectWithValue }) => {
    console.log("Update Data", data);
    const response = await fetch(
      `https://642fe1d0c26d69edc885c2bc.mockapi.io/curd/${data.id}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    try {
      const res = await response.json();
      console.log(res);
      return res;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error);
    }
  }
);

export const userDetail = createSlice({
  name: "userDetail",
  initialState: {
    user: [],
    loading: false,
    error: null,
    searchData: [],
  },
  //  Actions and states are held together by a function called Reducer
  reducers: {
    searchUser: (state, action) => {
      console.log(action.payload)
      state.searchData = action.payload;
    },
  },
  // it is used to handle api's
  extraReducers: {
    // create users
    [createuser.pending]: (state) => {
      state.loading = true;
    },
    [createuser.fulfilled]: (state, action) => {
      state.loading = false;
    },
    [createuser.rejected]: (state, action) => {
      state.loading = false;
      state.users = action.payload;
    },
    // show || get
    [showUser.pending]: (state) => {
      state.loading = true;
    },
    [showUser.fulfilled]: (state, action) => {
      state.loading = false;
      state.user = action.payload;
    },
    [showUser.rejected]: (state, action) => {
      state.loading = false;
      state.users = action.payload;
    },
    // delete||users
    [deleteUser.pending]: (state) => {
      state.loading = true;
    },
    [deleteUser.fulfilled]: (state, action) => {
      state.loading = false;
      const { id } = action.payload;
      if (id) {
        state.user = state.user.filter((element) => element.id !== id);
      }
    },
    [deleteUser.rejected]: (state, action) => {
      state.loading = false;
      state.users = action.payload;
    },
    // update || edit || put
    [upDateUser.pending]: (state) => {
      state.loading = true;
    },
    [upDateUser.fulfilled]: (state, action) => {
      state.loading = false;
      state.users = state.user.map((element) =>
        element.id === action.payload.id ? action.payload : element
      );
    },
    [upDateUser.rejected]: (state, action) => {
      state.loading = false;
      state.users = action.payload;
    },
  },
});

export default userDetail.reducer;
export const { searchUser } = userDetail.actions;
