import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FollowlineComponent } from './followline.component';

describe('FollowlineComponent', () => {
  let component: FollowlineComponent;
  let fixture: ComponentFixture<FollowlineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FollowlineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FollowlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
