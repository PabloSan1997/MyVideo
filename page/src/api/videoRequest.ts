

export async function leerVideos(autorization:string){
    const url = import.meta.env.VITE_URLBASE;
    const ft = await fetch(`${url}/video`, {
        method:'GET',
        headers:{
            autorization
        }
    });
    const data = await ft.json();
    const ver = data as Respuesta;
    if(ver.statusCode>299){
        const result = ver.results as {message:string};
        throw result;
    }
    return ver.results as PortadaInterface[]
}