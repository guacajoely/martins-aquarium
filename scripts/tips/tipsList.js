import { getTips } from './database.js'

export const tipList = () => {
    // Invoke the function that you imported from the database module
    const tips = getTips()

    // Start building a string filled with HTML syntax
    let htmlString = ''

    // Create HTNL representations of each fish here
    for (const tip of tips) {

        // Why is there a backtick used for this string?
        htmlString += `

        <div class="tip__title">${tip.title}</div>
            <div class="tip__desc">${tip.description}</div>

`
    }
    

    return htmlString
}
