import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class IsNumberGuard implements CanActivate {
  // Used to control access to a route. Must be provided in the routing module.

  constructor(private snacker: MatSnackBar, private router: Router) {}

  // When returning false, prevents access to the route.
  // Be sure to route to a specific route otherwise a blank page will get displayed
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const { id } = route.params;

    const isNumber = !isNaN(+id) && typeof +id === 'number';

    if (!isNumber) {
      this.snacker.open(`the ID "${id}" is not a valid ID`);
      this.router.navigateByUrl('/');
    }

    return isNumber;
  }
}
