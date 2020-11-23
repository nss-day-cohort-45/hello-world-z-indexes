const landmarkCollection = [
    {
        name: "CN Tower"
    },
    {
        name: "Banff National Park"
    },
    {
        name: "Peggy's Cove"
    }
]

// Take the array above and slice (copy) it into a new array to preserve the original
export const useLandmark = () => {
    return landmarkCollection.slice()
} 