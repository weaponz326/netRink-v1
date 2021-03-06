import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router } from '@angular/router';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AccountGuard implements CanActivate, CanActivateChild {

  constructor(private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot): boolean {
    if (!!localStorage.getItem('restaurant_id')){
      return true;
    }
    else{
      this.router.navigateByUrl('/register');
      return false;
    }
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot): boolean {
    if (!!localStorage.getItem('restaurant_id')){
      return true;
    }
    else{
      this.router.navigateByUrl('/register');
      return false;
    }
  }

}
