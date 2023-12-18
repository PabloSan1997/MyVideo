

export function FormularioLogin(){
    return(
        <form>
            <label 
            htmlFor="username"
            className='bg-rojoVideos-950'
            >User Name</label>
            <input type="text" id="username" placeholder="Escribir"/>
            <label htmlFor="password">Password</label>
            <input type="text" id="password" placeholder="Escribir"/>
            <button type="submit">Entrar</button>
        </form>
    );
}