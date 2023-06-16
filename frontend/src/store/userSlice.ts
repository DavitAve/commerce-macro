import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getUserApi } from "../apis/user";
import { IUserState } from "../interfaces/store";

export const getUser: any = createAsyncThunk(
  "getUser",
  async ({ name, pass }: { name: string; pass: string }) =>
    getUserApi(name, pass)
);

const initialState: IUserState = {
  user: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUser.fulfilled, (state: any, action) => {
      state.user = action.payload;
    });
  },
});

// export const { increment } = userSlice.actions;
export default userSlice.reducer;
