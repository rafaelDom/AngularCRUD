import { Injectable } from '@angular/core';
import { Atendimento } from './atendimento';
import { AngularFireDatabase } from '@angular/fire/database';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AtendimentoService {

  constructor(private db: AngularFireDatabase) { }

  insert(atendimento: Atendimento) {
    this.db.list('atendimento').push(atendimento)
      .then((result: any) => {
        console.log(result.key);
      });
  }

  update(atendimento: Atendimento, key: string) {
    this.db.list('atendimento').update(key, atendimento)
      .catch((error: any) => {
        console.error(error);
      });
  }

  getAll() {
    return this.db.list('atendimento')
      .snapshotChanges()
      .pipe(
        map(changes => {
          return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
        })
      );
  }

  delete(key: string) {
    this.db.object(`atendimento/${key}`).remove();
  }
  
  getCliente(cliente: string) {
    return this.db.list('atendimento', ref => ref.orderByChild('cliente').equalTo(cliente))
    .snapshotChanges()
    .pipe(
      map(changes => {
        return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      })
    );
  }

}
