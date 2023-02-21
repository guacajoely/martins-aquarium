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
                <div class="fish__location">${singleFish.location}</div>
                <div class="fish__diet">${singleFish.diet}</div>
            </div>
        </li>

`
    }
    

    return htmlString
}