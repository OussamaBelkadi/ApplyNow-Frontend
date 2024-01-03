import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffreSocieteComponent } from './offre-societe.component';

describe('OffreSocieteComponent', () => {
  let component: OffreSocieteComponent;
  let fixture: ComponentFixture<OffreSocieteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OffreSocieteComponent]
    });
    fixture = TestBed.createComponent(OffreSocieteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
