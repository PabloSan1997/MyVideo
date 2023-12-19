import { cerrarSecion } from "../slice/userSlice";
import { useAppDispatch } from "../store/store";


export function Header(data:UserInitialState) {
    const dispatch = useAppDispatch();
    const cerrar = () =>{
        dispatch(cerrarSecion());
    }
    return (
        <header className="bg-rojoVideos-950 py-3 flex h-15">
            <h1
                className='text-rojoVideos-50 mx-4 text-3xl m-auto'
            >MyVideos</h1>
            {data.token ? (
                <>
                    <input
                        type="text"
                        placeholder="Buscar"
                        className="px-2 m-auto ml-2 outline-none text-lg rounded-lg placeholder:text-rojoVideos-700 text-rojoVideos-950 w-[40%]"
                    />
                    <div className="m-auto mr-5">
                        <span
                            className='text-rojoVideos-50 mr-3 font-bold text-xl'
                        >{data.name}</span>
                        <span onClick={cerrar}
                            className='text-rojoVideos-50 select-none cursor-pointer hover:underline'
                        >Logout</span>
                    </div>
                </>
            ) : null}
        </header>
    );
}