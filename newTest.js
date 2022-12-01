const puppeteer = require('puppeteer');
/**
 * 베스트셀러 목록리스트 JSON로 추출 테스트
 */
async function newTest() {
    const browser = await puppeteer.launch({headless:true});
    const page = await browser.newPage();

    const pageUrl = 'https://product.kyobobook.co.kr/bestseller/total?period=004';
    await page.goto(pageUrl,{waitUntil:'networkidle0'});

    await page.click('#selListPer-button'); //콤보박스
    await page.click('#ui-id-39'); // 50개 영역 옵션 선택    
 
    await page.waitForSelector('#tabRoot > div.view_type_list.switch_prod_wrap > ol > li > div.prod_area.horizontal');    
}