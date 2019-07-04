import { Component, OnInit } from '@angular/core';

import { Atendimento } from '../shared/atendimento';
import { AtendimentoService } from '../shared/atendimento.service';
import { AtendimentoDataService } from '../shared/atendimento-data.service';
import { ValidarDadosService } from '../shared/validar-dados.service'

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  atendimento: Atendimento;
  key: string = '';

  constructor(private atendimentoService: AtendimentoService, private atendimentoDataService: AtendimentoDataService,
    private validarDados: ValidarDadosService) { }

  ngOnInit() {
    this.atendimento = new Atendimento();
    this.atendimentoDataService.currentAtendimento.subscribe(data => {
      if (data.atendimento && data.key) {
        this.atendimento = new Atendimento();
        this.atendimento.cliente = data.atendimento.cliente;
        this.atendimento.dataAtendimento = data.atendimento.dataAtendimento;
        this.atendimento.motivoAtendimento = data.atendimento.motivoAtendimento;
        this.atendimento.resolucao = data.atendimento.resolucao;
        this.key = data.key;
      }
    })
  }

  onSubmit() {
    if (this.validarDados.validarDados(this.atendimento) == false) {
      alert('Favor preencher todos os campos!');
    } else if (this.key) {
      this.atendimentoService.update(this.atendimento, this.key)
      this.atendimento = new Atendimento();
    } else {
      this.atendimentoService.insert(this.atendimento);
      this.atendimento = new Atendimento();
    }
  }
}
