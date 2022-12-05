import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanDeactivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AddComponent } from '../add/add.component';
import { EditComponent } from '../edit/edit.component';

@Injectable({
  providedIn: 'root',
})
export class IsEditingGuard implements CanDeactivate<unknown> {
  // Used to prevent an user from leaving the page

  canDeactivate(
    component: AddComponent | EditComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const canLeave = component.formComponent.form.pristine;

    if (!canLeave)
      return confirm('You have unsaved changes, do you want to leave ?');
    else return true;
  }
}
