require ("./db/connection");
const yargs = require("yargs");
const {addMovie, list, update} = require("./movie/functions")
const mongoose = require("mongoose")
const { addMovie, list, update, remove } = require('./movie/functions');


const app = async (yargsObj) => {
    try {
        if (yargsObj.addMovie) {
            // Add a movie
            console.log(await addMovie(yargsObj));
        } else if (yargsObj.list) {
            // List a specific movie
            console.log(await list(yargsObj));
        } else if (yargsObj.update) {
            // Update a specific movie entry
            await update(yargsObj);
        } else if (yargsObj.delete) {
            // Delete a specific movie entry
            console.log(await remove(yargsObj));   
        } else {
            console.log("invalid command")
        }
        console.log("Disconnecting...")
        await mongoose.disconnect();
    } catch (error) {
        console.log(error)
    }
}


app(yargs.argv);

