import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserResolverService implements Resolve<any>{

  constructor() { }
  
  resolve(route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any>|Promise<any>|any {
    return this.getUser(route.params.id);
  }
  getUser(userId){
    return "toto";
  }

}
