import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';


const Thai = ({ thaiRecipes }) => {
  const thaiCard = thaiRecipes.map((recipe) => (
    <SplideSlide key={recipe.id}>
      <div className="recipe-card">
        <h4>{recipe.title}</h4>
        <img src={recipe.image} alt={`Picture for ${recipe.title}`} />
      </div>
    </SplideSlide>
  ));

  return (
    <div>
      <h3 className='carousel-title'>Thai Options</h3>
      <div className='carousel'>  
        <Splide options={{ type: 'loop', perPage: 4, pagination: false, drag: 'free', gap: '5rem' }}>
          
          {thaiCard}
          
        </Splide>
      </div>
    </div>
  );
};

export default Thai;