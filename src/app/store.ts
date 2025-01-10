import { configureStore } from "@reduxjs/toolkit";
import authReducer from './../widgets/AuthForm/model/AuthSlice'

export const store = configureStore({
  reducer: {
    authForm: authReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
