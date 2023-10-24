use recipeAppUsers;

db.dropDatabase();


db.users.insertMany([
    {
        name: "Lennie Harman",
        dietary_preference: "none",
        favourites: []

    },

    {
        name: "Gina Brand",
        dietary_preference: "gluten%20free",
        favourites: []
    },

    {
        name: "Ruairidh Dunn",
        dietary_preference: "vegan",
        favourites: []
    },

    {
        name: "Elspeth MacIver",
        dietary_preference: "none",
        favourites: []
    },

    {
        name: "Evan Parry",
        dietary_preference: "none",
        favourites: []
    },

    {
        name: "Eleri Owens", 
        dietary_preference: "gluten%20free",
        favourites: []
    },

    {
        name: "Connor O'Hannigan",
        dietary_preference: "vegetarian",
        favourites: []
    },

    {
        name: "Bridie O'Donnell",
        dietary_preference: "dairy%20free",
        favourites: []
    },


])
