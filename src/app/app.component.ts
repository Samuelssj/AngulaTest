import { Component } from '@angular/core';
import { NovaTransferenciaComponent } from './nova-transferencia/nova-transferencia.component';
import { TrasferenciaService } from './services/trasferencia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bytebank';

  constructor (private services: TrasferenciaService) {
    
  }

  transferir($event: any){
   
    this.services.adicionar($event);
    
  };
}
