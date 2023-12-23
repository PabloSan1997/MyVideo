

export async function loginRequest(data:UsuarioLogin) {
    const url = import.meta.env.VITE_URLBASE;
    const ft = await fetch(`${url}/user/login`, {
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(data)
    });
    const respuesta = await ft.json();
    const proceso = respuesta as Respuesta;
    if(proceso.statusCode>299) {
        const results = proceso.results as {messsage:string};
        throw results.messsage;
    }
    const results = proceso.results as UserInitialState;
    return results;
}