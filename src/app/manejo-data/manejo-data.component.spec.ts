import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManejoDataComponent } from './manejo-data.component';

describe('ManejoDataComponent', () => {
  let component: ManejoDataComponent;
  let fixture: ComponentFixture<ManejoDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManejoDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManejoDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
