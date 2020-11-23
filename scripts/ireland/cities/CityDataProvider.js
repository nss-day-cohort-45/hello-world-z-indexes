//Creating a city array

const cityCollection = [

    {name: "Belfast"
    },

    {name: "Dublin"

    },

    {name: "Cork"
    }
]

export const useCity = () => {
    return cityCollection.slice()
}