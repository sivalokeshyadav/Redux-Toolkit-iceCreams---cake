// import { createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

// const fetchUsers=()=>createAsyncThunk("fetching/users",async()=>{
//     const response= await axios.get("https://jsonplaceholder.typicode.com/users")
//     return response.data
      
// })


// export default fetchUsers;



import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Correctly define the async thunk
export const fetchUsers = createAsyncThunk("fetching/users", async () => {
    const response = await axios.get("https://jsonplaceholder.typicode.com/users");
    return response.data;
});

//export default fetchUsers;
