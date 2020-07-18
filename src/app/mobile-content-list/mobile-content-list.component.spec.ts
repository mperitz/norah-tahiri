import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileContentListComponent } from './mobile-content-list.component';

describe('MobileContentListComponent', () => {
  let component: MobileContentListComponent;
  let fixture: ComponentFixture<MobileContentListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileContentListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileContentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
