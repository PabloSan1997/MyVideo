import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { leerVideos } from "../api/videoRequest";

const initialState: { portadas: PortadaInterface[], loading: boolean } = {
    portadas: [],
    loading: false
}

const llamarPortadas = createAsyncThunk(
    'portada/llamar',
    async (token: string) => {
        try {
            const data = await leerVideos(token);
            return data;
        } catch (error) {
            return [];
        }
    }
);

const videoaSlice = createSlice({
    name: 'videos',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(llamarPortadas.fulfilled, (state, action) => {
            state.loading = false;
            state.portadas = action.payload;
        });
        builder.addCase(llamarPortadas.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(llamarPortadas.rejected, (state) => {
            state.loading = false;
            state.portadas = [];
        });
    }
});


const portadaReducer = videoaSlice.reducer;

export {
    portadaReducer,
    llamarPortadas
}