import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { loginRequest } from "../api/loginRequest";


const initialState: UserInitialState = {
    url_image: '',
    name: '',
    token: '',
    loading: false
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
        cerrarSecion:(state)=>{
            state.loading=false;
            state.name='';
            state.token='';
            state.url_image='';
        }
    },
    extraReducers: (builder) => {
        builder.addCase(loggear.fulfilled, (state, action) => {
            const respuesta = action.payload;
            state.name = respuesta.name;
            state.token = respuesta.token;
            state.url_image = respuesta.url_image;
            state.loading = false;
        });
        builder.addCase(loggear.rejected, (state) => {
            state.name = '';
            state.token = '';
            state.url_image = '';
            state.loading = false;
        });
        builder.addCase(loggear.pending, (state) => {
            state.loading = true;
        });
    }
});

const userReducer = userSlice.reducer;
const {cerrarSecion} = userSlice.actions;

export {
    userReducer,
    loggear,
    cerrarSecion
}