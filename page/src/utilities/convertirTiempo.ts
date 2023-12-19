


export function convertirTiempo(cambiar:string){
    const data = Date.parse(cambiar);
    const fecha = new Date(data);
    
    return fecha.toLocaleDateString();
}