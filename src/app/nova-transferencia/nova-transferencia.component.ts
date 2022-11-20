import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss'],
})
export class NovaTransferenciaComponent {

@Output() aotransferir = new EventEmitter<any>();


  valor!: number;
  destino!: number;

transferir(){
  console.log("TRANSFERIU");
  const valorParaEmitir = {valor: this.valor, destino: this.destino};
  this.aotransferir.emit(valorParaEmitir);
  this.limparCampos();

  
}

limparCampos(){
  this.valor = 0;
  this.destino = 0;
}

}
