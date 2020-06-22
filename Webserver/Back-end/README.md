<h1>API</h1>

```
1. GET - /part/{part}/{tag} : part에서 tag에 해당하는 질병에 대한 정보를 json 형태로 return
2. DELETE - /disease/{part}/{disease} : part에서의 질병 중 disease라는 이름을 갖는 질병 삭제
```

<h1>To Do List</h1>

```
1. POST - /part/{part}/{disease} : part에서의 disease라는 이름의 질병 추가. 
querystring을 통해 tag, description등에 대한 설명을 받을 예정

2. PUT - /part/{part}/{disease} : part에서의 disease라는 이름의 질병 수정.
querystring을 통해 tag, description등에 대한 설명을 받을 예정

3. GET - /admin : querystring을 통해 받은 인증키와 실제 인증키를 비교하여 boolean값을 return

4. GET - /{part} : 해당 part에 맞는 검색 페이지를 출력

5. GET - / : /{part} url로 이동할 수 있는 메인 페이지를 출력
```