import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocieteDashboardComponent } from './societe-dashboard.component';

describe('SocieteDashboardComponent', () => {
  let component: SocieteDashboardComponent;
  let fixture: ComponentFixture<SocieteDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SocieteDashboardComponent]
    });
    fixture = TestBed.createComponent(SocieteDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
