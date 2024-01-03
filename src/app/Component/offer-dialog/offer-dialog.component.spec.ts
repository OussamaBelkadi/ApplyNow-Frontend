import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferDialogComponent } from './offer-dialog.component';

describe('OfferDialogComponent', () => {
  let component: OfferDialogComponent;
  let fixture: ComponentFixture<OfferDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OfferDialogComponent]
    });
    fixture = TestBed.createComponent(OfferDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
