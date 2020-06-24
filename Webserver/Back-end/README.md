<h1>API</h1>

```
1. GET - /part/{part}/{tag} : part에서 tag에 해당하는 질병에 대한 정보를 json 형태로 return
2. DELETE - /disease/{disease} : 모든 DB에서 disease라는 이름을 갖는 질병 삭제
3. PUT - /disease : name, description, URL을 body로 넘겨 받아 diseases DB에 추가 또는 수정
4. GET - /part/{part} : 해당 part DB에 있는 모든 질병에 대한 정보를 json 형태로 return
5. PUT - /disease/{disease} : part, tag를 body로 넘겨 받아 disease를 해당 part DB에 추가 또는 수정
6. GET - / : /{part} url로 이동할 수 있는 메인 페이지를 출력
7. DELETE - /disease/{disease}/{part} : 해당 part DB에서 disease라는 이름을 갖는 질병 삭제
8. GET - /admin : admin page를 출력. 로그인 시 실제 관리가 가능함.
```

<h1>To Do List</h1>

```
1. POST - /admin : password를 body로 넘겨 받아 일치하면 session의 islogin 값을 true로 함
2. GET - /{part} : 해당 part에 맞는 검색 페이지를 출력
```

<h1>You need to prepare</h1>

/Webserver/Back-end/src/important/db.js <br /> <br />
is filled with
```
module.exports = {
    local : {
        host     : "localhost",
        user     : "root",
        password : "your_mysql_password_here",
        database : "your_db_name_here (recommend healthtag)"
    }
}
```