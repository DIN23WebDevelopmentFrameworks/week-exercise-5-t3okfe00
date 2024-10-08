import { useEffect, useState } from "react";
import RecipeTagList from "./RecipeTagList";
import RecipeList from "./RecipeList";
import IRecipe from "./types";
const API_URL = "https://dummyjson.com/recipes/tags";
const CATEGORY_URL = "https://dummyjson.com/recipes/tag/";
const App = () => {
  const [tagList, setTagList] = useState<string[]>([]);
  const [recipes, setRecipes] = useState<IRecipe[]>([]);
  const [tagListHidden, setTagListHidden] = useState(false);
  useEffect(() => {
    const getTags = async () => {
      const response = await fetch(API_URL);
      const json = await response.json();
      setTagList(json);
    };

    getTags();
  }, []);

  async function onSelectTag(tagName: string) {
    console.log("Selected tag", tagName);
    const cTagName = tagName.charAt(0).toUpperCase() + tagName.slice(1);

    const recipes = await fetch(`${CATEGORY_URL}${cTagName}`);
    const response = await recipes.json();

    setRecipes(response.recipes);
    setTagListHidden(true);
  }

  return (
    <div>
      <h1>ACME Recipe O'Master</h1>
      {tagListHidden ? (
        <RecipeList recipes={recipes}></RecipeList>
      ) : (
        <RecipeTagList
          tagList={tagList}
          onSelectTag={onSelectTag}
        ></RecipeTagList>
      )}
    </div>
  );
};

export default App;
