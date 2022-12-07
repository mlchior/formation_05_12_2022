import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { RecipesService } from './providers/http/recipes.service';
import { recipesServiceMock } from './providers/http/recipes.service.spec';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        MatToolbarModule,
        MatIconModule,
      ],
      declarations: [AppComponent],
      providers: [RecipesService],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});

describe('AppComponent unit testing', () => {
  let component: AppComponent;
  let service: RecipesService;

  beforeEach(() => {
    service = recipesServiceMock();
    component = new AppComponent(service);
  });

  it('Should be defined', () => {
    expect(component).toBeDefined();
  });
});
