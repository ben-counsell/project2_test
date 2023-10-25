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
        console.log(setCustomerPreferences)
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
                            <input type="checkbox" name="diet" value="gluten%20free" onChange={handleDietaryPreferenceChange}/>
                            <label htmlFor="gluten%20free">Gluten Free</label><br/>

                            <input type="checkbox" name="diet" value="ketogenic" onChange={handleDietaryPreferenceChange}/>
                            <label htmlFor="ketogenic">Ketogenic</label><br/>

                            <input type="checkbox" name="diet" value="vegetarian" onChange={handleDietaryPreferenceChange}/>
                            <label htmlFor="vegetarian">Vegetarian</label><br/>

                            <input type="checkbox" name="diet" value="vegan" onChange={handleDietaryPreferenceChange}/>
                            <label htmlFor="vegan">Vegan</label><br/>
                        </div>
                        <div className="filter-select">
                            <h3>Intolerances:</h3>
                            <input type="checkbox" name="intolerance" value="dairy" onChange={handleIntoleranceChange} checked={intolerances.includes('dairy')}/>
                            <label htmlFor="dairy">Dairy</label><br/>

                            <input type="checkbox" name="intolerance" value="egg" onChange={handleIntoleranceChange} checked={intolerances.includes('egg') ? true : false}/> 
                            <label htmlFor="egg">Egg</label><br/>

                            <input type="checkbox" name="intolerance" value="gluten" onChange={handleIntoleranceChange} checked={intolerances.includes('gluten') ? true : false}/>
                            <label htmlFor="gluten">Gluten</label><br/>

                            <input type="checkbox" name="intolerance" value="grain" onChange={handleIntoleranceChange} checked={intolerances.includes('grain') ? true : false}/>
                            <label htmlFor="grain">Grain</label><br/>
                            
                            <input type="checkbox" name="intolerance" value="peanut" onChange={handleIntoleranceChange} checked={intolerances.includes('peanut') ? true : false}/>
                            <label htmlFor="peanut">Peanut</label><br/>

                            <input type="checkbox" name="intolerance" value="seafood" onChange={handleIntoleranceChange} checked={intolerances.includes('seafood') ? true : false}/>
                            <label htmlFor="seafood">Seafood</label><br/>

                            <input type="checkbox" name="intolerance" value="sesame" onChange={handleIntoleranceChange} checked={intolerances.includes('sesame') ? true : false}/>
                            <label htmlFor="sesame">Sesame</label><br/>

                            <input type="checkbox" name="intolerance" value="shellfish" onChange={handleIntoleranceChange} checked={intolerances.includes('shellfish') ? true : false}/>
                            <label htmlFor="shellfish">Shellfish</label><br/>

                            <input type="checkbox" name="intolerance" value="soy" onChange={handleIntoleranceChange} checked={intolerances.includes('soy') ? true : false}/>
                            <label htmlFor="soy">Soy</label><br/>

                            <input type="checkbox" name="intolerance" value="sulfite" onChange={handleIntoleranceChange} checked={intolerances.includes('sulfite') ? true : false}/>
                            <label htmlFor="sulfite">Sulfite</label><br/>

                            <input type="checkbox" name="intolerance" value="tree%20nut" onChange={handleIntoleranceChange} checked={intolerances.includes('tree nut') ? true : false}/>
                            <label htmlFor="tree%20nut">Tree nut</label><br/>

                            <input type="checkbox" name="intolerance" value="wheat" onChange={handleIntoleranceChange} checked={intolerances.includes('wheat') ? true : false}/>
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