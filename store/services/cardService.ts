import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';

export const getCartItems = (state: RootState) => state.cartReducer.cart;

export const getCartItemById = (itemId: number) =>
  createSelector(
    getCartItems,
    (cartItems) => cartItems.find((item) => item.id === itemId)
  );

export const getCartTotalQuantity = createSelector(
  getCartItems,
  (cartItems) => cartItems.reduce((total, item) => total + item.quantity, 0)
);

export const getCartTotalSum = createSelector(
  getCartItems,
  (cartItems) =>
    cartItems.reduce((total, item) => total + item.quantity * item.price, 0)
);