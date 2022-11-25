import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TrasferenciaService {
  
  private listaTranseferncia!: any[];
  constructor() { 

    this.listaTranseferncia = [];
  }

  
get transferencias(){
  return this.listaTranseferncia;
};


adicionar(transferencia:any){

this.melhordados(transferencia);
this.listaTranseferncia.push(transferencia);
    
 
}

private melhordados(transferencia: any){
  transferencia.data = new Date();
}

}
