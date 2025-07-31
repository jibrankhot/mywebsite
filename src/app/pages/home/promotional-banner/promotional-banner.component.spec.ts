import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromotionalBannerComponent } from './promotional-banner.component';

describe('PromotionalBannerComponent', () => {
  let component: PromotionalBannerComponent;
  let fixture: ComponentFixture<PromotionalBannerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PromotionalBannerComponent]
    });
    fixture = TestBed.createComponent(PromotionalBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
