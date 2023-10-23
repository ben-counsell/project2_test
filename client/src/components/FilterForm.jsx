import { useState } from "react"

const FilterForm = ({setFilters}) => {

    const [cuisines, setCuisines] = useState([])
    const [diets, setDiets] = useState([])

    const handleCuisineChange = (evt) => {
        let newCuisinesFilter
        console.log(evt.target.checked)
        console.log(evt.target.value)

        if (evt.target.checked) {
            setCuisines([...cuisines, evt.target.value])

        } else {
            newCuisinesFilter = cuisines.filter((cuisine) => cuisine != evt.target.value)
            setCuisines(newCuisinesFilter)
        }
    }
    
    // const handleDietChange = (evt) => setDiet(evt.target.value)
    
    const onSubmit = (evt) => {
        evt.preventDefault()
        setFilters({
            cuisine:cuisine,
            diet:diet
        })
        setCuisine('')
        setDiet('')
    }

    return (
        <form onSubmit={onSubmit}>
            <div className="diet-select">
                <label htmlFor="chinese">Chinese</label>
                <input type="checkbox" name="cuisine" value="chinese" onChange={handleCuisineChange}/><br/>

                <label htmlFor="thai">Thai</label>
                <input type="checkbox" name="cuisine" value="thai" onChange={handleCuisineChange}/><br/>

                <label htmlFor="italian">Italian</label>
                <input type="checkbox" name="cuisine" value="italian" onChange={handleCuisineChange}/>
            </div>
        </form>
    );
}
 
export default FilterForm;