import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangepwdComponent } from './changepwd/changepwd.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthGuard } from './services/auth.guard';
import { SignupComponent } from './signup/signup.component';


const routes: Routes = [
  // {path:'login',component:NotFoundComponent},
  {  path:'',component:LoginComponent},
  { path:'login',component:LoginComponent},
  { path:'signup',component:SignupComponent},
  {path:'changepwd',component:ChangepwdComponent,canActivate:[AuthGuard]}
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
