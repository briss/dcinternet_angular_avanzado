import { TestBed } from '@angular/core/testing';

import { ServicioContenedor } from './servicio-contenedor';

describe('ServicioContenedor', () => {
  let service: ServicioContenedor;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioContenedor);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
