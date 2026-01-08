import { TestBed } from '@angular/core/testing';

import { ServicioSpinner } from './servicio-spinner';

describe('ServicioSpinner', () => {
  let service: ServicioSpinner;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioSpinner);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
