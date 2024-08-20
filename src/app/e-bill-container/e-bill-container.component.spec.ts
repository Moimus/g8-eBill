import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EBillContainerComponent } from './e-bill-container.component';

describe('EBillContainerComponent', () => {
  let component: EBillContainerComponent;
  let fixture: ComponentFixture<EBillContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EBillContainerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EBillContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
