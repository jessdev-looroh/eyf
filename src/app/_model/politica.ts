export interface Politica{
    idPolitica?: number;
    politicaNombre: string;
    politicaImagenUrl:string;
    politicaDescripcion:string;
    idSiguiente?: number;
    archivoImagen?:File;
    estado?:number;
}