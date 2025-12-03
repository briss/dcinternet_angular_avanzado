import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Hijo1 } from './hijo1';

describe('Hijo1', () => {
  let component: Hijo1;
  let fixture: ComponentFixture<Hijo1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Hijo1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Hijo1);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
