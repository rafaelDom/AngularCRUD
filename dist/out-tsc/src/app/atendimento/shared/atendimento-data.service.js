import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
let AtendimentoDataService = class AtendimentoDataService {
    constructor() {
        this.atendimentoSource = new BehaviorSubject({ atendimento: null, key: '' });
        this.currentAtendimento = this.atendimentoSource.asObservable();
    }
    changeAtendimento(atendimento, key) {
        this.atendimentoSource.next({ atendimento: atendimento, key: key });
    }
};
AtendimentoDataService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    })
], AtendimentoDataService);
export { AtendimentoDataService };
//# sourceMappingURL=atendimento-data.service.js.map