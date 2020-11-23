//Creating a city array

const landmarkCollection = [

    {name: "Cliffs of Moher"
    },

    {name: "Grafton Street, Dublin"
    },

    {name: "Divis Flats, Belfast"
    }
]

export const useLandmark = () => {
    return landmarkCollection.slice()
}