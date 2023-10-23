import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';

const RecipeCard = ({ recipes }) => {
  const recipeGrid = recipes.map((recipe) => (
    <SplideSlide key={recipe.id}>
      <div className="recipe-card">
        <h3>{recipe.title}</h3>
        <img src={recipe.image} alt={`Picture for ${recipe.title}`} />
      </div>
    </SplideSlide>
  ));

  return (
    <div>
      <h3>Random recipes</h3>
      <Splide options={{ type: 'loop', perPage: 4, pagination: false, drag: 'free', gap: '5rem' }}>
        {recipeGrid}
      </Splide>
    </div>
  );
};

export default RecipeCard;
