import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { agregarVideo, leerUnSoloVideo, leerVideos } from "../api/videoRequest";

const initialState: { portadas: PortadaInterface[], loading: boolean, video: LosVideosInteface } = {
    portadas: [],
    loading: false,
    video: {
        descripcion: '',
        id_video: '',
        url_video: '',
        portada: {
            createdAt: '',
            nombre: ''
        }
    }
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

const videoSeleccionado = createAsyncThunk(
    'video/Seleccionado',
    async ({ token, id_portada }: { token: string, id_portada: string }) => {
        const video = await leerUnSoloVideo(token, id_portada);
        return video;
    }
);

const agregarNuevoVideo = createAsyncThunk(
    'agregar/Video',
    async ({ token, nuevoVideo }: { token: string, nuevoVideo: VideoNuevoInterface }) => {
        const videoAgregado = await agregarVideo(token, nuevoVideo);
        return videoAgregado;
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

        builder.addCase(videoSeleccionado.fulfilled, (state, action) => {
            state.video = action.payload;
        });

        builder.addCase(agregarNuevoVideo.fulfilled, (state, action) => {
            const datos = state.portadas;
            state.portadas = [...datos, action.payload];
            state.loading = false;
        });
    }
});


const portadaReducer = videoaSlice.reducer;

export {
    portadaReducer,
    llamarPortadas,
    videoSeleccionado,
    agregarNuevoVideo
}