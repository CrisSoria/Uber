import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  origin: null,
  destination: null,
  travelTimeInformation: null,
};

export const navSlice = createSlice({
  name: "nav",
  initialState,
  reducer: {
    setOrigin: (state, action) => {
      state.origin = action.payload;
    },
    setDestiantion: (state, action) => {
      state.destiantion = action.payload;
    },
    setTravelTimeInformation: (state, action) => {
      state.travelInformation = action.payload;
    },
  },
});

export const { setOrigin, setDestiantion, setTravelInformation } =
  navSlice.actions;

//Selectors
export const selectOrigin = (state) => state.nav.origin;
export const selectDestination = (state) => state.nav.destination;
export const selectTravelTimeInformation = (state) =>
  state.nav.travelTimeInformation;

export default navSlice.reducer;
