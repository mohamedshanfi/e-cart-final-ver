import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name:'cart',
    initialState:[],
    reducers:{
        //actions
        //functions to add items to cart array
        addToCArt:(state,action)=>{
            state.push(action.payload)
        },
        //functions to remove items from cart
        removeFromCart : (state, action)=>{
            return state.filter(item=>item.id!=action.payload)
        },
        //function to empty cart
        emptyCart : (state)=>{
            return state = []
        }
    }
})

export const {addToCArt,removeFromCart,emptyCart} = cartSlice.actions
export default cartSlice.reducer