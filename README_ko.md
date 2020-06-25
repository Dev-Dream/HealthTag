# HealthTag : 해시태그로 진단하는 내 몸 건강<br/><br/>
다음 언어로 보기: [KO](./README_ko.md) [EN](./README.md)

누구든지 쉽게 이용가능한 간단한 개인 질병 진단 툴입니다.<br/><br/>
Hanyang Univ. ERICA OSSD Project<br/>
2019052851 [박준성](https://github.com/rasauq1122) - Backend<br/>
2019084984 [임기성](https://github.com/pIut0) - Frontend<br/>
2019036844 [하현우](https://github.com/high2092) - Database
<!-- ## Team Member
 2019052851 [박준성](https://github.com/rasauq1122) - Backend<br/>
 2019084984 [임기성](https://github.com/pIut0) - Frontend<br/>
 2019036844 [하현우](https://github.com/high2092) - Database<br/><br/> -->

<!-- ## What's this?

사용자가 증상을 해시태그 형식으로 추가함에 따라, 가능성 있는 질병을 추려서 알려주는 웹 기반 서비스입니다.<br/><br/> -->

<!-- ## How to use
도메인이 존재하지 않을 경우
1 터미널을 열어 HealthTag를 저장할 로컬 저장소로 이동하세요.<br/>
2 터미널에 다음 명령어를 입력하세요.<br/>
```

``` -->
## Getting Started
### #️⃣ Prerequisites
Required|category|version
--|--|--
[MySQL](https://dev.mysql.com/downloads/mysql/)|DB management|5.7.3.0
[Node.js](https://nodejs.org/ko/download/)|Runtime environment|8.10.0
<br/>

### #️⃣ Download (Ubuntu 18.04 LTS 기준)

#### 1. 이 Github 저장소를 clone하세요.
```
git clone git@github.com:Dev-Dream/HealthTag.git
```
#### 2. 구동에 필요한 프로그램을 설치하세요. 
```
sudo apt-get install mysql-server
sudo apt install nodejs
```

#### 3. 데이터베이스 계정에 대한 비밀번호 설정을 마쳐주세요.
mysql을 실행하세요.
```
sudo mysql -uroot
```
+ 다음 명령어는 mysql 내부에서 입력해야 합니다.
```
USE mysql;
UPDATE user SET plugin="mysql_native_password" where user="root";
ALTER USER "root"@"localhost" IDENTIFIED WITH mysql_native_password BY "mysql";
CREATE DATABASE healthtag;
```
#### 4. 데이터베이스를 복원하세요.
clone 받은 로컬 경로로 이동해 다음 명령어를 입력하세요.
```
mysql -uroot -p healthtag < DataBase/healthtag/healthtag.sql
```
<br/>

### #️⃣ 실행 전 처리사항
#### 1. `/Webserver/Back-end/src/important/db.js`를 다음 코드로 채우세요.
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

#### 2. `/Webserver/Back-end/src/important/session.js`를 다음 코드로 채우세요.
```
module.exports = {
    session : {
        secret: "your_secret_string", // whatever it is, it will be okay
        resave: false,
        saveUninitialized: true
    }
}
```
#### 3. `/Webserver/Back-end/src/important/password.js`를 다음 코드로 채우세요.
```
module.exports = {
    password : "your_own_password" // it will use when you access admin page.
}
```
<br/>

### #️⃣ Run
#### 1. clone 받은 로컬 경로로 이동해 다음 명령어를 입력하세요.
```
cd Webserver/Back-end
node main.js
```
#### 2. 웹 브라우저를 켜 주소창에 `localhost:3000`을 입력하세요.
<br/>

<!-- ## Service Intro -->