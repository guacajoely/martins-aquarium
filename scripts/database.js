//CREATE PROTOTYPE FISH OBJECT

const database = {
    fish: [
        {
            name: "fish1",
            species: 'blue tang',
            length: 1,
            location: "Nebraska",
            diet: "plankton, crustaceans"
        },
        {
            name: "fish2",
            species: 'goldfish',
            length: .5,
            location: "Columbus, OH",
            diet: "fish flakes"
        },
        {
            name: "fish3",
            species: 'yellowtail',
            length: 3,
            location: "California",
            diet: "crustaceans"
        },
        {
            name: "fish4",
            species: 'salmon',
            length: 4,
            location: "Pacific Ocean",
            diet: "crustaceans, small fish"
        },
        {
            name: "fish5",
            species: 'tuna',
            length: 2,
            location: "Atlantic Ocean",
            diet: "plankton, small fish, squid"
        }
    ]
}





export const getFish = () => {
    return database.fish.map(copyOfSingleFishObject => ({...copyOfSingleFishObject}))
}

console.log(getFish())