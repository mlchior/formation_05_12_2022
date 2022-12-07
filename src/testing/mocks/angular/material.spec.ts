import { MatSnackBar } from '@angular/material/snack-bar';

export const matSnackBarMock = (): MatSnackBar =>
  ({ open: jasmine.createSpy() } as any);
