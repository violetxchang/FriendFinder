// ===============================================================================
// DATA
// Below data will hold all of the reserved tables.
// Initially we just set it equal to a "dummy" customer.
// But you could have it be an empty array as well.
// ===============================================================================

var friendsArray = [
    {
        name: "Maya Rudolph",
        photo: "../images/MayaRudolph.png",
        scores: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    },
    {
        name: "Fred Armisen",
        photo: "../images/FredArmisen.png",
        scores: [3, 3, 3, 3, 3, 3, 3, 3, 3, 3]
    },
    {
        name: "Catherine Keener",
        photo: "../images/CatherineKeener.png",
        scores: [5, 5, 5, 5, 5, 5, 5, 5, 5, 5]
    }
]

// Note how we export the array. This makes it accessible to other files using require.
module.exports = friendsArray;