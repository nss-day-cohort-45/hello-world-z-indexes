import { Citizens } from "./citizens.js"
import {useCitizens} from "./citizensDataProvider.js"
export const citizensList = () => {

    const contentElement = document.querySelector(".location__citizens__list")
    const allTheCitizens = useCitizens()

    for (const citizensObject of allTheCitizens){
        const citizensHTML = Citizens(citizensObject)
        contentElement.innerHTML += citizensHTML
    }

 
   
}