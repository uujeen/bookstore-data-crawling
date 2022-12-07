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

    const pageUrl = [];
    let keys = Object.keys(jsonData.data.bestSeller);
    //console.log(keys);
    jsonData.data.bestSeller.map((el) =>{

        const booksSerialNumber = el.saleCmdtid;// 책 리뷰에 접근하기 위한 시리얼 넘버
        //console.log(el.cmdtName, ',', el.saleCmdtid, ',', el.buyRevwNumc, ',', el.buyRevwRvgr);
        
        //console.log(booksSerialNumber); 

        pageUrl.push('https://product.kyobobook.co.kr/detail/' + booksSerialNumber);
        
        //visitUrl(pageUrl);
    })
    // console.log(pageUrl); // 리스트업 되어 있는 책들의 리뷰 데이터가 들어있는 URL
    visitUrl(pageUrl[0]);
}

async function visitUrl (url) {
    const browser = await puppeteer.launch(); // ❶ 헤드리스 브라우저 실행
    const page = await browser.newPage();     // ❷ 브라우저에 새 페이지 생성
  
    // #ReviewList1 > div.tab_wrap.type_sm > div.tab_content > div > div.comment_list > div:nth-child(1) > div.comment_contents > div > div > div > div
    await page.goto(url, {
      // ❸ 모든 네트워크 연결이 500ms 이상 유휴 상태가 될 때까지 기다림
      waitUntil: 'networkidle0'
    });

    const body = await page.content();
  
    await page.waitForSelector('#ReviewList1 > div.tab_wrap.type_sm > div.tab_content > div > div.comment_list');

    await page.close();
    await browser.close();

    const $ = cheerio.load(body);

    const list = $('#ReviewList1 > div.tab_wrap.type_sm > div.tab_content > div > div.comment_list > div');

    list.each((idx,el) =>{
        const reviewText = $(el).find('div > div > div > div.comment_text').text();
        const reviewPoint = $(el).find('div.comment_header > div.right_area > div > div > div.caption > span').text().split("");
        //src = $(el).find('a').attr('href');
        //grade = $(el).find('div.prod_bottom > div > span.review_klover_box > span.review_klover_text.font_size_xxs').text();
        console.log(reviewText, 'point : ', reviewPoint);
    });
}

crawlingReview();
// #ReviewList1 > div.tab_wrap.type_sm > div.tab_content > div > div.comment_list > div:nth-child(10) > div.comment_header > div.right_area > div > div > div.caption > span