const citizenCollection = [
    {
        name: "Jim Carrey"
    },
    {
        name: "Michael J. Fox"
    },
    {
        name: "Seth Rogen"
    }
]

// Take the array above and slice (copy) it into a new array to preserve the original
export const useCitizen = () => {
    return citizenCollection.slice()
}