import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


export interface Epi {
  seq: string;
  cod: string;
  cpf: string;
  calcado: string;
  luvas: string;
  olhos: string;
  ouvidos: string;
  dorso: string;
  pescoco: string;
  pernas: string;
  bracos: string;
  cabeca: string;
  uniforme: string;
  cinto: string;
  acessorio: string;
}


@Injectable({
  providedIn: 'root'
})
export class EpiService {

    private url = "https://www.cepelma.com.br/Api_epi.php";
  static catEpi: any;

    constructor(
    private http: HttpClient,
  ) { }

  getAll(){
    return this.http.get<[Epi]>(this.url);
  }

  getAllModJ(Mod){
    return this.http.get<[Epi]>(this.url + '?Jtf=' + Mod);
  }

  getAllCncl(Date){
    return this.http.get<[Epi]>(this.url + '?Cnl=' + Date);
  }

  get(seq: string){
    return this.http.get<[Epi]>(this.url + '?Cod=' + seq);
  }

  create(Epi: Epi){
    return this.http.post<[Epi]>(this.url, Epi);
  }

  createPnt(Epi: Epi){
    return this.http.post<[Epi]>(this.url + '?Btd=true', Epi);
  }

  update(Epi: Epi, seq: string){
    return this.http.put<[Epi]>(this.url + '?seq=' + seq, Epi);
  }

  updateTrt(Epi: Epi, seq: string){
    return this.http.put<[Epi]>(this.url + '?Trt=' + seq, Epi);
  }

  delete(seq: string){
    return this.http.delete<[Epi]>(this.url + '?seq=' + seq);
  }

}
