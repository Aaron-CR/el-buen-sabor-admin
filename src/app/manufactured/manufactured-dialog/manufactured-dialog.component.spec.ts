import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManufacturedDialogComponent } from './manufactured-dialog.component';

describe('ManufacturedDialogComponent', () => {
  let component: ManufacturedDialogComponent;
  let fixture: ComponentFixture<ManufacturedDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManufacturedDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManufacturedDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
