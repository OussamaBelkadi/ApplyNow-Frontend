import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidateLoginComponent } from './candidate-login.component';

describe('CandidateLoginComponent', () => {
  let component: CandidateLoginComponent;
  let fixture: ComponentFixture<CandidateLoginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CandidateLoginComponent]
    });
    fixture = TestBed.createComponent(CandidateLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
