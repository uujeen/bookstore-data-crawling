# bookstore-data-crawling-analysis
교보문고 베스트셀러 종합 책 리스트 및 리뷰 데이터 수집
# Getting Started

## Installation

```
npm init -y
npm install axios@0.21.1 cheerio@1.0.0-rc.9 puppeteer@19.0.0 lodash@4.17.20 date-fns@2.21.1 date-fns-tz@1.1.4
```

- puppeteer9.1.1은 더이상 제공을 안해주기 때문에 @latest로 설치, 수정버전 확인해보니 9.1.1 -> 19.0.0 으로 수정 확인
- `npm init -y` : 프로젝트를 초기화 하고 -y 옵션을 지정해줘서 기본값이 자동으로 입력된다.

## Libaray

- `axios` : HTTP 호출을 더 편리하게 해주는 HTTP 클라이언트 라이브러리입니다. 이를 이용하여 웹 브라우저가 특정 URL로부터 웹페이지 HTML을 로드하듯이 크롤러에서도 특정 URL의 HTML을 로드할 수 있습니다.

- `cheerio` : 로드된 HTML을 파싱하여 DOM을 생성하는 라이브러리입니다. 웹 브라우저에서 제공하는 DOM 인터페이스와는 사용 방법이 좀 다르지만 구현된 기능 자체는 대부분 비슷해 CSS 셀렉터 문법을 사용한 검색이 가능합니다.

- `puppeteer` : 헤드리스 브라우저를 프로그래밍 방식으로 조작하는 라이브러리입니다. 설치와 함께 최신 버전의 크로미움Chromium이 자동으로 node_modules/puppeteer 경로 내부에 기본 설치됩니다. (크롬과 크로미움에서밖에 사용 불가능)

- `lodash` : 자바스크립가 기본 제공하지 않는 다양한 유틸리티 함수를 모아둔 라이브러리입니다.

- `date-fns`, `date-fns-tz` : 자바스크립트가 제공하는 `Date` 객체는 날짜/시간의 타임존 변환이나 원하는 날짜 형식으로 변환이 어렵습니다. 이를 해결해주는 라이브러리입니다.

## API


# 📝

[Reference] (https://www.letmecompile.com/javascript-crawler-tutorial-part3/)
