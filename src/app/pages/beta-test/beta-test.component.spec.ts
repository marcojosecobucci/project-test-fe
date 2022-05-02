/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BetaTestComponent } from './beta-test.component';

describe('BetaTestComponent', () => {
  let component: BetaTestComponent;
  let fixture: ComponentFixture<BetaTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BetaTestComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BetaTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Edit date', () => {
    let date = component.editDate('23-02-2022');

    let toEqual: any = '2022-02-23';
    expect(date).toBe(toEqual);
  });

  xit('Edit date correct is error', () => {
    let date = component.editDate('23-02-2022');

    let toEqual: any = '23-02-2022';
    expect(date).toBe(toEqual);
  });
});
