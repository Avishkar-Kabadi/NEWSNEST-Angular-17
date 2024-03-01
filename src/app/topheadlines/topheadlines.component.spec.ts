import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopheadlinesComponent } from './topheadlines.component';

describe('TopheadlinesComponent', () => {
  let component: TopheadlinesComponent;
  let fixture: ComponentFixture<TopheadlinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TopheadlinesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TopheadlinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
