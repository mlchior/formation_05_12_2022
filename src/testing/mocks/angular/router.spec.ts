import { Router } from '@angular/router';

export const routerMock = (): Router =>
  ({ navigateByUrl: jasmine.createSpy() } as any);
