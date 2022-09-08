# Todo 앱 JSDoc으로 문서화하기

해당 프로젝트는 [원티드 프리온보딩 프론트엔드 챌린지 TypeScript 과정](https://www.wanted.co.kr/events/pre_challenge_fe_2)을 기반으로 진행되었습니다.

간단한 Todo 앱을 JSDOC으로 먼저 문서화한 뒤 자바스크립트로 구현했습니다.

## 📝 Requirements

-   [x] 아래 요구사항을 토대로 데이터 모델링
-   [x] `JSDoc`을 활용해 문서화
-   [x] `GitHub Page`를 활용해 `JSDoc` 정적 페이지 배포
-   [ ] 작성한 `JSDoc`를 토대로 기능 구현

### Todo

```js
Todo {
  아이디(required),
  내용(required),
  완료여부(required),
  카테고리(required),
  태그들(optional),
}
```

### CREATE

-   할 일을 추가할 수 있다.
-   내용없이 추가할 수 없다.

### READ

-   모든 할 일을 조회할 수 있다.
-   ID를 기반으로 특정 할 일을 조회할 수 있다.

### UPDATE

-   ID를 제외한 모든 속성을 수정할 수 있다.
-   특정 할 일의 특정 태그를 수정할 수 있다.

### DELETE

-   ID를 기반으로 특정 할 일을 삭제할 수 있다.
-   모든 할 일을 제거할 수 있다.
-   특정 할 일의 특정 태그를 삭제할 수 있다.
-   특정 할 일의 모든 태그를 제거할 수 있다.

## 💻 Usage

### 초기 설치

```bash
npm install
or
yarn
```

### JSDoc 웹사이트 생성

```bash
npm run jsdoc
or
yarn jsdoc
```

## 🔗 Reference

-   [JSDoc 공식문서](https://jsdoc.app/)
-   [JSDoc Boilerplate](https://github.com/pocojang/jsdoc-boilerplate)
