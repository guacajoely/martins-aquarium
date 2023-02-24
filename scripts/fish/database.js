//CREATE PROTOTYPE FISH OBJECT

const database = {
    fish: [
        {
            id: 1,
            name: "James",
            species: 'Blue Tang',
            length: 5,
            location: "Nebraska",
            diet: "plankton, crustaceans"
        },
        {
            id: 2,
            name: "Arnold",
            species: 'Tarpon',
            length: 3,
            location: "Florida",
            diet: "plankton, crustaceans"
        },
        {
            id: 3,
            name: "Harrison",
            species: 'Yellowtail',
            length: 5,
            location: "California",
            diet: "crustaceans"
        },
        {
            id: 4,
            name: "Jimbo",
            species: 'Pumpkinseed Sunfish',
            length: 2,
            location: "Pacific Ocean",
            diet: "crustaceans, small fish"
        },
        {
            id: 5,
            name: "Jimmy",
            species: 'Tuna',
            length: 1,
            location: "Atlantic Ocean",
            diet: "plankton, small fish, squid"
        }
    ]
}


export const getFish = () => {
    
    return database.fish.map(copyOfSingleFishObject => ({...copyOfSingleFishObject}))
}