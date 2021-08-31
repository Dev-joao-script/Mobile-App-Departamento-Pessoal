import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


export interface assinatura {
  seq: string;
  cod: string;
  scan: string;
}
@Injectable({
  providedIn: 'root'
})
export class AssinaturaService {

    private url = "https://www.cepelma.com.br/assinatura/Assinaturas.php";

    constructor(
    private http: HttpClient,
  ) { }

  create(periodo: string,Cod: string,Doc: string){
    return this.http.post<[assinatura]>(this.url+'?Periodo='+periodo+'&Cod='+Cod+'&Doc='+Doc, '');
  }

}
