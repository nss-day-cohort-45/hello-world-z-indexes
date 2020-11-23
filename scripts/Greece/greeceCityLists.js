import { greeceCities } from './greece.cities.js'
import { useCities } from "./greececityprovider.js" 
const city = useCities()

export const greekCities = () => {
    const contentElement = document.querySelector(".location__cities__ul")
    let cityHTML = ""

    

    for (const cityObject of city) {
         cityHTML += greeceCities(cityObject)
        // contentElement.innerHTML += cityHTML
    }
    contentElement.innerHTML += `
        <article class=".location">
            ${cityHTML}
        </article>
    `
}