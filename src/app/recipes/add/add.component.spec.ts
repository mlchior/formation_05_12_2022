import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { matSnackBarMock } from '../../../testing/mocks/angular/material.spec';
import { routerMock } from '../../../testing/mocks/angular/router.spec';
import { RecipesService } from '../../providers/http/recipes.service';
import { recipesServiceMock } from '../../providers/http/recipes.service.spec';

import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FormComponent } from '../form/form.component';
import { AddComponent } from './add.component';

fdescribe('AddComponent', () => {
  describe('Surface testing', () => {
    let component: AddComponent;
    let fixture: ComponentFixture<AddComponent>;
    let http: HttpTestingController;

    beforeEach(async () => {
      await TestBed.configureTestingModule({
        imports: [
          HttpClientTestingModule,
          MatSnackBarModule,
          RouterTestingModule,
          MatCardModule,
          ReactiveFormsModule,
          MatInputModule,
          MatSelectModule,
          MatIconModule,
          NoopAnimationsModule,
        ],
        declarations: [AddComponent, FormComponent],
      }).compileComponents();
    });

    beforeEach(() => {
      fixture = TestBed.createComponent(AddComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
      http = TestBed.inject(HttpTestingController);
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });

    xdescribe('createRecipe', () => {
      const recipe: Recipe = { title: 'coucou' } as any;

      it('Should HTTP post the recipe unchanged', () => {
        const service = TestBed.inject(RecipesService);
        const request = http.expectOne(service['_url']);

        component.createRecipe(recipe);

        request.flush(recipe);

        // expect(spy.calls.argsFor(1)[1]).toBe(recipe);

        expect(request.request.body).toBe(recipe);

        http.verify();
      });
    });
  });

  describe('Unit testing', () => {
    let component: AddComponent;
    let service: RecipesService;
    let snacker: MatSnackBar;
    let router: Router;

    beforeEach(() => {
      service = recipesServiceMock();
      component = new AddComponent(service, matSnackBarMock(), routerMock());
      snacker = component['snacker'];
      router = component['router'];
    });

    it('Should be defined', () => {
      expect(component).toBeDefined();
    });

    describe('createRecipe', () => {
      const recipe: Recipe = { title: 'coucou' } as any;

      it('Should call service.createRecipe', () => {
        component.createRecipe(recipe);
        expect(service.createRecipe).toHaveBeenCalledOnceWith(recipe);
      });

      it('Should call snacker.open and router.navigateByUrl', (done) => {
        component.createRecipe(recipe);

        // (service.createRecipe as jasmine.Spy).calls.reset();

        service.createRecipe(recipe).subscribe(() => {
          expect(router.navigateByUrl).toHaveBeenCalledTimes(1);
          expect(snacker.open).toHaveBeenCalled();
          expect(snacker.open).toHaveBeenCalledBefore(router.navigateByUrl);
          done();
        });
      });
    });
  });
});
