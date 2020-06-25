# HealthTag : My health diagnosed with hashtags<br/><br/>
View in: [KO](./README_ko.md) [EN](./README.md)

A simple personal disease diagnosis tool available to anyone.<br/><br/>
Hanyang Univ. ERICA OSSD Project<br/>
2019052851 [Junseong Park](https://github.com/rasauq1122) - Backend<br/>
2019084984 [Kiseong Lim](https://github.com/pIut0) - Frontend<br/>
2019036844 [Hyunwoo Ha](https://github.com/high2092) - Database
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
MySQL|DB management|5.7.3.0
Node.js|Runtime environment|8.10.0
<br/>

### #️⃣ Download (Ubuntu 18.04 LTS)

#### 1. Clone this github repository
```
git clone git@github.com:Dev-Dream/HealthTag.git
```
#### 2. Install programs for running server
```
sudo apt-get install mysql-server
sudo apt install nodejs
```

#### 3. Set for mysql
Start the mysql shell.
```
sudo mysql -uroot
```
+ Set your password for mysql-server.
```
USE mysql;
UPDATE user SET plugin="mysql_native_password" where user="root";
ALTER USER "root"@"localhost" IDENTIFIED WITH mysql_native_password BY "mysql";
CREATE DATABASE healthtag;
```
#### 4. Restore database
Go to the local path you received the clone, then enter the following command
```
mysql -uroot -p healthtag < DataBase/healthtag/healthtag.sql
```
<br/>

### #️⃣ Pre-pare
#### 1. fill `/Webserver/Back-end/src/important/db.js` with
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

#### 2. fill `/Webserver/Back-end/src/important/session.js` with
```module.exports = {
    session : {
        secret: "your_secret_string", // whatever it is, it will be okay
        resave: false,
        saveUninitialized: true
    }
}
```
#### 3. fill `/Webserver/Back-end/src/important/password.js` with
```
module.exports = {
    password : "your_own_password" // it will use when you access admin page.
}
```
<br/>

### #️⃣ Run
#### 1. Run server
```
cd Webserver/Back-end
node main.js
```
#### 2. Access to `localhost:3000` with your Browser
<br/>

<!-- ## Service Intro -->