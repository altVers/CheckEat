import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface AuthState {
  isOpen: boolean;
}

const initialState: AuthState = {
  isOpen: false,
};

export const authSlice = createSlice({
  name: "authForm",
  initialState,
  reducers: {
    closeModal: (state) => {
      state.isOpen = false;
    },
    openModal: (state) => {
      state.isOpen = true;
    },
  },
});

export const { closeModal, openModal } = authSlice.actions;
export default authSlice.reducer;
