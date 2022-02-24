const Movie = require("./model");

exports.addMovie = async (title, actor) => {
    try {
        
        await Movie.create({title, actor});
        return "Successfully added"
    } catch (error) {
        console.log(error)
        
    }
}

exports.list = async () => {
    try {
        return await Movie.find({});  
    } catch (error) {
        console.log(error)
    }
}
