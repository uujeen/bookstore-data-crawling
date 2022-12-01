const puppeteer = require('puppeteer');
const cheerio = require('cheerio');
const fs = require('fs');
const path = require('path');
const jsonData = require('./data/list_2021.json');

/**
 * 리뷰데이터 크롤링
 * 
 */
async function crawlingReview() {
    // const browser = await puppeteer.launch();
    // const page = await browswer.newPage();
    /*
    let fileName = 'list_2021.csv'
    const csvPath = path.join(__dirname,'..','src','data-csv',fileName);

    //console.log(csvPath);
    const csv = fs.readFileSync(csvPath,'utf-8');
    //console.log(csv);
    const rows = csv.split('\r\n');
    if(rows[rows.length-1] === ''){
        rows.pop();
    }
    //console.log(rows);
    let result = [];
    let columnTitle = [];
    for(const i in rows){
        const row = rows[i];
        const data = row.split(',');
        if(i==='0'){
            columnTitle = data;
        } else {
            let row_data = {};
            for(const index in columnTitle){
                const title = columnTitle[index];                
                row_data[title] = data[index];
                
            }
            result.push(row_data);
        }
    }
    console.log(result);
    */
    let keys = Object.keys(jsonData);
    for (const i in keys){
        let key = keys[i]
        console.log(JSON.stringify(jsonData[key]));
    }
    //console.log(rows);

    //const pageUrl = "https://product.kyobobook.co.kr/detail/${}"
}

crawlingReview();

// #ReviewList1 > div.tab_wrap.type_sm > div.tab_content > div > div.pagination > div > a:nth-child(1)