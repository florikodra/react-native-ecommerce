import { PayloadAction, createSlice, createSelector } from "@reduxjs/toolkit";
import CartItem from "../../types/CartItem";
import { RootState } from "../store";

export interface CartState {
    cart: CartItem[];
}

interface IncreaseQuantityPayload {
    id: number;
}

interface DecreaseQuantityPayload {
    id: number;
}

interface RemoveItemPayload {
    id: number;
}

const cartSlice = createSlice({
    name: "cart",
    initialState: { cart: [] } as CartState,
    reducers: {
        addToCart: (state, action) => {
            const itemInCart = state.cart.find(
                (item) => item.id === action.payload.id
            );
            if (itemInCart) {
                if (itemInCart.quantity !== undefined) {
                    itemInCart.quantity++;
                }
            } else {
                state.cart.push({ ...action.payload, quantity: 1 });
            }
        },

        increaseQuantity: (
            state,
            action: PayloadAction<IncreaseQuantityPayload>
        ) => {
            const item = state.cart.find((item) => item.id === action.payload.id);
            if (item && item.quantity !== undefined) {
                item.quantity++;
            }
        },

        decreaseQuantity: (
            state,
            action: PayloadAction<DecreaseQuantityPayload>
        ) => {
            const item = state.cart.find((item) => item.id === action.payload.id);
            if (item && item.quantity !== undefined && item.quantity > 1) {
                item.quantity--;
            }
        },

        removeItem: (state, action: PayloadAction<RemoveItemPayload>) => {
            state.cart = state.cart.filter((item) => item.id !== action.payload.id);
        },
    },
});

export const { addToCart, increaseQuantity, decreaseQuantity, removeItem } =
    cartSlice.actions;

export const cartReducer = cartSlice.reducer;

export const getCartItems = (state: RootState) => state.cartReducer.cart;

export const getCartItemById = (itemId: number) =>
    createSelector(
        getCartItems,
        (cartItems) => cartItems.find(item => item.id === itemId)
    );

export const getCartTotalQuantity = createSelector(
    getCartItems,
    (cartItems) => cartItems.reduce((total, item) => total + item.quantity, 0)
);

export const getCartTotalSum = createSelector(
    getCartItems,
    (cartItems) => cartItems.reduce((total, item) => total + item.quantity * item.price, 0)
);