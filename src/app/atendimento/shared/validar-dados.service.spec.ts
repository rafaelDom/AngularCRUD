import { TestBed } from '@angular/core/testing';

import { ValidarDadosService } from './validar-dados.service';

describe('ValidarDadosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ValidarDadosService = TestBed.get(ValidarDadosService);
    expect(service).toBeTruthy();
  });
});
