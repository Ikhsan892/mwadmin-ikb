import { createSlice, PayloadAction, Slice } from "@reduxjs/toolkit";
import { IDashboard } from "@mwadmin/type/dashboardType";

const initialState: IDashboard = {
  color: "primary",
  dark: false,
  notification: [],
};

// @ts-ignore
const dashboardSlice: Slice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    darkMode: (state, action: PayloadAction<string>) => {
      return {
        ...state,
        dark: action.payload,
      };
    },
  },
});

export const { darkMode } = dashboardSlice.actions;

export default dashboardSlice.reducer;
