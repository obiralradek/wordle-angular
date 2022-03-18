import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RowComponent } from './row/row.component';
import { LetterComponent } from './letter/letter.component';
import { GameComponent } from './game/game.component';
import { InputComponent } from './input/input.component';
import { InputbtnComponent } from './inputbtn/inputbtn.component';

@NgModule({
  declarations: [
    AppComponent,
    RowComponent,
    LetterComponent,
    GameComponent,
    InputComponent,
    InputbtnComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
