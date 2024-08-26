import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { InformativoComponent } from './informativo/informativo.component';
import { QuestaoComponent } from './questao/questao.component';
import { HeaderComponent } from './header/header.component';
import { ResultadoComponent } from './resultado/resultado.component';
import { ReferenciasComponent } from './referencias/referencias.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InformativoComponent,
    QuestaoComponent,
    HeaderComponent,
    ResultadoComponent,
    ReferenciasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
