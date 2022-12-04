import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TagUpdateDialogComponent } from './tag-update-dialog.component';

describe('TagUpdateDialogComponent', () => {
  let component: TagUpdateDialogComponent;
  let fixture: ComponentFixture<TagUpdateDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TagUpdateDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TagUpdateDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
