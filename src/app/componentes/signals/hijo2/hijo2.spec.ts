import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Hijo2 } from './hijo2';

describe('Hijo2', () => {
  let component: Hijo2;
  let fixture: ComponentFixture<Hijo2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Hijo2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Hijo2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
