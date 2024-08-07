import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { LinkService } from './link.service';

@Injectable({
  providedIn: 'root'
})
export class LinkResolver implements Resolve<any> {

  constructor(private linkService: LinkService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    const linkId = route.paramMap.get('id');
    if (linkId) {
      return this.linkService.getLinkById(linkId);
    } else {
      return of(null);
    }
  }
}
