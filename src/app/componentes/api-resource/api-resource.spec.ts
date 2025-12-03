import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiResource } from './api-resource';

describe('ApiResource', () => {
  let component: ApiResource;
  let fixture: ComponentFixture<ApiResource>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApiResource]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApiResource);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
