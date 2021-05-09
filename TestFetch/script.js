// Auto-rerun in a given time (1d)
// Code Here

// Fetch JSON from API
fetch('https://api.covidactnow.org/v2/counties.json?apiKey=6ab5b1bb12264815b6bdd39e9914c3fa')
.then(async (response) => {
    const data = await response.json();
    
    for (var i = 0; i < 5; i++) {   // for (var i = 0; i < data.length; i++) {
        // **STEP 1: Grab data
        // Var 'StateCountyID' using data[i].fips (SELECT StateCountyID FROM tblStateCounty WHERE FIPS == data[i].fips)
        console.log(data[i].fips)
        // var statecountyid = 
        // Var 'Uploaded' DATETIME (Should be current date)
            // myssql: CURRENT_TIME() function
        // Var 'PosTestRateCounty'
            // (?? When being null, impossible to get state rate)
            console.log(data[i].metrics.testPositivityRatio)
        var countyrate = data[i].metrics.testPositivityRatio
        // var postestratecounty;
        // if (countyposrate = null) {
        //     fetch('https://api.covidactnow.org/v2/states.json?apiKey=6ab5b1bb12264815b6bdd39e9914c3fa')
        //     .then(async (response) => {
        //     const dataState = await response.json();
        //     for (var j = 0; j < dataState; j++)
        // }
            
        // Var 'NumNewCases' 
            // (?? ".actuals.newCases"??)
        console.log(data[i].actuals.newCases) 
        var numnewcases = data[i].actuals.newCases
            // New confirmed or suspected cases.
            // New cases are a processed timeseries of cases 
            // - summing new cases may not equal the cumulative case count.
        
        // **STEP 2: Insert data into db
    
        
        }
    })