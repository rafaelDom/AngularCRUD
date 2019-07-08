import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
let AtendimentoService = class AtendimentoService {
    constructor(db) {
        this.db = db;
    }
    insert(atendimento) {
        this.db.list('atendimento').push(atendimento)
            .then((result) => {
            console.log(result.key);
        });
    }
    update(atendimento, key) {
        this.db.list('atendimento').update(key, atendimento)
            .catch((error) => {
            console.error(error);
        });
    }
    getAll() {
        return this.db.list('atendimento')
            .snapshotChanges()
            .pipe(map(changes => {
            return changes.map(c => (Object.assign({ key: c.payload.key }, c.payload.val())));
        }));
    }
    delete(key) {
        this.db.object(`atendimento/${key}`).remove();
    }
};
AtendimentoService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    })
], AtendimentoService);
export { AtendimentoService };
//# sourceMappingURL=atendimento.service.js.map