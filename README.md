# Simple Todo App 👋

> 할 일 목록을 보여주는 앱

## 데모 링크
https://secure-reaches-65492.herokuapp.com/

## 요구사항

### 기능 요구사항
- 새로운 TODO(제목과 내용)를 작성할 수 있다.
- TODO 목록을 볼 수 있다.
- TODO 항목의 제목과 내용을 수정할 수 있다.
- TODO 항목을 삭제할 수 있다.
- 사용자의 선택에 의해 TODO에는 마감 기한을 넣을 수 있다.
- TODO 항목의 우선순위를 설정 및 조절 할 수있다.
- TODO 항목에 대한 완료처리를 할 수 있다.
- 마감기한이 지난 TODO에 대해 알림을 노출할 수 있다.

### 성능 요구사항
- TODO 이용 시 발생하는 오류 사항을 최소화한다.
- 오류 발생 시 사용자가 이해하기 쉽게 표시한다.
- 다른 사람이 읽기 쉬운 코드를 작성한다.

### 인터페이스 요구사항
- 직관적이고 의미 전달이 명확한 화면을 사용자에게 제공한다

## 개발 환경 구축

### 클라이언트만 개발하는 경우

- 본 저장소를 클론 받은 후, 루트 디렉터리에서 `npm install`, `npm start`을 해서 구동한다.
  - API는 헤로쿠에 올려놓은 상태임(package.json 참고)
  
### 서버, 클라이언트 동시 개발하는 경우  

- [서버 저장소](https://github.com/Violet-Bora-Lee/simple-todo-app-server.git)를 클론 받은 후, 해당 디렉터리(루트 디렉터리)에서 `git submodule init`, `git submodule update` 명령어를 연속으로 입력해 클라이언트 소스 코드가 담긴 본 [저장소](https://github.com/Violet-Bora-Lee/simple-todo-app-client.git)(서브모듈)를 클론 받는다.
  -  위 과정을 생략하려면 본 저장소를 클론 받을 때 `git clone --recurse-submodules https://github.com/Violet-Bora-Lee/simple-todo-app-server.git client`를 입력하면 된다.
- 루트 디렉터리에 `.env` 파일을 만들고, 필요한 환경 변수(예: MongoDB URI)를 입력한다.
- client 디렉터리의 package.json과 루트 디렉터리의 server.js 파일에서 포트를 적절히 설정한다.
- 루트 디렉터리와 client 디렉터리에서 각각 `npm install` 명령어를 입력해 필요한 패키지를 설치한다. 
- 루트 디렉터리에서 `npm run dev`을 입력해 서버와 클라이언트를 동시에 구동한다.

## 배포
- client 디렉터리에서 `npm run build`를 입력한다.
- production 환경에서 자동으로 index.html이 홈 페이지가 되도록 설정하였다
  - 서버 저장소의 server.js파일 참고

## 작성자

👤 **이 보 라**

* Github: [@Violet-Bora-Lee](https://github.com/Violet-Bora-Lee)

