import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let ListComponent = class ListComponent {
    constructor(db, atendimentoService, atendimentoDataService) {
        this.db = db;
        this.atendimentoService = atendimentoService;
        this.atendimentoDataService = atendimentoDataService;
        this.angularfiredb = db;
    }
    ngOnInit() {
        this.atendimento = this.atendimentoService.getAll();
    }
    delete(key) {
        this.atendimentoService.delete(key);
    }
    edit(atendimento, key) {
        this.atendimentoDataService.changeAtendimento(atendimento, key);
    }
    getCliente(cliente) {
        return this.angularfiredb.database.list('atendimento', {
            query: {
                ordeyByChiild: 'cliente',
                equalTo: cliente
            }
        });
    }
};
ListComponent = tslib_1.__decorate([
    Component({
        selector: 'app-list',
        templateUrl: './list.component.html',
        styleUrls: ['./list.component.css']
    })
], ListComponent);
export { ListComponent };
//# sourceMappingURL=list.component.js.map