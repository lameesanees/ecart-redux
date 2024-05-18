import { createSlice } from "@reduxjs/toolkit";
import Swal from "sweetalert2";

const cartSlice = createSlice({
    name:"cart",
    initialState:[],
    reducers:{
        addToCart : (state,action)=>{
            state.push(action.payload);
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Added To Cart",
                showConfirmButton: false,
                timer: 1500
              });   
        },
        deleteFromCart:(state,action)=>{
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Removed from Cart",
                showConfirmButton: false,
                timer: 1500
              });
              return state.filter((item) => item.id != action.payload);
            },
            emptyCart:(state)=>{
                return state=[]
            }
    }
})
export const { addToCart , deleteFromCart,emptyCart} = cartSlice.actions;
export default cartSlice.reducer;