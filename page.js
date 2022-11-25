export default async function page() {
    const browser = await puppeteer.launch(); // ❶ 헤드리스 브라우저 실행
    const page = await browser.newPage();     // ❷ 브라우저에 새 페이지 생성
  
    const pageUrl = "https://product.kyobobook.co.kr/bestseller/total?period=004";
    await page.goto(pageUrl, {
      // ❸ 모든 네트워크 연결이 500ms 이상 유휴 상태가 될 때까지 기다림
      waitUntil: 'networkidle0',
    });
};