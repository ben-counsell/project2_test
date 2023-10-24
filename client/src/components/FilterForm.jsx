import { useState, useRef } from "react"
import '../style/Accordion.css'

const FilterForm = ({getFilters}) => {

    const [accordionExpanded, setAccordionExpanded] = useState(false)

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
        setAccordionExpanded(!accordionExpanded)
        const cuisineString = cuisines.join(',')
        const dietString = diets.join(',')
        getFilters({
            cuisine:(cuisines.length > 0 ? `cuisine=${cuisineString}` : ''),
            diet:(diets.length > 0 ? `diet=${dietString}` : '')
        })
    }

    return (
        <div className={`accordion${accordionExpanded ? '-open' : ''}`}>

            <button className="button" onClick={() => setAccordionExpanded(!accordionExpanded)}>
                <h3>Filter</h3>
                <span className="control">{accordionExpanded ? '—' : '+'}</span>
            </button>

            <div className={`accordion-wrapper${accordionExpanded ? '-open' : ''}`}>
                <form onSubmit={onSubmit} className="accordion-form">

                    <div className="filter-option-form">
                        <div className="filter-select">
                            <h3>Cuisine:</h3><br/>
                            <label htmlFor="italian">Italian</label>
                            <input type="checkbox" name="cuisine" value="italian" onChange={handleCuisinesChange}/>

                            <label htmlFor="french">French</label>
                            <input type="checkbox" name="cuisine" value="french" onChange={handleCuisinesChange}/>

                            <label htmlFor="spanish">Spanish</label>
                            <input type="checkbox" name="cuisine" value="spanish" onChange={handleCuisinesChange}/>

                            <label htmlFor="greek">Greek</label>
                            <input type="checkbox" name="cuisine" value="greek" onChange={handleCuisinesChange}/>

                            <label htmlFor="african">African</label>
                            <input type="checkbox" name="cuisine" value="african" onChange={handleCuisinesChange}/>

                            <label htmlFor="chinese">Chinese</label>
                            <input type="checkbox" name="cuisine" value="chinese" onChange={handleCuisinesChange}/>

                            <label htmlFor="thai">Thai</label>
                            <input type="checkbox" name="cuisine" value="thai" onChange={handleCuisinesChange}/>

                            <label htmlFor="vietnamese">Vietnamese</label>
                            <input type="checkbox" name="cuisine" value="vietnamese" onChange={handleCuisinesChange}/>

                            <label htmlFor="korean">Korean</label>
                            <input type="checkbox" name="cuisine" value="korean" onChange={handleCuisinesChange}/>

                            <label htmlFor="japanese">Japanese</label>
                            <input type="checkbox" name="cuisine" value="japanese" onChange={handleCuisinesChange}/>

                            <label htmlFor="indian">Indian</label>
                            <input type="checkbox" name="cuisine" value="indian" onChange={handleCuisinesChange}/>

                            <label htmlFor="latin%20american">Latin American</label>
                            <input type="checkbox" name="cuisine" value="latin%20american" onChange={handleCuisinesChange}/>

                            <label htmlFor="mexican">Mexican</label>
                            <input type="checkbox" name="cuisine" value="mexican" onChange={handleCuisinesChange}/>

                            <label htmlFor="caribbean">Caribbean</label>
                            <input type="checkbox" name="cuisine" value="caribbean" onChange={handleCuisinesChange}/>

                            <label htmlFor="cajun">Cajun</label>
                            <input type="checkbox" name="cuisine" value="cajun" onChange={handleCuisinesChange}/>

                            <label htmlFor="american">American</label>
                            <input type="checkbox" name="cuisine" value="american" onChange={handleCuisinesChange}/>
                        </div>

                        <div className="filter-select">
                            <h3>Dietary<br/>requirements:</h3>
                            <label htmlFor="vegetarian">Vegetarian</label>
                            <input type="checkbox" name="diet" value="vegetarian" onChange={handleDietsChange}/><br/>

                            <label htmlFor="vegan">Vegan</label>
                            <input type="checkbox" name="diet" value="vegan" onChange={handleDietsChange}/><br/>

                            <label htmlFor="gluten%20free">Gluten Free</label>
                            <input type="checkbox" name="diet" value="gluten%20free" onChange={handleDietsChange}/><br/>
                        </div>
                    </div>

                    <input className="filter-submit-button" type="submit"/>

                </form>
            </div>
        </div>
    );
}
 
export default FilterForm;