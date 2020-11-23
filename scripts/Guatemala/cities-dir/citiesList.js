import {useCities} from "./citiesDataProvider.js"
import {Cities} from "./cities.js"
export const citiesList = () => {

    const contentElement = document.querySelector(".location__cities__list")
    const allTheCities = useCities()

    for (const citiesObject of allTheCities){
        const citiesHTML = Cities(citiesObject)
        contentElement.innerHTML += citiesHTML
    }

 
   
}