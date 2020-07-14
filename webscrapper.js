const puppeteer = require('puppeteer');


const webscrape = async (pgurl)=>{
    const browser =await puppeteer.launch({
        headless: true,
        args: ["--no-sandbox"]
    });

    const page = await browser.newPage();
    let dataObj = {}

     try{
         await page.goto(pgurl)
         
    const uplodedcnt = await page.evaluate(()=>{
        const rowselector = "body > div.wrapper > div.container > table > tbody > tr";
        const rowdata = document.querySelectorAll(rowselector)
        let ans=[]
        rowdata.forEach((rowele)=>{
           const col = rowele.querySelectorAll("td")
           col.forEach((tablecnt)=>{
               const temp = tablecnt.innerHTML
               ans.push(temp)
           });
        });
        return ans;
    });
    dataObj={
        amount : uplodedcnt.length,
        pgcnt : uplodedcnt 
    }
}catch(e){
    console.log(e)
}
console.log(dataObj) 
browser.close() 
return dataObj;
}

module.exports = webscrape;