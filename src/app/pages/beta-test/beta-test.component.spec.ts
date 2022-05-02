/* tslint:disable:no-unused-variable */
import {
  async,
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
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

  it('should', fakeAsync(() => {
    spyOn(component, 'onEditButtonClick');

    let button = fixture.debugElement.nativeElement.querySelector('button');
    button.click();
    tick();
    expect(component.onEditButtonClick).toHaveBeenCalled();
  }));

  it('should bind the configured value', async(() => {
    let select: HTMLSelectElement = fixture.debugElement.query(
      By.css('.select-profile')
    ).nativeElement;
    let p = fixture.debugElement.nativeElement.querySelector('p');
    fixture.detectChanges();
    component.selectedProfile = new FormControl(component.profiles[0]);
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      let text = select.options[select.selectedIndex].label;
      console.log('text', text);
      expect(text).toBe('Developer');
      expect(p.textContent).toBe('Developer');
    });
  }));

  it('should change the value on selection change', async(() => {
    fixture.detectChanges();
    let select: HTMLSelectElement = fixture.debugElement.query(
      By.css('.select-city')
    ).nativeElement;
    select.value = select.options[2].value;
    select.dispatchEvent(new Event('change'));
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      let text = select.options[select.selectedIndex].label;
      expect(text).toBe('Kanchipuram');
    });
  }));

  it('should execute the component method on change', fakeAsync(() => {
    fixture.detectChanges();
    let select: HTMLSelectElement = fixture.debugElement.query(
      By.css('.select-city')
    ).nativeElement;
    spyOn(component, 'onCityChange');
    select.value = select.options[2].value;
    select.dispatchEvent(new Event('change'));
    tick();
    expect(component.onCityChange).toHaveBeenCalled();
  }));
});
