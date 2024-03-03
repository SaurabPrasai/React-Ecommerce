import { createSlice } from "@reduxjs/toolkit";

const initialState={
    products:[],
}

export const cartSlice=createSlice({
    name:"cart",
    initialState,
    reducers:{
        addToCart:(state,action)=>{
            state.products=[...state.products,action.payload]
        },
        removeFromCart:(state,action)=>{
            const cartProducts=state.products.filter((product)=>product!=action.payload)
            state.products=cartProducts;
        }
    }
})


export const {addToCart,removeFromCart}=cartSlice.actions

export default cartSlice.reducer