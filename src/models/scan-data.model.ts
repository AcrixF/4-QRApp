/**
 * Created by root on 7/06/17.
 */
export class ScanData{

  info: string;
  tipo: string;

  public constructor(texto : string){
    this.info = texto;
    this.tipo = "no definido";

    if( texto.startsWith("http")){
      this.tipo = "http";
    }else if( texto.startsWith("geo")){
      this.tipo = "mapa";
    }else if(texto.startsWith("BEGIN:VCARD")){
      this.tipo = "contacto";
    }
  }

}
