/** Command-line tool to generate Markov text. */
const fs = require("fs")
const markov = require("./markov")
const axios = require('axios')

if (process.argv[2] === "file") {
    const path = process.argv[3];
    fs.readFile(path, "utf8", function(err, data) {
        if(err) {
            console.log(err)
            process.exit(1)
        }
        mm = new markov.MarkovMachine(data)
        console.log(mm.makeText())
    })
}

if (process.argv[2] === "url") {
    const url = process.argv[3];
    axios.get(url)
        .then(function(resp){
            mm = new markov.MarkovMachine(resp.data)
            console.log(mm.makeText())
        })
        .catch(function(err) {
            console.log(err)
        })
}