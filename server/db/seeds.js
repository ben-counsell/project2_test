use recipeAppUsers;

db.dropDatabase();


db.users.insertMany([
    {
        name: "Lennie Harman",

        dietary_preference: "none",
        favourites: [],
        intolerances: ""

    },

    {
        name: "Gina Brand",

        dietary_preference: "gluten%20free",
        favourites: [],
        intolerances: ""


    },

    {
        name: "Ruairidh Dunn",
      
        dietary_preference: "vegan",
        favourites: [],
        intolerances: ""

    },

    {
        name: "Elspeth MacIver",

        dietary_preference: "none",
        favourites: [],
        intolerances: ""

    },

    {
        name: "Evan Parry",

        dietary_preference: "none",
        favourites: [],
        intolerances: ""

    },

    {
        name: "Eleri Owens", 

        dietary_preference: "gluten%20free",
        favourites: [],
        intolerances: ""

    },

    {
        name: "Connor O'Hannigan",

        dietary_preference: "vegetarian",
        favourites: [],
        intolerances: ""

    },

    {
        name: "Bridie O'Donnell",

        dietary_preference: "dairy%20free",
        favourites: [],
        intolerances: ""

    },


])
