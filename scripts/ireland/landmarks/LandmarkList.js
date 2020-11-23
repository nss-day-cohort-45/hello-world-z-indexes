// CityList which renders individual city objects as HTML

import { Landmark } from "./Landmark.js"
import { useLandmark } from "./LandmarkDataProvider.js"
const landmarks = useLandmark()

export const LandmarkList = () => {
    const contentElement = document.querySelector(".location__landmarks__list")
    let landmarkHTMLRepresentations = ""

        for (const landmarkObject of landmarks){
            const landmarkHTMLRepresentations = Landmark(landmarkObject)
            contentElement.innerHTML += landmarkHTMLRepresentations

        }
            contentElement.innerHTML += `
            <article class=".location__landmarks__list">
                ${landmarkHTMLRepresentations}
            </article>
        `

}