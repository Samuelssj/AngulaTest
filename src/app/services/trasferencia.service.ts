import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TrasferenciaService {
  
  private listaTranseferncia: any[];
  private url = 'http://localhost:3000/transferencias';

  constructor(private httpClient: HttpClient) { 

    this.listaTranseferncia = [];
    
  }

  
get transferencias(){
  return this.listaTranseferncia;
};

//poderia ser transferencias mas por aceitar valor any então deixei sendo uma lista de services

todas(): Observable<TrasferenciaService[]>{
  return this.httpClient.get<TrasferenciaService[]>(this.url);
}

adicionar(transferencia:any){

this.melhordados(transferencia);
this.listaTranseferncia.push(transferencia);
this.httpClient.post<TrasferenciaService>(this.url,transferencia);
 
}

private melhordados(transferencia: any){
  transferencia.data = new Date();
}

}
