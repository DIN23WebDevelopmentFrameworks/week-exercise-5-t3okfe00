import { IRecipe } from "./types";
interface IRecipeProps {
  recipeData: IRecipe;
}

const Recipe = ({ recipeData }: IRecipeProps) => {
  console.log("RECİPE DATA", recipeData);
  return (
    <div>
      <button>BACK</button>
      <h1>{recipeData.name}</h1>
      <h2>Ingredients</h2>
      <ul>
        {recipeData.ingredients.map((ingredient) => (
          <li>{ingredient}</li>
        ))}
      </ul>
      <h2>Instructions</h2>
      {recipeData.instructions.map((instruction, index) => (
        <p>
          {index + 1}.{instruction}
        </p>
      ))}
    </div>
  );
};

export default Recipe;
