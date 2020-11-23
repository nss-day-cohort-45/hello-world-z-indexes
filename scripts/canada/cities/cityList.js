import { useCity } from './cityDataProvider.js'
import { City } from './city.js'

export const cityList = () => {

    // Get a reference to the `<article class="">` element
    const contentElement = document.querySelector(".location__cities__list")
    const cities = useCity()

    let cityHTML = ""
    for (const city of cities) {
        cityHTML += City(city)
        // console.log(city)
    }
    // Add to the existing HTML in the content element
    contentElement.innerHTML += `
        <article class=".location__cities__list">
            ${cityHTML}
        </article>
    `
}