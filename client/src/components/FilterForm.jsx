import { useState, useRef } from "react"
import '../style/Accordion.css'

const FilterForm = ({getFilters}) => {

    const [accordionExpanded, setAccordionExpanded] = useState(false)

    const [cuisines, setCuisines] = useState([])
    const [types, setTypes] = useState([])
    const [keyIngredients, setKeyIngredients] = useState([])

    const contentElement = useRef()

    const handleCuisinesChange = (evt) => {
        let newCuisinesFilter

        if (evt.target.checked) {
            setCuisines([...cuisines, evt.target.value])

        } else {
            newCuisinesFilter = cuisines.filter((cuisine) => cuisine != evt.target.value)
            setCuisines(newCuisinesFilter)
        }
    }

    const handleTypesChange = (evt) => {
        let newTypesFilter

        if (evt.target.checked) {
            setTypes([...types, evt.target.value])

        } else {
            newTypesFilter = types.filter((type) => type != evt.target.value)
            setTypes(newTypesFilter)
        }
    }

    const handleKeyIngredientsChange = (evt) => {
        let newKeyIngredientsFilter

        if (evt.target.checked) {
            setKeyIngredients([...keyIngredients, evt.target.value])
        } else {
            newKeyIngredientsFilter = keyIngredients.filter((ingredient) => ingredient != evt.target.value)
            setKeyIngredients(newKeyIngredientsFilter)
        }
    }
        
    const onSubmit = (evt) => {
        evt.preventDefault()
        setAccordionExpanded(!accordionExpanded)
        const cuisineString = cuisines.join(',')
        const typeString = types.join(',')
        const ingredientString = keyIngredients.join(',')
        getFilters({
            cuisine:(cuisines.length > 0 ? `cuisine=${cuisineString}` : ''),
            type:(types.length > 0 ? `type=${typeString}` : ''),
            keyIngredients:(keyIngredients.length > 0 ? `includeIngredients=${ingredientString}` : '')
        })
    }

    return (
        <div className={`accordion${accordionExpanded ? '-open' : ''}`}>

            <button className="button" onClick={() => setAccordionExpanded(!accordionExpanded)}>
                <h3>Filter</h3>
                <span className="control">{accordionExpanded ? '—' : '+'}</span>
            </button>

            <div ref={contentElement} className="accordion-wrapper" style={
                accordionExpanded
                    ? {height:contentElement.current.scrollHeight}
                    : {height:'0px'}   
            }>
                <form onSubmit={onSubmit} className="accordion-form">

                    <div className="filter-option-form">
                        <div className="filter-select">
                            <h3>Cuisine:</h3><br/>
                            <label htmlFor="italian">Italian</label>
                            <input type="checkbox" name="cuisine" value="italian" onChange={handleCuisinesChange}/>
                            <br/>
                            <label htmlFor="french">French</label>
                            <input type="checkbox" name="cuisine" value="french" onChange={handleCuisinesChange}/>
                            <br/>
                            <label htmlFor="spanish">Spanish</label>
                            <input type="checkbox" name="cuisine" value="spanish" onChange={handleCuisinesChange}/>
                            <br/>
                            <label htmlFor="greek">Greek</label>
                            <input type="checkbox" name="cuisine" value="greek" onChange={handleCuisinesChange}/>
                            <br/>
                            <label htmlFor="african">African</label>
                            <input type="checkbox" name="cuisine" value="african" onChange={handleCuisinesChange}/>
                            <br/>
                            <label htmlFor="chinese">Chinese</label>
                            <input type="checkbox" name="cuisine" value="chinese" onChange={handleCuisinesChange}/>
                            <br/>
                            <label htmlFor="thai">Thai</label>
                            <input type="checkbox" name="cuisine" value="thai" onChange={handleCuisinesChange}/>
                            <br/>
                            <label htmlFor="vietnamese">Vietnamese</label>
                            <input type="checkbox" name="cuisine" value="vietnamese" onChange={handleCuisinesChange}/>
                            <br/>
                            <label htmlFor="korean">Korean</label>
                            <input type="checkbox" name="cuisine" value="korean" onChange={handleCuisinesChange}/>
                            <br/>
                            <label htmlFor="japanese">Japanese</label>
                            <input type="checkbox" name="cuisine" value="japanese" onChange={handleCuisinesChange}/>
                            <br/>
                            <label htmlFor="indian">Indian</label>
                            <input type="checkbox" name="cuisine" value="indian" onChange={handleCuisinesChange}/>
                            <br/>
                            <label htmlFor="latin%20american">Latin American</label>
                            <input type="checkbox" name="cuisine" value="latin%20american" onChange={handleCuisinesChange}/>
                            <br/>
                            <label htmlFor="mexican">Mexican</label>
                            <input type="checkbox" name="cuisine" value="mexican" onChange={handleCuisinesChange}/>
                            <br/>
                            <label htmlFor="caribbean">Caribbean</label>
                            <input type="checkbox" name="cuisine" value="caribbean" onChange={handleCuisinesChange}/>
                            <br/>
                            <label htmlFor="cajun">Cajun</label>
                            <input type="checkbox" name="cuisine" value="cajun" onChange={handleCuisinesChange}/>
                            <br/>
                            <label htmlFor="american">American</label>
                            <input type="checkbox" name="cuisine" value="american" onChange={handleCuisinesChange}/>
                        </div>

                        <div className="filter-select">
                            <h3>Meal type:</h3>
                            <label htmlFor="main%20course">Main Course</label>
                            <input type="checkbox" name="type" value="main%20course" onChange={handleTypesChange}/><br/>

                            <label htmlFor="appetizer">Appetiser</label>
                            <input type="checkbox" name="type" value="appetizer" onChange={handleTypesChange}/><br/>

                            <label htmlFor="dessert">Dessert</label>
                            <input type="checkbox" name="type" value="dessert" onChange={handleTypesChange}/><br/>
                            
                            <label htmlFor="side%20dish">Side Dish</label>
                            <input type="checkbox" name="type" value="side%20dish" onChange={handleTypesChange}/><br/>

                            <label htmlFor="breakfast">Breakfast</label>
                            <input type="checkbox" name="type" value="breakfast" onChange={handleTypesChange}/><br/>
                        </div>

                        <div className="filter-select">
                            <h3>Key Ingredients:</h3>
                            <label htmlFor="chicken">Chicken</label>
                            <input type="checkbox" name="type" value="chicken" onChange={handleKeyIngredientsChange}/><br/>

                            <label htmlFor="beef">Beef</label>
                            <input type="checkbox" name="type" value="beef" onChange={handleKeyIngredientsChange}/><br/>

                            <label htmlFor="pork">Pork</label>
                            <input type="checkbox" name="type" value="pork" onChange={handleKeyIngredientsChange}/><br/>

                            <label htmlFor="lamb">Lamb</label>
                            <input type="checkbox" name="type" value="chicken" onChange={handleKeyIngredientsChange}/><br/>

                            <label htmlFor="tofu">Tofu</label>
                            <input type="checkbox" name="type" value="tofu" onChange={handleKeyIngredientsChange}/><br/>

                            <label htmlFor="aubergine,eggplant">Aubergine</label>
                            <input type="checkbox" name="type" value="aubergine,eggplant" onChange={handleKeyIngredientsChange}/><br/>

                            <label htmlFor="halloumi">Halloumi</label>
                            <input type="checkbox" name="type" value="halloumi" onChange={handleKeyIngredientsChange}/><br/>
                        </div>
                    </div>

                    <input className="filter-submit-button" type="submit" value="Set Filters"/>

                </form>
            </div>
        </div>
    );
}
 
export default FilterForm;