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
                            <h3>Cuisine:</h3>
                            <input type="checkbox" name="cuisine" value="italian" onChange={handleCuisinesChange}/>
                            <label htmlFor="italian">Italian</label><br/>
                            
                            <input type="checkbox" name="cuisine" value="french" onChange={handleCuisinesChange}/>
                            <label htmlFor="french">French</label><br/>
                            
                            <input type="checkbox" name="cuisine" value="spanish" onChange={handleCuisinesChange}/>
                            <label htmlFor="spanish">Spanish</label><br/>
                            
                            <input type="checkbox" name="cuisine" value="greek" onChange={handleCuisinesChange}/>
                            <label htmlFor="greek">Greek</label><br/>
                            
                            <input type="checkbox" name="cuisine" value="african" onChange={handleCuisinesChange}/>
                            <label htmlFor="african">African</label><br/>
                            
                            <input type="checkbox" name="cuisine" value="chinese" onChange={handleCuisinesChange}/>
                            <label htmlFor="chinese">Chinese</label><br/>
                            
                            <input type="checkbox" name="cuisine" value="thai" onChange={handleCuisinesChange}/>
                            <label htmlFor="thai">Thai</label><br/>
                            
                            <input type="checkbox" name="cuisine" value="vietnamese" onChange={handleCuisinesChange}/>
                            <label htmlFor="vietnamese">Vietnamese</label><br/>
                            
                            <input type="checkbox" name="cuisine" value="korean" onChange={handleCuisinesChange}/>
                            <label htmlFor="korean">Korean</label><br/>
                            
                            <input type="checkbox" name="cuisine" value="japanese" onChange={handleCuisinesChange}/>
                            <label htmlFor="japanese">Japanese</label><br/>
                            
                            <input type="checkbox" name="cuisine" value="indian" onChange={handleCuisinesChange}/>
                            <label htmlFor="indian">Indian</label><br/>
                            
                            <input type="checkbox" name="cuisine" value="latin%20american" onChange={handleCuisinesChange}/>
                            <label htmlFor="latin%20american">Latin American</label><br/>
                            
                            <input type="checkbox" name="cuisine" value="mexican" onChange={handleCuisinesChange}/>
                            <label htmlFor="mexican">Mexican</label><br/>
                            
                            <input type="checkbox" name="cuisine" value="caribbean" onChange={handleCuisinesChange}/>
                            <label htmlFor="caribbean">Caribbean</label><br/>
                            
                            <input type="checkbox" name="cuisine" value="cajun" onChange={handleCuisinesChange}/>
                            <label htmlFor="cajun">Cajun</label><br/>
                            
                            <input type="checkbox" name="cuisine" value="american" onChange={handleCuisinesChange}/>
                            <label htmlFor="american">American</label><br/>
                        </div>
                        <div className="filter-select">
                            <h3>Meal type:</h3>
                            <input type="checkbox" name="type" value="main%20course" onChange={handleTypesChange}/>
                            <label htmlFor="main%20course">Main Course</label><br/>
                            
                            <input type="checkbox" name="type" value="appetizer" onChange={handleTypesChange}/>
                            <label htmlFor="appetizer">Appetiser</label><br/>
                            
                            <input type="checkbox" name="type" value="dessert" onChange={handleTypesChange}/>
                            <label htmlFor="dessert">Dessert</label><br/>
                            
                            <input type="checkbox" name="type" value="side%20dish" onChange={handleTypesChange}/>
                            <label htmlFor="side%20dish">Side Dish</label><br/>
                            
                            <input type="checkbox" name="type" value="breakfast" onChange={handleTypesChange}/>
                            <label htmlFor="breakfast">Breakfast</label><br/>
                        </div>
                        <div className="filter-select">
                            <h3>Key Ingredients:</h3>
                            <input type="checkbox" name="type" value="chicken" onChange={handleKeyIngredientsChange}/>
                            <label htmlFor="chicken">Chicken</label><br/>
                            
                            <input type="checkbox" name="type" value="beef" onChange={handleKeyIngredientsChange}/>
                            <label htmlFor="beef">Beef</label><br/>
                            
                            <input type="checkbox" name="type" value="pork" onChange={handleKeyIngredientsChange}/>
                            <label htmlFor="pork">Pork</label><br/>
                            
                            <input type="checkbox" name="type" value="chicken" onChange={handleKeyIngredientsChange}/>
                            <label htmlFor="lamb">Lamb</label><br/>
                            
                            <input type="checkbox" name="type" value="tofu" onChange={handleKeyIngredientsChange}/>
                            <label htmlFor="tofu">Tofu</label><br/>
                            
                            <input type="checkbox" name="type" value="aubergine,eggplant" onChange={handleKeyIngredientsChange}/>
                            <label htmlFor="aubergine,eggplant">Aubergine</label><br/>

                            <input type="checkbox" name="type" value="halloumi" onChange={handleKeyIngredientsChange}/> 
                            <label htmlFor="halloumi">Halloumi</label>
                            
                        </div>
                    </div>
                    <input className="filter-submit-button" type="submit" value="Set Filters"/>
                    <br />
                </form>
            </div>
        </div>
    );
}
 
export default FilterForm;