import { useState } from "react"

const FilterForm = ({setFilters}) => {

    const [cuisine, setCuisine] = useState('cuisine=')
    const [diet, setDiet] = useState('diet=')

    const handleCuisineChange = (evt) => {
        let newCuisineFilter
        
        if (evt.target.checked) {
            newCuisineFilter = cuisine + `${evt.target.name},`
            console.log(newCuisineFilter)
        } else {
            newCuisineFilter = cuisine.replace(`${evt.target.name},`, '')
        }

        // gets rid of comma at end of string:
        // newCuisineFilter.at(-1) === ',' ? newCuisineFilter = newCuisineFilter.slice(0, -1) : null 

        setCuisine(newCuisineFilter)
        console.log(cuisine)
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
                <input type="checkbox" name="chinese" onChange={handleCuisineChange}/>

                <label htmlFor="thai">Thai</label>
                <input type="checkbox" name="thai" onChange={handleCuisineChange}/>

                <label htmlFor="italian">Italian</label>
                <input type="checkbox" name="italian" onChange={handleCuisineChange}/>
            </div>
        </form>
    );
}
 
export default FilterForm;