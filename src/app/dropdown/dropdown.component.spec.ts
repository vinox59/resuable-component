import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {FormsModule} from '@angular/forms';
import { DropdownComponent } from './dropdown.component';
import { DebugElement, ElementRef } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('DropdownComponent', () => {
  let component: DropdownComponent;
  let fixture: ComponentFixture<DropdownComponent>;
  let de: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DropdownComponent ],
      imports: [FormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DropdownComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    component.selectedValue = 'europe';
    component.select = {
      label: 'Region',
      values: []
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('check label is set correctly', () => {
    const element = de.query(By.css('label'));
    expect(element.nativeElement.textContent).toBe(component.select.label);
  });

  it('should emit when the element is changed', () => {
    const region = 'europe';
    const selectedValue = {label: 'Region', value: 'europe'};
    spyOn(component.ChangeEvent, 'emit');
    component.setValue(region);
    expect(component.ChangeEvent.emit).toHaveBeenCalledWith(selectedValue);
  });

  it('should check selected value is equal', () => {
    expect(component.selectedValue).toEqual('europe');
  });
});
