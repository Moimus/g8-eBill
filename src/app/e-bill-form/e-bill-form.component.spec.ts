import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EBillFormComponent } from './e-bill-form.component';

describe('EBillFormComponent', () => {
  let component: EBillFormComponent;
  let fixture: ComponentFixture<EBillFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EBillFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EBillFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
