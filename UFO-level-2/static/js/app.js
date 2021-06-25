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

//Use a date form in your HTML document and write JavaScript code that will listen for events and search through the date/time column to find rows that match user input.

//Select button to Search
var button = d3.select("#filter-btn");
button.on("click", function() {

    tableBody.html("");

//Select datetime to input
    var inputElement = d3.select("#datetime");

//Get value of input date
    var inputValue = inputElement.property("value");

 //Print input value
    console.log(inputValue);

//filter search ufo Sighting by input datetime
    var filteredSearch = table.filter(sighting => sighting.datetime === inputValue);

    console.log(filteredSearch);

filteredSearch.forEach(function(selections) {
    console.log(selections);

    var row = tableBody.append("tr");

    Object.entries(selections).forEach(function([key, value]) {
        console.log(key, value);

        var cell = row.append("td");
        cell.text(value);
});

});
});
