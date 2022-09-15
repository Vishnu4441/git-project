import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoComponent } from './demo/demo.component';
import { Demo2Component } from './demo2/demo2.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

const routes: Routes = [

  {path: 'nav-bar',component: NavBarComponent},
  {path: 'demo',component:DemoComponent},
  {path: 'demo2',component:Demo2Component}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
