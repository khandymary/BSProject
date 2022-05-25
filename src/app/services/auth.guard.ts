import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthguardServiceService } from './authguard-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private Authguardservice: AuthguardServiceService, private router: Router) {} 
  canActivate(): boolean 
  {
    
    if (!this.Authguardservice.gettoken())
    {  
      this.router.navigateByUrl("/login");  
    return false;
    }
  return this.Authguardservice.gettoken();  
 
 
}
}
