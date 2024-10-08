interface IRecipeTagProps {
  tagName: string;
  onSelectTag: (tagName: string) => void;
}

const RecipeTag = ({ tagName, onSelectTag }: IRecipeTagProps) => {
  return (
    <div>
      <button onClick={() => onSelectTag(tagName)}>{tagName}</button>
    </div>
  );
};

export default RecipeTag;
