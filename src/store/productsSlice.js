import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import axios from 'axios'
import StatusCode from "../utils/StatusCode";


const productSlice = createSlice({
    name:'product',
    initialState:{
        data:[],
        status:StatusCode.IDLE,
        error:null
        
    },
    reducers:{
        // fetchProduct(state,action){
        //     state.data = action.payload
        // }
    },

    extraReducers: (builder)=>{
        builder

        .addCase(getProducts.pending,(state)=>{
            state.status = StatusCode.LOADING;
        })

        .addCase(getProducts.fulfilled, (state,action)=>{
            state.data = action.payload;
            state.status = StatusCode.IDLE;

        })

        .addCase(getProducts.rejected,(state,action)=>{
            state.status = StatusCode.ERROR;
            // state.error = action.error.message

        })
    }
})

export const {fetchProduct} = productSlice.actions;
export default productSlice.reducer;
// Create AsyncThunk  for middleware

export const getProducts  = createAsyncThunk('products/get',async ()=>{
    const response = await axios.get("https://fakestoreapi.com/products");
    return response.data;
});



// export function getProducts(){
//     return async function getProductsThunk(dispatch,action){
//             const response = await axios.get("https://fakestoreapi.com/products")
//             console.log(response.data,'dataaaa')
//             dispatch(fetchProduct(response.data))
//     }
// }