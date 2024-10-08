import { IRecipe } from "./types";
import Recipe from "./Recipe";
interface IRecipeListProps {
  recipes: IRecipe[];
}
const RecipeList = ({ recipes }: IRecipeListProps) => {
  console.log("GOT THE RECIPES IN RECIPE LIST", recipes);
  return (
    <div>
      <div>
        {recipes.map((recipe) => {
          return <Recipe recipeData={recipe} key={recipe.id}></Recipe>;
        })}
      </div>
    </div>
  );
};

export default RecipeList;
