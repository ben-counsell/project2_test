import Carousel from "../components/Carousel"


const Home = ({carouselRecipes, filteredResults}) => {

    const displayFilteredResults = () => {
        if (filteredResults.length > 0) {
            return <Carousel recipes={filteredResults} title={`${filteredResults.length} results`}/>
        } else if (filteredResults.noFilters) {
            return null
        } else {
            return <p>Your search returned no results</p>
        }
    }

    const filterResults = displayFilteredResults(filteredResults)

    return ( 
        <>
            <div className="recipe-container">
                {filterResults}
                {carouselRecipes.main ? <Carousel recipes={carouselRecipes.main} title='Main courses'/> : null}
                {carouselRecipes.vegan ? <Carousel recipes={carouselRecipes.vegan} title='Vegan options'/> : null}
                {carouselRecipes.vegetarian ? <Carousel recipes={carouselRecipes.vegetarian} title='Vegetarian choices'/> : null}
                {carouselRecipes.thai ? <Carousel recipes={carouselRecipes.thai} title='Thai options'/> : null}
            </div>
        </>
     );
}
 
export default Home;