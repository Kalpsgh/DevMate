import { createSlice } from "@reduxjs/toolkit";

const pendingRequest = createSlice({
  name: "Request",
  initialState: [],
  reducers: {

    addPendingRequest: (state, action) => {
      return action.payload;
    },

    removePendingRequest:()=>{
        return null;
    }

  },
});

export const { addPendingRequest,removePendingRequest } = pendingRequest.actions;

export default pendingRequest.reducer;