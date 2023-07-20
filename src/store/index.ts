import { configureStore } from '@reduxjs/toolkit';
import { deliveriesReducer } from 'features/auth-slice';

export type RootState = ReturnType<typeof store.getState>;

export const store = configureStore({
  reducer: {
    deliveries: deliveriesReducer,
  },
});
