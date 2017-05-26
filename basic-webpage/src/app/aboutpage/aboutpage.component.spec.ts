import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutpageComponent } from './aboutpage.component';

describe('AboutpageComponent', () => {
  let component: AboutpageComponent;
  let fixture: ComponentFixture<AboutpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
