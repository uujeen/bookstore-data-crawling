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

    let keys = Object.keys(jsonData.data.bestSeller);
    //console.log(keys);
    jsonData.data.bestSeller.map((el) =>{

        const booksSerialNumber = el.saleCmdtid;// 책 리뷰에 접근하기 위한 시리얼 넘버
        //console.log(el.cmdtName, ',', el.saleCmdtid, ',', el.buyRevwNumc, ',', el.buyRevwRvgr);
        
        //console.log(booksSerialNumber); 

        const pageUrl = 'https://product.kyobobook.co.kr/detail/' + booksSerialNumber;
        console.log(pageUrl); // 리스트업 되어 있는 책들의 리뷰 데이터가 들어있는 URL
        //visitUrl(pageUrl);
    })

}

async function visitUrl (url) {
    const browser = await puppeteer.launch(); // ❶ 헤드리스 브라우저 실행
    const page = await browser.newPage();     // ❷ 브라우저에 새 페이지 생성
  
    const pageUrl = "https://product.kyobobook.co.kr/bestseller/total?period=004";
    await page.goto(pageUrl, {
      // ❸ 모든 네트워크 연결이 500ms 이상 유휴 상태가 될 때까지 기다림
      waitUntil: 'networkidle0'
    });

    const body = await page.content();
  
    await page.close();
    await browser.close();

}
crawlingReview();

// #ReviewList1 > div.tab_wrap.type_sm > div.tab_content > div > div.pagination > div > a:nth-child(1)