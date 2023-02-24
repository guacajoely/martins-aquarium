const database = [

    {title: "1. Provide Enough Space",
    description: `One of the most important aspects of caring for a fish is ensuring it has sufficient space. According to the experts at Fishkeeping World, bigger is better when it comes to fish tanks. A large aquarium not only ensures your fish has ample room to swim, explore and grow, but it is also easier for you to maintain. Keeping the temperature and pH balanced is easier with a large tank than with a small one. <br><br>
    However, a larger tank also requires a bigger investment up front as well as higher maintenance costs. We recommend researching the minimum tank requirements for your chosen fish species and then investing in the largest tank you can afford.<br><br><br></div>`},

    {title: "2. Keep the Water Balanced",
    description:  `It is essential that you keep the water in your fish tank within the appropriate pH levels for your fish. If the water becomes too alkaline or too acidic it could be fatal to your fish. Before you go about balancing your fish tank, research the ideal pH level for your fish’s species as each breed has different environmental requirements.<br><br>

    The pH levels in your fish tank will shift naturally over time as water evaporates or items are added or removed from the fish tank. This is why you must test the pH levels regularly. Fortunately, there are ways to raise and lower pH levels naturally rather than with chemicals. Adding items like moss or driftwood is often sufficient for bringing the water back to safe levels.<br><br><br>`},

    {title: "3. Create a Comfortable Environment",
    description: `Part of the fun of owning a fish is creating a visually appealing aquarium. While it’s certainly fun to decorate your fish’s home, it also helps improve your fish’s quality of life. Fish love to have plants and objects to hide behind and swim through.<br><br>

    As you choose items for your fish tank, don’t forget to make sure they are compatible with your fish. Everything from the substrate you choose to line the bottom of the tank to the plants and additional decorations can have positive or negative impacts on your fish. If in doubt, speak to an expert who specializes in your fish’s species for tips on how to create a comfortable aquarium environment.<br><br><br>`},

    {title: "4. Feed Your Fish a Balanced Diet",
    description: `It’s important to learn your fish’s dietary requirements. Some fish may need live food, such as shrimp or worms, while others prefer algae or are just fine with generic fish flakes.<br><br>
            
    Once you determine your fish’s ideal diet, make sure you don’t overfeed him. Just as with any other animal (or human), overeating can have negative effects on your fish’s health. Speak to your veterinarian to learn just how much and how often to feed your pet fish.<br><br><br>`},

    {title: "5. Clean the Tank Regularly",
    description: `Keeping your fish tank clean is a crucial part of caring for a fish. Nobody likes to live in a dirty home — not even fish! A dirty tank is ugly to look at and can also be dangerous for your fish. Your cleaning methods will vary depending on the type of fish tank you are using and the items you place inside. You may be able to use automated cleaning scrubbers or even snails to help maintain your aquarium, but you will still need to change the water and filters on a regular basis. On top of cleaning the tank itself, you must also clean the tank’s substrate and decorations.<br><br>
            
    Learning how to take care of a fish may seem challenging at first. After all, as landlubbers, we have no experience with living underwater! However, with a little research and some expert guidance, there’s no doubt that you’ll be able to create a wonderful home for your pet fish.<br><br>
    
    Janine DeVault is a pet care writer, animal rescue advocate, and former celebrity dog walker. She lives in Mexico with her three rescue pets, Maia, Fozzy, and Kesi.<br><br><br><br>`},

    
]

export const getTips = () => {
    
    return database.map(copyOfSingleObject => ({...copyOfSingleObject}))
}