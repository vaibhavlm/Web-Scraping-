const data = require("./data");
//const pgurl = data;
const webscrape = require("./webscrapper");
const compareandupdate = require("./update");

webscrape("https://webscraper.io/test-sites/tables").then(dataObj =>{
    compareandupdate(dataObj);
}).catch(console.error)