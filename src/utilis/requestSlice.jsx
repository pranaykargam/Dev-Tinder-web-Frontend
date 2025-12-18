import { createSlice } from "@reduxjs/toolkit";
const requestSlice = createSlice({
  name: "requests",
  initialState: [], // <-- change null to []
  reducers: {
    addRequests: (state, action) => {
      console.log("Reducer received payload:", action.payload);
      return action.payload;
    },
  },
});

export const { addRequests } = requestSlice.actions;
export default requestSlice.reducer;
