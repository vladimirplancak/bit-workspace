import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyDesignLibComponent } from './my-design-lib.component';

describe('MyDesignLibComponent', () => {
  let component: MyDesignLibComponent;
  let fixture: ComponentFixture<MyDesignLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyDesignLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyDesignLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
