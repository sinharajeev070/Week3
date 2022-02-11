import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { TemplateFormComponent } from './template-form/template-form.component';


const routes: Routes = [
                          {path:"",component:HomeComponent},
                          {path:"home",component:HomeComponent},
                          {path:"template-form",component:TemplateFormComponent},
                          {path:"reactive-form",component:ReactiveFormComponent},
                          {path:"**",component:ErrorComponent}
                      ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
