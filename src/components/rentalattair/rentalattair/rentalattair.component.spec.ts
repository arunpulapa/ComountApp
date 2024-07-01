import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentalattairComponent } from './rentalattair.component';

describe('RentalattairComponent', () => {
  let component: RentalattairComponent;
  let fixture: ComponentFixture<RentalattairComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RentalattairComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RentalattairComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
