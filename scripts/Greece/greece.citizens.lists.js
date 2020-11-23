import { greeceCitizens } from './greece.citizens.js'
import { useCitizens } from "./greece.citizens.provider.js" 
const citizen = useCitizens()

export const greekCitizens = () => {
    const contentElement = document.querySelector(".location__citizens__ul")
    let citizenHTML = ""

    

    for (const cityObject of citizen) {
         citizenHTML += greeceCitizens(cityObject)
        // contentElement.innerHTML += cityHTML
    }
    contentElement.innerHTML += `
        <article class=".location">
            ${citizenHTML}
        </article>
    `
}