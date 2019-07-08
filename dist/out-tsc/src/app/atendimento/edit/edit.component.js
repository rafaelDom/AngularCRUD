import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Atendimento } from '../shared/atendimento';
let EditComponent = class EditComponent {
    constructor(atendimentoService, atendimentoDataService, validarDados) {
        this.atendimentoService = atendimentoService;
        this.atendimentoDataService = atendimentoDataService;
        this.validarDados = validarDados;
        this.key = '';
    }
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
        });
    }
    onSubmit() {
        if (this.validarDados.validarDados(this.atendimento) == false) {
            alert('Favor preencher todos os campos!');
        }
        else if (this.key) {
            this.atendimentoService.update(this.atendimento, this.key);
            this.atendimento = new Atendimento();
        }
        else {
            this.atendimentoService.insert(this.atendimento);
            this.atendimento = new Atendimento();
        }
    }
};
EditComponent = tslib_1.__decorate([
    Component({
        selector: 'app-edit',
        templateUrl: './edit.component.html',
        styleUrls: ['./edit.component.css']
    })
], EditComponent);
export { EditComponent };
//# sourceMappingURL=edit.component.js.map