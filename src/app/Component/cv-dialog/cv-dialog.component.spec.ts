import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CvDialogComponent } from './cv-dialog.component';

describe('CvDialogComponent', () => {
  let component: CvDialogComponent;
  let fixture: ComponentFixture<CvDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CvDialogComponent]
    });
    fixture = TestBed.createComponent(CvDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
