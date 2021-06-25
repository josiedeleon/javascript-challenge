//Using the UFO dataset provided in the form of an array of JavaScript objects, write code that appends a table to your web page and then adds new rows of data for each UFO sighting.

// Assign the data from data.js to a descriptive variable
var table = data;

// set reference to the table body
var tableBody = d3.select("tbody");

// Set UFO sighting value for each column
table.forEach(function(ufoSighting) {
    console.log(ufoSighting);

//Add table row for each UFO sighting
    var row = tableBody.append("tr");

//Print each UFO sighting value
Object.entries(ufoSighting).forEach(function([key, value]) {
    console.log(key, value);

//Add cell to row for each value
    var cell = row.append("td");
    cell.text(value);
});

});




