import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import { Link } from 'react-router-dom'

const Carousel = ({ recipes, title }) => {
  const Carousel = recipes.map((recipe) => (
    <SplideSlide key={recipe.id}>
        <Link to={"/recipe/"+recipe.id}>
      <div className="recipe-card">
        <h4>{recipe.title}</h4>
        <img src={recipe.image} alt={`Picture for ${recipe.title}`} />
      </div>
      </Link>
    </SplideSlide>
  ));

  return (
    <div>
      <h3 className='carousel-title'>{title}</h3>
      <div className='carousel'>        
        <Splide options={{ type: 'loop', perPage: 4, pagination: false, drag: 'free', gap: '5rem' }}>
          {Carousel}
        </Splide>
      </div>
    </div>
  );
};

export default Carousel;