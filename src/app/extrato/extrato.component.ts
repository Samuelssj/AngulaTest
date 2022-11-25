import { Component, Input, OnInit } from '@angular/core';
import { TrasferenciaService } from '../services/trasferencia.service';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss']
})
export class ExtratoComponent implements OnInit {




  
  transferencias!: any[];


  constructor(private service: TrasferenciaService) { }

  ngOnInit(): void {

    this.transferencias = this.service.transferencias;
  }

}
