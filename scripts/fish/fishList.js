// Import the function that returns a copy of the fish array
import { getFish } from './database.js'

export const fishList = () => {
    // Invoke the function that you imported from the database module
    const fishes = getFish()

    // Start building a string filled with HTML syntax
    let htmlString = ''

    // Create HTNL representations of each fish here
    for (const singleFish of fishes) {

        // Why is there a backtick used for this string?
        htmlString += `

        <li class="fish__card">
            <div class="fish__image"><img src="images/fish${singleFish.id}.jpg"></div>
            <div class="fish__info">
                <div class="fish__name"><strong>${singleFish.name}</strong></div>
                <div class="fish__species">${singleFish.species}</div>
                <div class="fish__length">${singleFish.length} inches</div>
                <div class="fish__location">Caught in ${singleFish.location}</div>
                <div class="fish__diet">Diet: ${singleFish.diet}</div>
            </div>
        </li>

`
    }
    

    return htmlString
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// EXPLORER CHAPTER
// 2. FILTERING FISH
// Big Fish, Little Fish

// Import the three NEW functions that prioritizes fish of specific lengthes
import { mostHolyFish } from './fishFilter.js'
import { soldierFish } from './fishFilter.js'
import { nonHolyFish } from './fishFilter.js'

// Create an Array to store those fish
const newSortedArray = []

// store each of the function results in a new variable
const mostHolyFishArray = mostHolyFish()
const soldierFishArray = soldierFish()
const nonHolyFishArray = nonHolyFish()

// push fish from each of their respective arrays to the newSortedArray
for (const fish of mostHolyFishArray){
    newSortedArray.push(fish)
    }

for (const fish of soldierFishArray){
    newSortedArray.push(fish)
    }

for (const fish of nonHolyFishArray){
    newSortedArray.push(fish)
    }
    
// check log to confirm accuracy of newSortedArray
console.log(newSortedArray)

//EXPORT function that populates HTML using newSortedArray
export const sortedFishList = () => {

    // Invoke the function that you imported from the database module
    const fishes = newSortedArray

    // Start building a string filled with HTML syntax
    let htmlString = ''

    // Create HTNL representations of each fish here
    for (const singleFish of fishes) {

        // Why is there a backtick used for this string?
        htmlString += `

        <li class="fish__card">
            <div class="fish__image"><img src="images/fish${singleFish.id}.jpg"></div>
            <div class="fish__info">
                <div class="fish__name"><strong>${singleFish.name}</strong></div>
                <div class="fish__species">${singleFish.species}</div>
                <div class="fish__length">${singleFish.length} inches</div>
                <div class="fish__location">Caught in ${singleFish.location}</div>
                <div class="fish__diet">Diet: ${singleFish.diet}</div>
            </div>
        </li>

`
    }
    

    return htmlString
}



