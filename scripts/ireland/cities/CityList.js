// CityList which renders individual city objects as HTML

import { City } from "./City.js"
import { useCity } from "./CityDataProvider.js"
const cities = useCity()

export const CityList = () => {
    const contentElement = document.querySelector(".location__cities__list")
    let cityHTMLRepresentations = ""

        for (const cityObject of cities){
            const cityHTMLRepresentations = City(cityObject)
            contentElement.innerHTML += cityHTMLRepresentations

        }
            contentElement.innerHTML += `
            <article class=".location__cities__list">
                ${cityHTMLRepresentations}
            </article>
        `

}