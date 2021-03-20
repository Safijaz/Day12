// Only change code below this line
function myPetsFunction(pets) {

    return pets[1].name;
  }
  
  var myPetsArray = [
      {"animalType":"Dog",
       "name":"Pujdo"},
       {"animalType":"Cat",
       "name":"Maca"},
       {"animalType":"Bird",
       "name":"Tweety"}
  ];
  // Only change code above this line 
  console.log(myPetsFunction(myPetsArray));
  module.exports = myPetsFunction;
  module.exports.myPets = myPetsArray;
  