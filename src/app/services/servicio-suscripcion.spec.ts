import { TestBed } from '@angular/core/testing';

import { ServicioSuscripcion } from './servicio-suscripcion';

describe('Suscripcion', () => {
  let service: ServicioSuscripcion;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioSuscripcion);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
