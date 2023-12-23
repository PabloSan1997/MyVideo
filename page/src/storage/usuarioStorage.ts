

export const storageUsuario = {
    guardar:(data:{name:string, url_image:string, modo:boolean})=>{
        localStorage.data = JSON.stringify(data);
    },
    leer:()=>{
        if(!localStorage.data){
            localStorage.data = JSON.stringify({name:'', url_image:'', modo:false});
        }
        return JSON.parse(localStorage.data) as {name:string, url_image:string, modo:boolean};
    }
}