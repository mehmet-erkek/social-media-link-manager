import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialMediaTableComponent } from './social-media-table.component';

describe('SocialMediaTableComponent', () => {
  let component: SocialMediaTableComponent;
  let fixture: ComponentFixture<SocialMediaTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SocialMediaTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SocialMediaTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
