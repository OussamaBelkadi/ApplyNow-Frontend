import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostuleDialogComponent } from './postule-dialog.component';

describe('PostuleDialogComponent', () => {
  let component: PostuleDialogComponent;
  let fixture: ComponentFixture<PostuleDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PostuleDialogComponent]
    });
    fixture = TestBed.createComponent(PostuleDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
