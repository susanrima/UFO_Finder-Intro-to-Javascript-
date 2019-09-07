// referring to the data from data.js
var tableData = data;

// YOUR CODE HERE!
//select the table body using d3
var tbody = d3.select("tbody");
console.log(data);

//creating a function (ufoTable) to construct the table
function ufoTable(data) {
    tbody.html("");

// Step 1: Loop Through `data` and console.log each data object
data.forEach(function(UFOdata) {
    console.log("insideUfoTable")
    // console.log(UFOdata);

// Step 2:  Use d3 to append one table row `tr` for each data object
    var row = tbody.append("tr");
// Step 3:  Use `Object.entries` to console.log each data value
    Object.entries(UFOdata).forEach(function([key, value]) {
        //console.log(key, value);
// Step 4: Use d3 to append 1 cell per data value (date, city, state, country, shape, duration, comments)
    var cell = row.append("td");
    cell.text(value);
 });
});
}

//create a function (filterDate) for filtering the table using a date input from user
function filterDate() {
    var inputDate = d3.select("#datetime");
    var inputDateValue = inputDate.property("value");
      console.log(inputDateValue);

 if (inputDateValue) {
    var filteredData = tableData.filter(row => row.datetime === inputDateValue);
    console.log(filteredData.length);
    
//if else to return an alert message incase no data is retrieved for the date entered.
    if (filteredData.length) {
   
        console.log("inputDateEntered");
        // console.log(filteredData);
         ufoTable(filteredData);
    }
else {
    alert("No Data found for the entered date. Try another date");
}
 }
 //Alert the user to enter a date before filtering
 else {
     alert("Please enter a date to filter");
 }

}

//select the filter button & call it if there is a click action identified.
var filterbutton = d3.select("#filter-btn");

filterbutton.on("click", filterDate);
ufoTable(tableData);


