import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AppComponent } from './app.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { exec } from 'child_process';
import {DropdownComponent} from '../app/dropdown/dropdown.component';
describe('AppComponent', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule
      ],
      declarations: [
        AppComponent,
        DropdownComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'dropdown'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('dropdown');
  });

  it('should hide table onload application', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    const de = fixture.debugElement;
    const tableVisible = de.query(By.css('.table'));
    expect(tableVisible).toBeNull();
  });

  it('should call whenever region change', () => {
    const value = {label: 'Region', value: 'europe'};
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    const de = fixture.debugElement;
    spyOn(app, 'getSelectedValue');
    const comp = de.query(By.directive(DropdownComponent));
    const dropdownComp = comp.componentInstance;
    dropdownComp.ChangeEvent.emit(value);
    expect(app.getSelectedValue).toHaveBeenCalledWith(value);
  });
});
