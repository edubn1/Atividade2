import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { PrincipalComponent } from './principal/principal.component';

const routes: Routes = [
{path:"", redirectTo: "/principal",pathMatch:'full' },
{path: "calculadora",component:CalculadoraComponent},
{path:"principal",component:PrincipalComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
