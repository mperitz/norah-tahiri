import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignProjectPageComponent } from './design-project-page.component';

describe('DesignProjectPageComponent', () => {
  let component: DesignProjectPageComponent;
  let fixture: ComponentFixture<DesignProjectPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesignProjectPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesignProjectPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
