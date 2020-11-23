import { useLandmark } from './landmarkDataProvider.js'
import { Landmark } from './landmark.js'

export const landmarkList = () => {

    // Get a reference to the `<article class="">` element
    const contentElement = document.querySelector(".location__cities__landmarks")
    const landmarks = useLandmark()

    let landmarkHTML = ""
    for (const landmark of landmarks) {
        landmarkHTML += Landmark(landmark)
        // console.log(city)
    }
    // Add to the existing HTML in the content element
    contentElement.innerHTML += `
        <article class=".location__cities__landmarks">
            ${landmarkHTML}
        </article>
    `
}