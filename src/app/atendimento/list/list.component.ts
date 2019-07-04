import { Component, OnInit } from '@angular/core';

import { Atendimento } from './../shared/atendimento';
import { AtendimentoService } from './../shared/atendimento.service';
import { Observable } from 'rxjs';
import { AtendimentoDataService } from './../shared/atendimento-data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  atendimento: Observable<any>;

  constructor(private atendimentoService: AtendimentoService, private atendimentoDataService: AtendimentoDataService) {
  }

  ngOnInit() {
    this.atendimento = this.atendimentoService.getAll();
  }

  delete(key: string) {
    this.atendimentoService.delete(key);
  }

  edit(atendimento: Atendimento, key: string) {
    this.atendimentoDataService.changeAtendimento(atendimento, key);
  }

}
