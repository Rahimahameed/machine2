import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableuserComponent } from './tableuser/tableuser.component';
import { UpdateuserComponent } from './updateuser/updateuser.component';


const routes: Routes = [
  {path:'updateuser',component:UpdateuserComponent},
  {path:'tableuser',component:TableuserComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
