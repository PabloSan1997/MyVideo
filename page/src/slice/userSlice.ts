import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { loginRequest } from "../api/loginRequest";


const initialState: UserInitialState = {
    url_image: '',
    name: '',
    token: '',
    loading: false,
    modo: false
}

const loggear = createAsyncThunk(
    'loggearAccion/post',
    async (data: UsuarioLogin) => {
        try {
            const respuesta = await loginRequest(data);
            return respuesta;
        } catch (error) {
            return initialState;
        }
    }
);

const userSlice = createSlice({
    name: 'usuario',
    initialState,
    reducers: {
        cerrarSecion: (state) => {
            state.loading = false;
            state.name = '';
            state.token = '';
            state.url_image = '';
            state.modo = false;
        },
        ponerToken: (state, action) => {
            state.token = action.payload.token;
            state.name = action.payload.name;
            state.url_image = action.payload.url_image;
            state.modo = action.payload.modo;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(loggear.fulfilled, (state, action) => {
            const respuesta = action.payload;
            state.name = respuesta.name;
            state.token = respuesta.token;
            state.url_image = respuesta.url_image;
            state.loading = false;
            state.modo = respuesta.modo;
        });
        builder.addCase(loggear.rejected, (state) => {
            state.name = '';
            state.token = '';
            state.url_image = '';
            state.loading = false;
            state.modo = false;
        });
        builder.addCase(loggear.pending, (state) => {
            state.loading = true;
        });
    }
});

const userReducer = userSlice.reducer;
const { cerrarSecion, ponerToken } = userSlice.actions;

export {
    userReducer,
    loggear,
    cerrarSecion,
    ponerToken
}