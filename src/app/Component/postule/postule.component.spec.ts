import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostuleComponent } from './postule.component';

describe('PostuleComponent', () => {
  let component: PostuleComponent;
  let fixture: ComponentFixture<PostuleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PostuleComponent]
    });
    fixture = TestBed.createComponent(PostuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
