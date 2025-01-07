import { configureStore } from "@reduxjs/toolkit";
import cakeReducer from "./../cake/cakeSlice";
import iceCreamReducer from "./../iceCream/iceCreamSlice"
import userReducer from "./../users/userSlice"

const store=configureStore({
    reducer:{
        cake:cakeReducer,
        iceCream:iceCreamReducer,
        user:userReducer,
        
    }
})

export default store;