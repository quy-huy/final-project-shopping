import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyStatisticGridComponent } from './my-statistic-grid.component';

describe('MyStatisticGridComponent', () => {
  let component: MyStatisticGridComponent;
  let fixture: ComponentFixture<MyStatisticGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyStatisticGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyStatisticGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
