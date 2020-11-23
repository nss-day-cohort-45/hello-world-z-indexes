import { useCitizen } from './citizenDataProvider.js'
import { Citizen } from './citizen.js'

export const citizenList = () => {

    // Get a reference to the `<article class="">` element
    const contentElement = document.querySelector(".location__cities__citizens")
    const citizens = useCitizen()

    let citizenHTML = ""
    for (const citizen of citizens) {
        citizenHTML += Citizen(citizen)
        // console.log(city)
    }
    // Add to the existing HTML in the content element
    contentElement.innerHTML += `
        <article class=".location__cities__citizens">
            ${citizenHTML}
        </article>
    `
}