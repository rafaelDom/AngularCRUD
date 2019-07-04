import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Atendimento } from './atendimento';

@Injectable({
  providedIn: 'root'
})
export class AtendimentoDataService {
  private atendimentoSource = new BehaviorSubject({ atendimento: null, key: '' });
  currentAtendimento = this.atendimentoSource.asObservable();

  constructor() { }

  changeAtendimento(atendimento: Atendimento, key: string) {
    this.atendimentoSource.next({ atendimento: atendimento, key: key });
  }
}
