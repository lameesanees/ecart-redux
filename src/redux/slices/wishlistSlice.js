import { createSlice } from "@reduxjs/toolkit";
import Swal from 'sweetalert2';

const wishlistSlice = createSlice({
    
  name: "wishlist",
  initialState: [],
  reducers: {
    // actions define
    //  add to wihslist = array of data added to wishlist component
    addToWishlist: (state, action) => {
      state.push(action.payload);
      Swal.fire({
        title: 'Added to Wishlist!',
        text: 'Do you want to continue',
        icon: 'success',
        confirmButtonText: 'Back'
      })
    },
  },
});
export const { addToWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer
