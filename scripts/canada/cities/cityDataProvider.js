const cityCollection = [
    {
        name: "Toronto, Ontario"
    },
    {
        name: "Montréal, Québec"
    },
    {
        name: "Vancouver, British Columbia"
    }
]

// Take the array above and slice (copy) it into a new array to preserve the original
export const useCity = () => {
    return cityCollection.slice()
}