import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MpcComponent } from './composants/mpc/mpc.component';
import { GenerationComponent } from './composants/generation/generation.component';
import { PokemonComponent } from './composants/pokemon/pokemon.component';

@NgModule({
  declarations: [
    AppComponent,
    MpcComponent,
    GenerationComponent,
    PokemonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
