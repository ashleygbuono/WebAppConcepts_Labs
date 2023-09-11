// This is a global that allows the event handler to locate the person
// corresponding to the click event
var allPeople;
// Iterate over allPeople looking for the person with this id
// Never should return 'undefined' since the id came from 
// one of the objects but...
function personForThisId(eeId) {
    let foundPerson;  // Value here is 'undefined'
    allPeople.forEach(function(person) {
        if (person.registered.date == eeId) {
            foundPerson = person;
            return; // No need to go through everyone once found
        }
    })
    return foundPerson;
}
// Small helper to construct table data cells
function makeTableDataCell(text) {
    return "<td>" + text + "</td>";
}


// Create a table showing ome details on this person
function createTableThisPersonsInfo(person) {
    let tableStr = "<table border='red'>";
    let tableHeader = "<tr><td>Age</td><td>Email</td><td>City</td><td>State</td><td>Country</td></tr>";
    // Get fields from person for easier table construction
    // Let's be snarky with this.....
    let age = person.dob.age;
    let eMail = person.email;
    let city = person.location.city;
    let state = person.location.state;
    let country = person.location.country;
    let rowContents = [age, eMail, city, state, country];
    // Let's do the caption first
    let tCaption = "<caption>Details for " + person.name.first + "</caption>"; 
    // Construct table row
    let tRow = "";
    rowContents.forEach(function(aField) {
        tRow += makeTableDataCell(aField);
    })

    console.log(tRow);
    // Concatenate strings together
    tableStr += tableHeader + tCaption + tRow + "</table>";
    return tableStr;

}
 

// Get fields from person referenced by click button on main table display
function showEEInfo(eeId) {
    console.log("ID = " + eeId);
    // Find the person corresponding to this eeID
    let person = personForThisId(eeId);
    if (person) {
        let empTable = createTableThisPersonsInfo(person);
        // Update <div> with employee info
        document.getElementById("empinfo").innerHTML = empTable;

    } else {
        // Need something a bit more robust than this.....
        console.log("Error - person with ID " + eeId + " not found.");
    }

    console.log(person);
}


function createTableRowThisPerson(person) {
    let tRow = "<tr>";

    // Isolate fields in people object for easier table row construction
    let name = person.name.title + " " + person.name.first + " " + person.name.last;
    let gender = person.gender;
    let picture = person.picture.thumbnail;
    let empId = "'" + person.registered.date + "'";
    let button = '<button onclick="showEEInfo(' + empId + ');">Info on<br><span style="color:red;">' + person.name.first + '</span></button>';
    // Build the string corresponding to the content of the table row to be added
    tRow += "<td>" + name + "</td>";
    tRow += "<td>" + gender + "</td>";
    tRow += "<td><img src='" + picture + "'></td>";
    tRow += "<td style='text-align: center;'>" + button + "</td>";
    tRow += "</tr>";

    // console.log(tRow);
    // Need to create an HTML element - having the text representation is not enough
    var theRow = document.createElement("tr");
    // Assign constructed content to newly created table row
    theRow.innerHTML = tRow;
    return theRow;
}

function fetchEEData( ) {
    const url = "https://randomuser.me/api/?results=5";
    fetch(url).then(function(res){
        return res.json()
    }).then(function(data){
        // Save data returned by promise to global for later access
        // By examining the data returned by the promise in teh console, we note
        // that the people are array elements of an array named 'results'        
        allPeople = data.results;
        var table = document.getElementById("thetable");

        data.results.forEach(function(person){

            var aRow = createTableRowThisPerson(person);
            table.appendChild(aRow);

        })
        
    })
}