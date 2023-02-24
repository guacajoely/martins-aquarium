// EXPLORER CHAPTER
// 2. FILTERING FISH
// Big Fish, Little Fish

// You need to build three functions in your fish data provider. 
// One to return an array of fish that are multiples of 3 in length, one for multiples of 5, and one for all others.

// first make copy of database and throw them in a variable named fishies

import { getFish } from './database.js'

const fishies = getFish()


// filter out 3, 6, 9, 12, etc... fish FIRST
export const mostHolyFish = () => {

    const holyFish = []

    for (const fishObject of fishies) {
        if (fishObject.length % 3 === 0) {
            holyFish.push(fishObject)
        }
    }

    return holyFish.map(copyOfSingleObject => ({...copyOfSingleObject}))

}


// then filter out 5, 10, 15, 20, 25, etc... fish
export const soldierFish = () => {

    const soldiers = []

    for (const fishObject of fishies) {
        if (fishObject.length % 5 === 0) {
            soldiers.push(fishObject)
        }
    }

    return soldiers.map(copyOfSingleObject => ({...copyOfSingleObject}))
}


// Lastly, any fish NOT a multiple of 3 or 5 get added to array last
export const nonHolyFish = () => {
   
    const regularFish = []

    for (const fishObject of fishies) {
        if ( (fishObject.length % 3 !== 0) && (fishObject.length % 5 !== 0) ) {
            regularFish.push(fishObject)
        }
    }

    return regularFish.map(copyOfSingleObject => ({...copyOfSingleObject}))
}


    
