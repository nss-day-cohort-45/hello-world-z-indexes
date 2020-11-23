import {useLandmarks} from "./landmarksDataProvider.js"
import {landmarks} from "./landmarks.js"
export const landmarksList = () => {

    const contentElement = document.querySelector(".location__landmarks__list")
    const allTheLandmarks = useLandmarks()

    for (const landmarksObject of allTheLandmarks){
        const landmarksHTML = landmarks(landmarksObject)
        contentElement.innerHTML += landmarksHTML
    }

 
   
}