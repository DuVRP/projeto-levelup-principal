import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { PerfilComponent } from './componentes/main/perfil/perfil.component';
import { CompetenciasComponent } from './componentes/main/competencias/competencias.component';
import { InsigneasComponent } from './componentes/main/insigneas/insigneas.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PerfilComponent,
    CompetenciasComponent,
    InsigneasComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
