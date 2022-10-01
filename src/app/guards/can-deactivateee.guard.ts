import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { EditCustomerDataComponent } from '../pages/edit-customer-data/edit-customer-data.component';
import { LoginComponent } from '../pages/login/login.component';
import { UserPageComponent } from '../pages/user-page/user-page.component';

@Injectable({
  providedIn: 'root'
})
export class CanDeactivateeeGuard implements CanDeactivate<unknown> {
  canDeactivate(
    component: EditCustomerDataComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return component.canExit()
  }

}
