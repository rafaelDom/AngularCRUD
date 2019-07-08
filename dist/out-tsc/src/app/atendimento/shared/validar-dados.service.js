import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
let ValidarDadosService = class ValidarDadosService {
    constructor() { }
    validarDados(atendimento) {
        if (atendimento.cliente == '' || atendimento.dataAtendimento == ''
            || atendimento.motivoAtendimento == '' || atendimento.resolucao == '') {
            return false;
        }
    }
};
ValidarDadosService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    })
], ValidarDadosService);
export { ValidarDadosService };
//# sourceMappingURL=validar-dados.service.js.map