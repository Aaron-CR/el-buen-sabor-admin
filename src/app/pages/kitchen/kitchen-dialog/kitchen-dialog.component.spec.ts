import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KitchenDialogComponent } from './kitchen-dialog.component';

describe('KitchenDialogComponent', () => {
  let component: KitchenDialogComponent;
  let fixture: ComponentFixture<KitchenDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KitchenDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KitchenDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
