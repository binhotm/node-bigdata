const Random = require('./lib/Random');
const fs = require('fs');
const benchmark = require('./lib/Banchmark');
//const api = require('./src/Api')

const INCOMING_PATH = 'process/incoming';

function makeFile(){
      fs.mkdir(INCOMING_PATH, { recursive: true }, (err) => {
      if (err) throw err;

      let buffer = "";

      for(let i=0; i < 5000; i++){
        buffer += Random.getRandomLine(15, ";");
      }

      fs.writeFile(INCOMING_PATH + "/file_input.csv", buffer, {encoding:'utf8'}, function(err) {
        if(err) {
            console.log(err);
        } 
        
        console.log("File was suckess fully created");
       
      })
    })
}


benchmark(makeFile());
    