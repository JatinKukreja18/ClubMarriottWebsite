import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarMobileMenuComponent } from './sidebar-mobile-menu.component';

describe('SidebarMobileMenuComponent', () => {
  let component: SidebarMobileMenuComponent;
  let fixture: ComponentFixture<SidebarMobileMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebarMobileMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarMobileMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
