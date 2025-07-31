import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarFiltersComponent } from './sidebar-filters.component';

describe('SidebarFiltersComponent', () => {
  let component: SidebarFiltersComponent;
  let fixture: ComponentFixture<SidebarFiltersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SidebarFiltersComponent]
    });
    fixture = TestBed.createComponent(SidebarFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
