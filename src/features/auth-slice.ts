import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface DeliveriesProps {
  accepted: number;
  rejected: number;
}

const initialState: DeliveriesProps = {
  accepted: 0,
  rejected: 0,
};

export const deliveriesSlice = createSlice({
  name: 'deliveries',
  initialState,
  reducers: {
    setAccepted: (state) => {
      state.accepted = state.accepted + 1;
    },
    setRejected: (state) => {
      state.rejected = state.rejected + 1;
    },
  },
});

export const { setAccepted, setRejected } = deliveriesSlice.actions;
export const deliveriesReducer = deliveriesSlice.reducer;
