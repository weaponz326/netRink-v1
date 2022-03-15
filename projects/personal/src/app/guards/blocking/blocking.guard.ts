import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlockingGuard implements CanActivate {

  canActivate(route: ActivatedRouteSnapshot): boolean {
    return false;
  }

}
