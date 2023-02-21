//CREATE PROTOTYPE FISH OBJECT

const database = {
    fish: [
        {
            id: 1,
            name: "James",
            species: 'Blue Tang',
            length: 1,
            location: "Nebraska",
            diet: "plankton, crustaceans"
        },
        {
            id: 2,
            name: "Arnold",
            species: 'Tarpon',
            length: 2,
            location: "Florida",
            diet: "plankton, crustaceans"
        },
        {
            id: 3,
            name: "Harrison",
            species: 'Yellowtail',
            length: 3,
            location: "California",
            diet: "crustaceans"
        },
        {
            id: 4,
            name: "Jimbo",
            species: 'Pumpkinseed Sunfish',
            length: 5,
            location: "Pacific Ocean",
            diet: "crustaceans, small fish"
        },
        {
            id: 5,
            name: "Jimmy",
            species: 'Tuna',
            length: 5,
            location: "Atlantic Ocean",
            diet: "plankton, small fish, squid"
        }
    ]
}


export const getFish = () => {
    
    return database.fish.map(copyOfSingleFishObject => ({...copyOfSingleFishObject}))
}



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// EXPLORER CHAPTER
// 2. FILTERING FISH
// Big Fish, Little Fish

//You need to build three functions in your fish data provider. 
//One to return an array of fish that are multiples of 3 in length, one for multiples of 5, and one for all others.


// 3, 6, 9, 12, etc... fish
export const mostHolyFish = () => {

    const holyFish = []

    for (const fishObject of database.fish) {
        if (fishObject.length % 3 === 0) {
            holyFish.push(fishObject)
        }
    }

    return holyFish.map(copyOfSingleFishObject => ({...copyOfSingleFishObject}))

}


// 5, 10, 15, 20, 25, etc... fish
export const soldierFish = () => {

    const soldiers = []

    for (const fishObject of database.fish) {
        if (fishObject.length % 5 === 0) {
            soldiers.push(fishObject)
        }
    }

    return soldiers.map(copyOfSingleFishObject => ({...copyOfSingleFishObject}))
}


// Any fish NOT a multiple of 3 or 5
export const nonHolyFish = () => {
   
    const regularFish = []

    for (const fishObject of database.fish) {
        if ( (fishObject.length % 3 !== 0) && (fishObject.length % 5 !== 0) ) {
            regularFish.push(fishObject)
        }
    }

    return regularFish.map(copyOfSingleFishObject => ({...copyOfSingleFishObject}))
}


    

