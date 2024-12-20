import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DsaSheetComponent } from './dsa-sheet.component';

describe('DsaSheetComponent', () => {
  let component: DsaSheetComponent;
  let fixture: ComponentFixture<DsaSheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DsaSheetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DsaSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
