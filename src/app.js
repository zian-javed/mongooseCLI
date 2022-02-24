require ("./db/connection");
const yargs = require("yargs");
const {addMovie, list} = require("./movie/functions")
const mongoose = require("mongoose")

const app = async (yargsObj) => {
    try {
        if (yargsObj.add ) {
            console.log(await addMovie(yargsObj.title, yargsObj.actor))
            //add functionailty
        }
        else if (yargsObj.list){
            console.log(await list());
            //list functionailty
        }
        else {
            console.log("Incorrect command")
        }
        await mongoose.disconnect()
    } catch (error) {
        console.log(error)
    }
}

app(yargs.argv);

