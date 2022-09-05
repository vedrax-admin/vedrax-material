import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VedraxMaterialUtilityComponent } from './vedrax-material-utility.component';

describe('VedraxMaterialUtilityComponent', () => {
  let component: VedraxMaterialUtilityComponent;
  let fixture: ComponentFixture<VedraxMaterialUtilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VedraxMaterialUtilityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VedraxMaterialUtilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
