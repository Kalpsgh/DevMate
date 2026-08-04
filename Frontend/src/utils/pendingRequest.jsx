import { createSlice } from "@reduxjs/toolkit";

const pendingRequest = createSlice({
  name: "Request",
  initialState: [],
  reducers: {

    addPendingRequest: (state, action) => {
      return action.payload;
    },

    removePendingRequest: (state, action) => {
    return state.filter(
        (request) => request._id !== action.payload
    );
}

  },
});

export const { addPendingRequest,removePendingRequest } = pendingRequest.actions;

export default pendingRequest.reducer;