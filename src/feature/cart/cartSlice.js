import { createSlice } from '@reduxjs/toolkit';
// import CartItem from './components/CartItem';

const initialState = {
  cartItems: [],
  amount: 4,
  total: 0,
  isLoading: true,

};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
});

export default cartSlice.reducer;
