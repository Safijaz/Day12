var collection= {
    2548: {
        album:"Slippery When Wet",
        artist:"Bon Jovi",
        tracks: [
            "Let It Rock",
            "You Give Love a Bad Name"
        ]
    },
    2468: {
        album:"1999",
        artist:"Prince",
        tracks: [
            "1999",
            "Little Red Corvette"
        ]
    },
    1245: {
        artist:"Robert Palmer",
        tracks:[]
    },
    5439: {
        album: "ABBA Gold",
    }
};

//Keep a copy of the collection for tests
var oldCollection = JSON.parse(JSON.stringify(collection));

function updateRecords(object, id, prop, value) {
    
// Only change code below this line 
    var entry = object[id];

    if (!entry) {
        console.log("Not found");
        return object;
    }

    if (value=="") {
        if (entry[prop]) {
            delete entry[prop];
        }
        return object;
    }

    if (prop!="tracks" && value!="") {
        entry.album=value;
        return object;
    }


    if (prop=="tracks"){
        if (!entry.tracks) {
            entry.tracks=[];
        }
        entry.tracks.push(value);
        return object;
    }

}

console.log(updateRecords(collection,'2548',"album","Slippery when Dry"));
console.log();
console.log(updateRecords(collection,'2548',"album",""));
console.log();
console.log(updateRecords(collection,'5439',"tracks","Extra ABBA track"));
console.log();

module.exports = updateRecords;
