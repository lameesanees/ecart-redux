import { createSlice } from "@reduxjs/toolkit";
import Swal from "sweetalert2";

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: [],
  reducers: {
    // actions define
    //  add to wihslist = array of data added to wishlist component
    addToWishlist: (state, action) => {
      state.push(action.payload);
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Added To Wishlist",
        showConfirmButton: false,
        timer: 1500
      });
    },
    deleteFromWishlist: (state, action) => {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Removed from Wishlist",
        showConfirmButton: false,
        timer: 1500
      });
      return state.filter((item) => item.id != action.payload);
    
    },
  },
});

export const { addToWishlist , deleteFromWishlist} = wishlistSlice.actions;
export default wishlistSlice.reducer;
