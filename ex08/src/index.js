var contacts = [
    {
        "firstName": "John",
        "lastName": "Doe",
        "number":"12365495208",
        "likes": ["C","C++","C#"]
    },
    {
        "firstName": "Jane",
        "lastName": "Doe",
        "number": "4568295761",
        "likes": ["Pyton","Swift","R"]
    },
    {
        "firstName":"Richard",
        "lastName":"Roe",
        "number":"6938257149",
        "likes": ["React","Angular","Vue"]
    },
    {
        "firstName": "Jane",
        "lastName": "Roe",
        "number":"unknown",
        "likes": ["Javascript","Node","HTML&CSS"]
    }
];

function lookUpProfile(name,prop){
// Only change code below this line
for(var i= 0; i< contacts.length; i++){
    if (contacts[i].firstName===name){
        if (contacts[i].hasOwnProperty(prop)){
            return contacts[i][prop]
        }else {
            return "No such contact";
        }
    }
} return "No such property"

// Only change code above this line 
};
console.log(lookUpProfile("John","likes"));
console.log(lookUpProfile("Jane","lastname"));
console.log(lookUpProfile("Richard","likes"));
console.log(lookUpProfile("Rob","number"));
console.log(lookUpProfile("Rob","JavaScript"));
console.log(lookUpProfile("John","address"));