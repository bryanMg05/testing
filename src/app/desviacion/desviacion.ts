import { desviacion } from "../media/media";



export function estandar(array:number[]) {
    let result= desviacion(array);
    let desviacione: number;
    let varianza=0;
    let sumatoria:number;
    let n=array.length;
    for (let i=0; i<n; i++){
        sumatoria=Math.pow(array[i]- result, 2);
        varianza= varianza + sumatoria;
        
    }
    varianza=varianza/(n-1);

    desviacione= Math.sqrt(varianza);

    var redondeo= Math.round((desviacione+Number.EPSILON)*100)/100;
    


    return redondeo;

}