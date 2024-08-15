import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Recipe } from './recipe.model';
import { RecipesService } from './recipes.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit, OnDestroy {
  recipes: Recipe[] = [];
  private recipesSub!: Subscription;

  constructor(private recipesService: RecipesService) {}

  ngOnInit() {
    this.recipesSub = this.recipesService
      .getAllRecipes()
      .subscribe((recipes) => {
        this.recipes = recipes;
      });
  }

  ngOnDestroy() {
    if (this.recipesSub) {
      this.recipesSub.unsubscribe();
    }
  }
}
