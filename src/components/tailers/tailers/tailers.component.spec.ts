import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TailersComponent } from './tailers.component';

describe('TailersComponent', () => {
  let component: TailersComponent;
  let fixture: ComponentFixture<TailersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TailersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TailersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
