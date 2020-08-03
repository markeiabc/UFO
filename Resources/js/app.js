// import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");

// Clear existing data
function buildTable(data) {
    tbody.html("");

// Next loop through each object in the data and append a row and cells for each value in the row
data.forEach((dataRow) => {
    // Append a row to the table body
    let row = tbody.append("tr");

    // Loop through each field in the dataRow and add each value as a table cell (td)
    Object.values(dataRow).forEach((val) => {
        let cell = row.append("td");
        cell.text(val);
        });
    });
}
// New function creation called handleclick
function handleClick() { 
    var filters = {datetime: null,
    city: null,
    state: null,
    country: null,
    shape: null
    };
    Object.keys(filters).forEach((key) => {
        dataFilter = d3.select("#", concat(key)).property("value");
        if (dataFilter) {
            filters[key]=dataFilter.toLowerCase();
        }
        else {
            delete filters[key];
        }
    });
    
    filterTable(filters);
}
function filterTable(filters)  {
    var filteredData = tableData;
    Object.keys(filters).forEach((key) => {
        if (filters[key]) {
            filteredData = filteredData.filter(row => row[key] === filters[key]);
        }
    });
    buildTable(filteredData);
}

d3.selectAll("input").on("change", handleClick);
d3.selectAll("#filter-btn").on("click", handleClick);

// Build the table when the page loads
buildTable(tableData);
