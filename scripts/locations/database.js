const database = [

    {name: "1. Lake Tahoe, CA",
    description: "A favorite spot in Northern California and Nevada for skiing in the winter and hiking in the summer, Lake Tahoe is also an excellent fishing experience"},

    {name: "2. Colorado River, CO",
    description: "Though this 1,450-mile long river spans much further than Colorado, winding through Utah, Arizona, Nevada, California and Mexico, some of the best fishing can be found near its beginnings in the Rocky Mountains"},

    {name: "3. Bighorn River, MT",
    description: "For fly fishing enthusiasts, this large river is considered a must-visit"},

    {name: "4. Lake Austin, TX",
    description: "While there are several lakes in Texas where you might be able to reel in a 20-lbs trophy largemouth bass, Lake Austin boasts the added convenience of being in one of the Southwest’s coolest cities"},

    {name: "5. Thousand Islands, NY",
    description: "In upstate New York (way upstate) on the eastern edge of Lake Ontario in the St. Lawrence River, you'll find over 1,800 tiny islands and countless freshwater fish. During the region's mild summers, it’s effortless to spend a full day on the water reeling in bass, salmon, walleye, northern pike and muskellunge"},

    {name: "6. Chesapeake Bay, MD",
    description: "The brackish water of the Chesapeake Bay is not only the perfect habitat for those world-famous Maryland crabs, but one of the best fishing spots you’ll find on the East Coast"},

    {name: "7. Columbia River, OR",
    description: "The largest river in the Pacific Northwest is also home to some of the region’s largest smallmouth bass, salmon, sturgeons and steelheads (rainbow trout)"},

    {name: "8. Lake St. Clair, MI",
    description: "This large body of water is probably best known for bordering Detroit, but it's also a great spot to catch muskie"},

    {name: "9. Florida Keys, FL",
    description: "Off the southern coast of the Sunshine state is a fisherman’s paradise"},

    {name: "10. California Delta, CA",
    description: "Boasting warm weather year-round, Northern California’s climate is ideal to catch fish whenever the mood strikes."}
    
]

export const getLocations = () => {
    
    return database.map(copyOfSingleObject => ({...copyOfSingleObject}))
}