import { getLocations } from './database.js'

export const locationList = () => {
    // Invoke the function that you imported from the database module
    const locations = getLocations()

    // Start building a string filled with HTML syntax
    let htmlString = ''

    // Create HTNL representations of each fish here
    for (const location of locations) {

        // Why is there a backtick used for this string?
        htmlString += `

        <div class="location">${location.name}</div>
        <div class="location__desc">${location.description}</div>

`
    }
    

    return htmlString
}
