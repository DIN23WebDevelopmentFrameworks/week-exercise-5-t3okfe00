import RecipeTag from "./RecipeTag";
interface IRecipeTagListProps {
  tagList: string[];
  onSelectTag: (tagName: string) => void;
}

const RecipeTagList = ({ tagList, onSelectTag }: IRecipeTagListProps) => {
  return (
    <div>
      <h3> Choose a tag below</h3>
      <ul>
        {tagList.map((tag) => (
          <li key={tag}>
            {" "}
            <RecipeTag tagName={tag} onSelectTag={onSelectTag}></RecipeTag>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeTagList;
