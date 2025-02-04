import { createSlice } from "@reduxjs/toolkit";
import {fetchUsers} from "./apis/fetchUser.js"

const initialState={
    loading:false,users:[],error:""
}

const userSlice=createSlice({
    name: 'user',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(fetchUsers.pending,(state)=>{
            state.loading=true
        })
        .addCase(fetchUsers.fulfilled,(state,action)=>{
            state.loading=false
            state.users=action.payload
        })
        .addCase(fetchUsers.rejected,(state,action)=>{
            state.loading=false
            state.users=[]
            state.error=action.error.message
        })
    }
    
})

export default userSlice.reducer;