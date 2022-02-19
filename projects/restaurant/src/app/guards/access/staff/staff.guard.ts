import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router } from '@angular/router';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class StaffGuard implements CanActivate, CanActivateChild {

  constructor(private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot): boolean {
    let staffAccess = JSON.parse(sessionStorage.getItem('restaurantUserAccess') as string).staff_access;

    if (staffAccess){
      return true;
    }
    else{
      return false;
    }
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot): boolean {
    let staffAccess = JSON.parse(sessionStorage.getItem('restaurantUserAccess') as string).staff_access;

    if (staffAccess){
      return true;
    }
    else{
      return false;
    }
  }

}
