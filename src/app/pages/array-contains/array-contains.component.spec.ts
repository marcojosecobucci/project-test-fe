/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ArrayContainsComponent } from './array-contains.component';

describe('ArrayContainsComponent', () => {
  let component: ArrayContainsComponent;
  let fixture: ComponentFixture<ArrayContainsComponent>;
  let foo: any;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ArrayContainsComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArrayContainsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    foo = [1, 2, 3];
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('matches arrays with some of the values', function () {
    expect(foo).toEqual(jasmine.arrayContaining([3, 1]));
    expect(foo).not.toEqual(jasmine.arrayContaining([6]));
  });

  describe('when used with a spy', function () {
    it('is useful when comparing arguments', function () {
      const callback = jasmine.createSpy('callback');
      callback([1, 2, 3, 4]);
      expect(callback).toHaveBeenCalledWith(jasmine.arrayContaining([4, 2, 3]));
      expect(callback).not.toHaveBeenCalledWith(
        jasmine.arrayContaining([5, 2])
      );
    });
  });

  describe('jasmine.stringMatching', function () {
    it('matches as a regex', function () {
      expect({ foo: 'baz' }).toEqual({
        foo: jasmine.stringMatching(/^baz$/),
      });
      expect({ foo: 'foobarbaz' }).toEqual({
        foo: jasmine.stringMatching('bar'),
      });
    });

    describe('when used with a spy', function () {
      it('is useful for comparing arguments', function () {
        const callback = jasmine.createSpy('callback');
        callback('foobarbaz');
        expect(callback).toHaveBeenCalledWith(jasmine.stringMatching('baz'));
        expect(callback).not.toHaveBeenCalledWith(
          jasmine.stringMatching(/^baz$/)
        );
      });
    });
  });

  describe('custom asymmetry', function () {
    const tester = {
      asymmetricMatch(actual: any) {
        return actual.includes('bar');
      },
    };

    it('dives in deep', function () {
      expect('foo,bar,baz,quux').toEqual(tester);
    });

    describe('when used with a spy', function () {
      it('is useful for comparing arguments', function () {
        const callback = jasmine.createSpy('callback');
        callback('foo,bar,baz');
        expect(callback).toHaveBeenCalledWith(tester);
      });
    });
  });

  describe('custom asymmetry', function () {
    let timerCallback: any;

    beforeEach(function () {
      timerCallback = jasmine.createSpy('timerCallback');
      jasmine.clock().install();
    });

    afterEach(function () {
      jasmine.clock().uninstall();
    });

    it('causes a timeout to be called synchronously', function () {
      setTimeout(function () {
        timerCallback();
      }, 100);
      expect(timerCallback).not.toHaveBeenCalled();
      jasmine.clock().tick(101);
      expect(timerCallback).toHaveBeenCalled();
    });
  });
});
