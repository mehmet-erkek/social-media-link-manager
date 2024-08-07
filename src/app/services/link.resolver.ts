import { ResolveFn } from '@angular/router';

export const linkResolver: ResolveFn<boolean> = (route, state) => {
  return true;
};
