import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimationBannerComponent } from './animation-banner.component';

describe('AnimationBannerComponent', () => {
  let component: AnimationBannerComponent;
  let fixture: ComponentFixture<AnimationBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnimationBannerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimationBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
