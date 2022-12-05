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
  constructor(private snacker: MatSnackBar, private router: Router) {}

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
