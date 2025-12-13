import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Repaso } from './repaso';

describe('Repaso', () => {
  let component: Repaso;
  let fixture: ComponentFixture<Repaso>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Repaso]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Repaso);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
