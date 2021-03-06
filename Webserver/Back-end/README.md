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
9. POST - /admin : password를 body로 넘겨 받아 일치하면 session의 isloggedin 값을 true로 함
10. GET - /{part} : 해당 part에 맞는 검색 페이지를 출력
11. POST - /logout : isloggedin의 값이 true인 사용자가 사용하여, 자기 자신의 session을 파괴
```

<h1>To Do List</h1>

```
Nothing to do.
```

<h1>You need to prepare</h1>

/Webserver/Back-end/src/important/db.js <br /> <br />
is filled with
```
module.exports = {
    local : {
        host     : "localhost",
        user     : "root",
        password : "your_mysql_password", // it will use when server accesses DB
        database : "your_db_name" //recommend healthtag
    }
}
```
<br /> <br />
/Webserver/Back-end/src/important/session.js <br /> <br />
is filled with
```
module.exports = {
    session : {
        secret: "your_secret_string", // whatever it is, it will be okay
        resave: false,
        saveUninitialized: true
    }
}
```
<br /> <br />
/Webserver/Back-end/src/important/password.js <br /> <br />
is filled with
```
module.exports = {
    password : "your_own_password" // it will use when you access admin page.
}
```
<h1>How to Build</h1>

<strong>1. Clone this github repository and move directory to here</strong>
```
git clone git@github.com:Dev-Dream/HealthTag.git
cd HealthTag
```

<strong>2. Download programs for running server</strong>
```
sudo apt-get install mysql-server
sudo apt install nodejs
```

<strong>3. Set for mysql</strong>

Start the mysql shell
```
sudo mysql -uroot
```

Set your password for mysql-server
```
USE mysql;
UPDATE user SET plugin="mysql_native_password" where user="root";
ALTER USER "root"@"localhost" IDENTIFIED WITH mysql_native_password BY "your_mysql_password"; --you should remember this
```

Create database for HealthTag
```
CREATE DATABASE your_db_name --recommend healthtag, and you should remember this too
```

Fill database your DB with healthtag.sql
```
mysql -uroot -p your_db_name < ./DataBase/healthtag/healthtag.sql
```

<strong>4. Run server</strong>
```
cd Webserver/Back-end
node main.js
```

<strong>5. Access to localhost:3000 with your Browser</strong>