import { getFish } from './database.js'

const allFish = getFish()

for (const singleFish of allFish) {
    console.log(singleFish)
}

console.log("JS linked correctly")

// Import the FishList function from the correct module
import { fishList } from './fishList.js'
import { sortedFishList } from './fishList.js'

/*
    What is the CSS selector for the element where you
    want to display the fish?

    Use . for elements with a "class" attribute
    Use # for elements with an "id" attribute
 */
const parentHTMLElement = document.querySelector("#fish__list")

parentHTMLElement.innerHTML = sortedFishList()