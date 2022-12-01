const puppeteer = require("puppeteer");
const cheerio = require("cheerio");
const fs = require("fs");
/**
 * 메인, 교보문고 종합 연간 베스트셀러 페이지 불러오기
 */
async function crwalingList() {
  const browser = await puppeteer.launch(); // ❶ 헤드리스 브라우저 실행
  const page = await browser.newPage();     // ❷ 브라우저에 새 페이지 생성

  const pageUrl = "https://product.kyobobook.co.kr/bestseller/total?period=004";
  await page.goto(pageUrl, {
    // ❸ 모든 네트워크 연결이 500ms 이상 유휴 상태가 될 때까지 기다림
    waitUntil: 'networkidle0'
  });
  
  // ➍ 50개 보기 버튼을 클릭
  await page.click('#selListPer-button'); //콤보박스
  await page.click('#ui-id-39'); // 50개 영역 옵션 선택
  
  // 연도 선택
  // await page.click('#selListType');
  // await page.click('#selListType-button');
  // await page.click('#selListType-menu');
  // await page.click('#selListType-menu > li:nth-child(4)');
  //#selListType-menu

  await page.waitForSelector('#tabRoot > div.view_type_list.switch_prod_wrap > ol > li > div.prod_area.horizontal');
  // ➏ 특정 셀렉터에 대해 제공된 함수를 수행한 값 반환

  // ➐ 작업이 완료되면 브라우저 종료
  const body = await page.content();
  
  await page.close();
  await browser.close();
  
  const $ = cheerio.load(body);
  const list = $(
    '#tabRoot > div.view_type_list.switch_prod_wrap > ol > li > div.prod_area.horizontal > div.prod_info_box'
  );
  
  const dataArr = [];
  const dataPath = './list.json';
  let title, rank, grade, src;
  list.each((idx,el) =>{
    if(idx ===0) {
      rank = $(el).find('div.prod_rank > div > span > span').text();
    } else {
      rank = $(el).find('div.prod_rank > div > span').text().trim();
    }
    title = $(el).find('a > span').text();    
    src = $(el).find('a').attr('href');
    grade = $(el).find('div.prod_bottom > div > span.review_klover_box > span.review_klover_text.font_size_xxs').text();

    let data ={
      title:title,
      rank:rank,
      grade:grade,
      src:src
    };    
    
    console.log(data);
  
    //dataArr.push(data);
    //fs.writeFileSync(dataPath, JSON.stringify(dataArr));
  });
};

crwalingList();
