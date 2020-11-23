import { greeceLandmarks } from './greece.landmarks.js'
import { useLandmarks } from "./greece.landmarks..provider.js" 
const landmark = useLandmarks()

export const greekLandmarks= () => {
    const contentElement = document.querySelector(".landmark__cities__ul")
    let locationHTML = ""

    

    for (const landmarkObject of landmark) {
         locationHTML += greeceLandmarks(landmarkObject)
        // contentElement.innerHTML += cityHTML
    }
    contentElement.innerHTML += `
        <article class=".location">
            ${locationHTML}
        </article>
    `
}
