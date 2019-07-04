import { TestBed } from '@angular/core/testing';

import { AtendimentoDataService } from './atendimento-data.service';

describe('AtendimentoDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AtendimentoDataService = TestBed.get(AtendimentoDataService);
    expect(service).toBeTruthy();
  });
});
