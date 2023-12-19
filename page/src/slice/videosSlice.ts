import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { leerVideos } from "../api/videoRequest";

const initialState: {portadas:PortadaInterface[]} = {
    portadas:[]
}

const llamarPortadas = createAsyncThunk(
    'portada/llamar',
    async(token:string)=>{
        try {
            const data = await leerVideos(token);
            return data;
        } catch (error) {
            return [];
        }
    }
);

const videoaSlice = createSlice({
    name:'videos',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(llamarPortadas.fulfilled, (state, action)=>{
            state.portadas = action.payload;
        });
    }
});


const portadaReducer = videoaSlice.reducer;

export {
    portadaReducer,
    llamarPortadas
}