import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialMediaIconsComponent } from './social-media-icons.component';

describe('SocialMediaIconsComponent', () => {
  let component: SocialMediaIconsComponent;
  let fixture: ComponentFixture<SocialMediaIconsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SocialMediaIconsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SocialMediaIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
