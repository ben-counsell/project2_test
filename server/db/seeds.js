use recipeAppUsers;

db.dropDatabase();


db.users.insertMany([
    {
        name: "Lennie Harman",
        dietary_requirements: "none",
        intolerances: "none",
        favourites: []

    },

    {
        name: "Gina Brand",
        dietary_requirements: "gluten%20free",
        intolerances: "none",
        favourites: []
    },

    {
        name: "Ruairidh Dunn",
        dietary_requirements: "vegan",
        intolerances: "none",
        favourites: []
    },

    {
        name: "Elspeth MacIver",
        dietary_requirements: "none",
        intolerances: "none",
        favourites: []
    },

    {
        name: "Evan Parry",
        dietary_requirements: "none",
        intolerances: "none",
        favourites: []
    },

    {
        name: "Eleri Owens", 
        dietary_requirements: "gluten%20free",
        intolerances: "none",
        favourites: []
    },

    {
        name: "Connor O'Hannigan",
        dietary_requirements: "vegetarian",
        intolerances: "none",
        favourites: []
    },

    {
        name: "Bridie O'Donnell",
        dietary_requirements: "dairy%20free",
        intolerances: "none",
        favourites: []
    },


])
