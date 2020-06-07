import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoicesDialogComponent } from './invoices-dialog.component';

describe('InvoicesDialogComponent', () => {
  let component: InvoicesDialogComponent;
  let fixture: ComponentFixture<InvoicesDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvoicesDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoicesDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
