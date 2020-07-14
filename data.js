require("dotenv").config()

const pgurl = "https://webscraper.io/test-sites/tables";
const mongouri = process.env.MONGOURI;

module.exports = (
    pgurl,
    mongouri
)