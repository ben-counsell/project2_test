import { useState } from "react"

const FilterForm = ({getFilters}) => {

    const [cuisines, setCuisines] = useState([])
    const [diets, setDiets] = useState([])

    const handleCuisinesChange = (evt) => {
        let newCuisinesFilter

        if (evt.target.checked) {
            setCuisines([...cuisines, evt.target.value])

        } else {
            newCuisinesFilter = cuisines.filter((cuisine) => cuisine != evt.target.value)
            setCuisines(newCuisinesFilter)
        }
    }

    const handleDietsChange = (evt) => {
        let newDietsFilter

        if (evt.target.checked) {
            setDiets([...diets, evt.target.value])

        } else {
            newDietsFilter = diets.filter((diet) => diet != evt.target.value)
            setDiets(newDietsFilter)
        }
    }
        
    const onSubmit = (evt) => {
        evt.preventDefault()
        const cuisineString = cuisines.join(',')
        const dietString = diets.join(',')
        getFilters({
            cuisine:(cuisines.length > 0 ? `cuisine=${cuisineString}` : ''),
            diet:(diets.length > 0 ? `diet=${dietString}` : '')
        })
    }

    return (
        <form onSubmit={onSubmit}>
            <div className="filtered-options">
                <div className="cuisine-select">
                    <h3>Cuisine:</h3>
                    <label htmlFor="chinese">Chinese</label>
                    <input type="checkbox" name="cuisine" value="chinese" onChange={handleCuisinesChange}/><br/>

                    <label htmlFor="thai">Thai</label>
                    <input type="checkbox" name="cuisine" value="thai" onChange={handleCuisinesChange}/><br/>

                    <label htmlFor="italian">Italian</label>
                    <input type="checkbox" name="cuisine" value="italian" onChange={handleCuisinesChange}/>
                </div>

                <div className="diet-select">
                    <h3>Dietary requirements:</h3>
                    <label htmlFor="vegetarian">Vegetarian</label>
                    <input type="checkbox" name="diet" value="vegetarian" onChange={handleDietsChange}/><br/>

                    <label htmlFor="vegan">Vegan</label>
                    <input type="checkbox" name="diet" value="vegan" onChange={handleDietsChange}/><br/>

                    <label htmlFor="gluten%20free">Gluten Free</label>
                    <input type="checkbox" name="diet" value="gluten%20free" onChange={handleDietsChange}/><br/>
                </div>
                <input className="filter-submit-button" type="submit"/>
            </div>
            
        </form>
    );
}
 
export default FilterForm;