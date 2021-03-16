export interface Servicio{
    idServicio? : number;
    idSiguiente?: number;
    archivoImagen?:File;
    servicioNombre:string;
    servicioImagenUrl:string;
    servicioDescripcion:string;
    editNombreArchivo?: string;
    estado? : number;
}