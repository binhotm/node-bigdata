const randomProps = {
    name :  ["Jose", "Maria", "Neide", "Seila", "Seila2", "Not Named"],
    city : ["Sumare", "Americana", "Campinas", "Itatiba", "Santa Barbara"],
    age : [10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78]
};

function __getRandomProp(maxProps){
  return (Math.round(Math.random() * (maxProps - 1) + 1) -1);
}


module.exports = {

  getRandomLine(cows,delimiter){
    let line = ""
    const prop = ["name", "city", "age"]

    for(let i=1; i <= cows; i++){
      let randCols = prop[__getRandomProp(prop.length)];

      line += randomProps[randCols][__getRandomProp(randomProps[randCols].length)];

      if(i < cows){
        line += delimiter;
      }else{
        line += "\n";
      }
     

    }
        
    return line;
  }

}