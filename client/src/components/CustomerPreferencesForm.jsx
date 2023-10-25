import { useState, useRef, useEffect } from "react"
import '../style/Accordion.css'

const CustomerPrefererencesForm = ({ user, setCustomerPreferences }) => {

    const [accordionExpanded, setAccordionExpanded] = useState(false)
    const [dietaryPreferences, setDietaryPreferences] = useState([])
    const [intolerances, setIntolerances] = useState([])

    useEffect(() => {
        if (user.dietary_preferences) {
        setDietaryPreferences(user.dietary_preferences)
        setIntolerances(user.intolerances)
        }
    }, [user])

    const contentElement = useRef()

    const handleDietaryPreferenceChange = (evt) => {
        let newDietaryPreferences

        if (evt.target.checked) {
            setDietaryPreferences([...dietaryPreferences, evt.target.value])

        } else {
            newDietaryPreferences = dietaryPreferences.filter((preference) => preference != evt.target.value)
            setDietaryPreferences(newDietaryPreferences)
        }
    }

    const handleIntoleranceChange = (evt) => {
        let newIntolerances

        if (evt.target.checked) {
            setIntolerances([...intolerances, evt.target.value])

        } else {
            newIntolerances = intolerances.filter((intolerance) => intolerance != evt.target.value)
            setIntolerances(newIntolerances)
        }
    }

    const onSubmit = (evt) => {
        evt.preventDefault()
        setAccordionExpanded(!accordionExpanded)
        setCustomerPreferences(user._id, dietaryPreferences, intolerances)
    }

    return (
        <div className={`accordion${accordionExpanded ? '-open' : ''}`}>
        
            <button className="button" onClick={() => setAccordionExpanded(!accordionExpanded)}>
                <h3>Customer settings</h3>
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
                             <h3>Dietary requirements:</h3>
                            <input type="checkbox" name="diet" value="gluten%20free" onChange={handleDietaryPreferenceChange} checked={dietaryPreferences.includes('dairy')}/>
                            <label htmlFor="gluten%20free">Gluten Free</label><br/>

                            <input type="checkbox" name="diet" value="ketogenic" onChange={handleDietaryPreferenceChange} checked={dietaryPreferences.includes('ketogenic')}/>
                            <label htmlFor="ketogenic">Ketogenic</label><br/>

                            <input type="checkbox" name="diet" value="vegetarian" onChange={handleDietaryPreferenceChange} checked={dietaryPreferences.includes('vegetarian')}/>
                            <label htmlFor="vegetarian">Vegetarian</label><br/>

                            <input type="checkbox" name="diet" value="vegan" onChange={handleDietaryPreferenceChange} checked={dietaryPreferences.includes('vegan')}/>
                            <label htmlFor="vegan">Vegan</label><br/>
                        </div>
                        <div className="filter-select">
                            <h3>Intolerances:</h3>
                            <input type="checkbox" name="intolerance" value="dairy" onChange={handleIntoleranceChange} checked={intolerances.includes('dairy')}/>
                            <label htmlFor="dairy">Dairy</label><br/>

                            <input type="checkbox" name="intolerance" value="egg" onChange={handleIntoleranceChange} checked={intolerances.includes('egg')}/> 
                            <label htmlFor="egg">Egg</label><br/>

                            <input type="checkbox" name="intolerance" value="gluten" onChange={handleIntoleranceChange} checked={intolerances.includes('gluten')}/>
                            <label htmlFor="gluten">Gluten</label><br/>

                            <input type="checkbox" name="intolerance" value="grain" onChange={handleIntoleranceChange} checked={intolerances.includes('grain')}/>
                            <label htmlFor="grain">Grain</label><br/>
                            
                            <input type="checkbox" name="intolerance" value="peanut" onChange={handleIntoleranceChange} checked={intolerances.includes('peanut')}/>
                            <label htmlFor="peanut">Peanut</label><br/>

                            <input type="checkbox" name="intolerance" value="seafood" onChange={handleIntoleranceChange} checked={intolerances.includes('seafood')}/>
                            <label htmlFor="seafood">Seafood</label><br/>

                            <input type="checkbox" name="intolerance" value="sesame" onChange={handleIntoleranceChange} checked={intolerances.includes('sesame')}/>
                            <label htmlFor="sesame">Sesame</label><br/>

                            <input type="checkbox" name="intolerance" value="shellfish" onChange={handleIntoleranceChange} checked={intolerances.includes('shellfish')}/>
                            <label htmlFor="shellfish">Shellfish</label><br/>

                            <input type="checkbox" name="intolerance" value="soy" onChange={handleIntoleranceChange} checked={intolerances.includes('soy')}/>
                            <label htmlFor="soy">Soy</label><br/>

                            <input type="checkbox" name="intolerance" value="sulfite" onChange={handleIntoleranceChange} checked={intolerances.includes('sulfite')}/>
                            <label htmlFor="sulfite">Sulfite</label><br/>

                            <input type="checkbox" name="intolerance" value="tree%20nut" onChange={handleIntoleranceChange} checked={intolerances.includes('tree nut')}/>
                            <label htmlFor="tree%20nut">Tree nut</label><br/>

                            <input type="checkbox" name="intolerance" value="wheat" onChange={handleIntoleranceChange} checked={intolerances.includes('wheat')}/>
                            <label htmlFor="wheat">Wheat</label><br/>
                        </div>
                    </div>
                    <input className="filter-submit-button" type="submit" value="Set preferences"/>
                    <br />
                </form>
            </div>
        </div>
    );
}
 
export default CustomerPrefererencesForm;