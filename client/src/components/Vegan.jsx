import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';

const Vegan = ({ veganRecipes }) => {
  const veganCard = veganRecipes.map((recipe) => (
    <SplideSlide key={recipe.id}>
      <div className="recipe-card">
        <h4>{recipe.title}</h4>
        <img src={recipe.image} alt={`Picture for ${recipe.title}`} />
      </div>
    </SplideSlide>
  ));

  return (
    <div>
      <h3 className='carousel-title'>Vegan Options</h3>
      <div className='carousel'>  
        <Splide options={{ type: 'loop', perPage: 4, pagination: false, drag: 'free', gap: '5rem' }}>
          
          {veganCard}
        </Splide>
      </div>
    </div>
  );
};

export default Vegan;