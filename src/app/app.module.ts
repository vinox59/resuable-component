import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomDropdownComponent } from './custom-dropdown/custom-dropdown.component';
import { ToasterComponent } from './toaster/toaster.component';
import { ToasterContainerComponent } from './toaster/toaster-container/toaster-container.component';
import { TableComponent } from './table/table.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomDropdownComponent,
    ToasterComponent,
    ToasterContainerComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
