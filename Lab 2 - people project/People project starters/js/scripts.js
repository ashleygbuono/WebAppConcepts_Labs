// This is a global that allows the event handler to locate the person
// corresponding to the click event
var allPeople;
// Iterate over allPeople looking for the person with this id.
// Return the person object with that ID
// Never should return 'undefined' since the id came from 
// one of the objects but...
function personForThisId(eeId) {
    let foundPerson;  // Value here is 'undefined'
    // Look for the matching person here
    for (let idx = 0; idx < allPeople.length; idx++) {
        if (eeId == allPeople[idx].registered.date) {
            foundPerson = allPeople[idx];
        }
    }
    return foundPerson;
}
// Small helper to construct table data cells
// There is nothing for you to do here
function makeTableDataCell(text) {
    return "<td>" + text + "</td>";
}


// Create a table showing ome details on this person
function createTableThisPersonsInfo(person) {
    console.log("btmTable", person);
    let tableStr = "<table border='red'>";
    let tableHeader = "<tr><td>Age</td><td>Email</td><td>City</td><td>State</td><td>Country</td></tr>";
    // Get fields from person for easier table construction
    let fName = person.name.first;
    let age = person.dob.age;
    let eMail = person.email;
    let city = person.location.city;
    let state = person.location.state;
    let country = person.location.country;
    // You may use this array to call the function that 
    // makes a table data cell
    // above to construct HTML for table data cells if you like 
    let rowContents = [age, eMail, city, state, country];
    // Let's do the caption first - put the person's first name here
    let tCaption = "<caption>Details for " + `${fName}` + "</caption>"; 
    // Construct table row
    let tRow = "";
    rowContents.forEach(function(aField) {
        // Concatenate the table data cell string returned from the function that 
        // makes a table data cell
        tRow += "<td>" + aField + "</td>"
    })
    // Take a look at what you have so far in the log
    console.log(tRow);
    // Concatenate strings together
    tableStr += tableHeader + tCaption + tRow + "</table>";
    return tableStr;

}
 

// Get fields from person referenced by click button on main table display
function showEEInfo(eeId) {
    // Find the person corresponding to this eeID. There's a function you coded for this!
    let person = personForThisId(eeId);
    if (person) {
        // Call the function that creates the table for this particular person (createTableThisPersonsInfo())
        let empTable = createTableThisPersonsInfo(person);
        // Update <div> with employee info
        document.getElementById("empinfo").innerHTML = empTable;

    } else {
        // Need something a bit more robust than this.....
        // Again this should never happen but whatevs
        console.log("Error - person with ID " + eeId + " not found.");
    }
}


function createTableRowThisPerson(person) {
    let tRow = "<tr>";
    //console.log(person);

    //Isolate fields in people object for easier table row construction
    let name = person.name.first + " " + person.name.last;
    let gender = person.gender;
    let picture = person.picture.thumbnail;
    // We're using this field for the ID - this is a gimme
    let empId = "'" + person.registered.date + "'";
    // Gonna give you a bit of this coding for button - not trivial to get the button to
    // be on separate lines...
    // Call the function showEEInfo(), passing the ID field when user clicks button
    // Also fill in the first name
    let button = `<button onclick="showEEInfo(${empId})">Info on<br><span style="color:red;">` + `${person.name.first}` + '</span></button>';
    // Build the string corresponding to the content of the table row to be added
    tRow += "<td>" + name + "</td>";
    tRow += "<td>" + gender + "</td>";
    //tRow += "<td><img src='" + picture + "'></td>";
    tRow += `<td><img src=${picture}>` + "</td>";

    // Giving the button style here - this lab is already long enough!
    tRow += "<td style='text-align: center;'>" + button + "</td>";
    tRow += "</tr>";
    // Take a look at what you have for the table row already from the console
    //console.log(tRow);
    // Need to create an HTML element for the Table Row - having the text representation is not enough
    let theRow = document.createElement("tr");
    // Assign constructed content to newly created table row
    theRow.innerHTML = tRow;
    return theRow;
}
// We've seen this fetch code before - no need for you to retype it
function fetchEEData( ) {
    const url = "https://randomuser.me/api/?results=5";
    fetch(url).then(function(res){
        return res.json()
    }).then(function(data){
        // Save data returned by promise to global for later access
        // By examining the data returned by the promise in the console, we note
        // that the people are array elements of an array named 'results' 
        allPeople = data.results;
        // Get the table element with the header already coded in app.html
        // We'll need to append rows to the table soon
        let table = document.getElementById("thetable");
        // Iterate over the array returned by the promise that contained a function
        // that issued the asynchronous API call
        // We've already seen the code that establishes the loop; no need for you to retype it
        allPeople.forEach(function(person, idx){
            // Call the function that creates a table row for this person, passing
            // the person as an argument
            let personRow = createTableRowThisPerson(person);

            // Append the child returned row (it's an HTML element) to the table HTML
            // element
            table.appendChild(personRow);
        })        
    })
}