import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CRUDComponent } from './Pichincha/CRUD/CRUD.component';
import { FORMComponent } from './Pichincha/FORM/FORM.component';


const routes: Routes = [

  {path:'',redirectTo:'/crud', pathMatch:'full'},
  {path:'crud',component:CRUDComponent},
  {path:'crud/form',component:FORMComponent},
  {path:'crud/form/:id',component:FORMComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
