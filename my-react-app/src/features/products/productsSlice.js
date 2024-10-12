import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from 'axios'

export const getProducts = createAsyncThunk(
    'categories/getProducts', 
     async (_, thunkAPI) =>{
        try{
         const res = await axios('https://lubaparahonya.github.io/api-free/api.json')
           return res.data
        }catch(err){
            console.log(err)
            return thunkAPI.rejectWithValue(err)
        }
     }
    )

const productsSlice = createSlice({
     name: 'categories',
     initialState: {
        list: [],
        filterList: [],
        related: [],
        isLoading: false
    },
    filterCategoriesReduser: (state, {payload})=>{
        state.filterList = state.list.filter(({catecories}) => catecories === payload)
    },
    extraReducers: (builder) => {
        builder.addCase(getProducts.pending, (state)=> {
            state.isLoading = true;
        })
        builder.addCase(getProducts.fulfilled, (state, action)=> {
            state.list = action.payload;
            state.isLoading = false;
        })
        builder.addCase(getProducts.rejected, (state)=> {
            state.isLoading = false;
        })
    }
}
)
export const {filterCategoriesReduser} = productsSlice.actions
export default productsSlice.reducer