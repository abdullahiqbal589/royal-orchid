import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoIIComponent } from './info-ii.component';

describe('InfoIIComponent', () => {
  let component: InfoIIComponent;
  let fixture: ComponentFixture<InfoIIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InfoIIComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InfoIIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
