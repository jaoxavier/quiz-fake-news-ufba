import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { InformativoComponent } from './informativo/informativo.component';
import { QuestaoComponent } from './questao/questao.component';
import { ResultadoComponent } from './resultado/resultado.component';
import { ReferenciasComponent } from './referencias/referencias.component';

const routes: Routes = [
  {path: '', component: HomeComponent, children: [
    {path: '', component: InformativoComponent},
    {path: 'questao', component: QuestaoComponent},
    {path: 'resultado', component: ResultadoComponent},
    {path: 'referencias', component: ReferenciasComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
