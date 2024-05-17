import { configureStore } from "@reduxjs/toolkit";
import wishlistSlice from "./slices/wishlistSlice";

export const store = configureStore({
    reducer:{
       wishlistReducer:wishlistSlice 
    }
})