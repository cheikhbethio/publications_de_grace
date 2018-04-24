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
    return {
      firstName: 'Kader',
      lastName: 'Kane',
      date: '19/02/2018',
      email: 'kader.kader@pdg.fr',
      status: 'ecrivain',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet, officia a blanditiis minus, libero rem quisquam tempore esse, possimus odio modi nostrum quaerat beatae! Voluptatum reiciendis maxime officia sint a animi culpa voluptate officiis sunt sed nemo quod, odit rem. Quas expedita ab amet quibusdam praesentium obcaecati qui beatae debitis veritatis dignissimos dolores maxime, corporis, itaque placeat sint nostrum fugiat aliquam commodi quod possimus hic quo perspiciatis. Laboriosam, excepturi aliquam ex similique quis deserunt labore? Sed laborum sunt quos ipsum porro, non quis dolorem nemo officia eligendi corporis dignissimos vitae, voluptatibus voluptas, atque quibusdam? Voluptate ratione alias fugiat recusandae nemo.'
    };
  }

}
