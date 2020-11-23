// CitizenList which renders individual citizen objects as HTML

import { Citizen } from "./Citizen.js"
import { useCitizen } from "./CitizenDataProvider.js"
const citizens = useCitizen()

export const CitizenList = () => {
    const contentElement = document.querySelector(".location__citizens__list")
    let citizenHTMLRepresentations = ""

        for (const citizenObject of citizens){
            const citizenHTMLRepresentations = Citizen(citizenObject)
            contentElement.innerHTML += citizenHTMLRepresentations

        }
            contentElement.innerHTML += `
            <article class=".location__citizens__list">
                ${citizenHTMLRepresentations}
            </article>
        `

}