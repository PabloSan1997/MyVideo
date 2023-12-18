

export function FormularioLogin() {
    const labelStyle =
        'text-rojoVideos-800 text-xl mb-2';
    const inputStyle =
        'p-1 outline-none bg-rojoVideos-50 text-rojoVideos-950 rounded-md placeholder:text-rojoVideos-400 text-xl mb-5 border-[1px] border-rojoVideos-500';
    return (
        <form
            className=
            'border-2 border-rojoVideos-900 w-[40rem] flex flex-col m-auto mt-8 p-5 px-20 rounded-2xl bg-rojoVideos-100'
        >
            <label
                htmlFor="username"
                className={labelStyle}
            >User Name</label>
            <input
                type="text"
                id="username"
                className={inputStyle}
                placeholder="Escribir"
            />
            <label
                htmlFor="password"
                className={labelStyle}
            >Password</label>
            <input
                type="password"
                id="password"
                placeholder="Escribir"
                className={inputStyle}
            />
            <button
                type="submit"
                className='rounded-xl border-2 text-rojoVideos-950 border-rojoVideos-950 w-fit m-auto p-1 px-4 text-xl mt-2 hover:bg-rojoVideos-950 bg-rojoVideos-200 hover:text-rojoVideos-50'
            >Entrar</button>
        </form>
    );
}