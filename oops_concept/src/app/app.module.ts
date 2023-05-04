import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InheritanceComponent } from './inheritance/inheritance.component';
import { ObjectsComponent } from './class/objects/objects.component';
import { PolymorphismComponent } from './polymorphism/polymorphism.component';
import { AbstractionComponent } from './abstraction/abstraction.component';
import { AccessModifiersComponent } from './access-modifiers/access-modifiers.component';

@NgModule({
  declarations: [
    AppComponent,
    InheritanceComponent,
    ObjectsComponent,
    PolymorphismComponent,
    AbstractionComponent,
    AccessModifiersComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
