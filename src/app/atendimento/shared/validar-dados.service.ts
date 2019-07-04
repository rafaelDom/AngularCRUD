import { Injectable } from '@angular/core';
import { Atendimento } from './atendimento';

@Injectable({
  providedIn: 'root'
})
export class ValidarDadosService {

  constructor() { }

  validarDados(atendimento: Atendimento) {
    if (atendimento.cliente == '' || atendimento.dataAtendimento == ''
      || atendimento.motivoAtendimento == '' || atendimento.resolucao == '') {
      return false;
    }
  }
}
