import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LinkService {

  private links = [
    { id: '1', link: 'instagram.com/mobilerast/', name: 'instagram', description: 'We\'ll help you to finish your development project successfully.' },
    { id: '2', link: 'tr.linkedin.com/company/rastmobile', name: 'linkedin', description: 'Hire vetted developers from Rast Mobile to scale up your tech projects.' },
    { id: '3', link: 'behance.net/rastmobile', name: 'behance', description: 'Software Development Agency Rast Mobile Information Technology Ltd.' },
    { id: '4', link: 'twitter.com/rastmobile', name: 'twitter', description: 'Software Development Agency Rast Mobile Information Technology Ltd.' }
  ];

  constructor() { }

  getLinkById(id: string): Observable<any> {
    const link = this.links.find(link => link.id === id);
    return of(link);
  }
}
