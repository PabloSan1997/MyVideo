import { createSlice } from "@reduxjs/toolkit";

const initialState:UsuarioInterface = {
    url_image:'',
    name:'Pablo',
    token:'fdsfdasfs'
} 

const userSlice = createSlice({
    name:'usuario',
    initialState,
    reducers:{

    }
});

const userReducer = userSlice.reducer;


export {
    userReducer
}