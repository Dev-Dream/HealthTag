# HealthTag/DataBase

## diseases.sql

서비스에서 정보를 제공하는 모든 질병에 관한 데이터베이스입니다.<br/>
세 개의 필드(name, description, URL)로 이루어져 있습니다.<br/><br/>
(예시)<br/>
+---------------+----------------------+---------------+<br/>
&nbsp;| name　　&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;| description&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;| URL&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|<br/>
+---------------+----------------------+---------------+<br/>
&nbsp;| 감기&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;| 바이러스에 의해 ...&nbsp;&nbsp;&nbsp;| https://...&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|<br/>
+---------------+----------------------+---------------+<br/>
<br/>
## part.sql

해당 부위에서 발생하는 증상을 포함하는 질병에 관한 데이터베이스입니다.<br/>
두 개의 필드(name, tag)로 이루어져 있습니다.<br/><br/>
(예시 - neck.sql)<br/>
+---------------+----------------------+<br/>
&nbsp;| name　　&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;| tag　&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|<br/>
+---------------+----------------------+<br/>
&nbsp;| 감기&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;| #침삼킬때아픔#...&nbsp;&nbsp;&nbsp;&nbsp;|<br/>
+---------------+----------------------+<br/>