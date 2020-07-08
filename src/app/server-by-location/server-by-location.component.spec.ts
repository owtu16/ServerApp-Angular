import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerByLocationComponent } from './server-by-location.component';

describe('ServerByLocationComponent', () => {
  let component: ServerByLocationComponent;
  let fixture: ComponentFixture<ServerByLocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServerByLocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServerByLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
