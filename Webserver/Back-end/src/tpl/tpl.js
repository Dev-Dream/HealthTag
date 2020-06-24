module.exports = {
    main :`<!-- 
    #9bdeac     green_main
    #6ebe82     green_sub
    #0b3c16     green_dark
    -->
    <html>
    <head>
        <meta charset="utf-8"/>
        <title>헬스 태그</title>
        <link rel="stylesheet" href="./css/font.css">
        <link rel="stylesheet" href="./css/footer.css">
        <link rel="stylesheet" href="./css/index.css">
        <script src="https://code.jquery.com/jquery-3.5.1.slim.js" integrity="sha256-DrT5NfxfbHvMHux31Lkhxg42LY6of8TaYyK50jnxRnM=" crossorigin="anonymous"></script>
        <script src="./js/footer.js"></script>
    </head>
    <body>
        <div class="full_page">
        <div class="content">
            <div class="body_pieces ">
            <div class="head"><img src="./src/color_img/head.png" alt="" onclick="location.href='/head'"></div>
            <div class="neck"><img src="./src/color_img/neck.png" alt="" onclick="location.href='/neck'"></div>
            <div class="chest"><img src="./src/color_img/chest.png" alt="" onclick="location.href='/chest'"></div>
            <div class="stomach"><img src="./src/color_img/stomach.png" alt="" onclick="location.href='/stomach'"></div>
            <div class="l_arm"><img src="./src/color_img/l_arm.png" alt="" onclick="location.href='/arm'"></div>
            <div class="l_hand"><img src="./src/color_img/l_hand.png" alt="" onclick="location.href='/arm'"></div>
            <div class="r_arm"><img src="./src/color_img/r_arm.png" alt="" onclick="location.href='/arm'"></div>
            <div class="r_hand"><img src="./src/color_img/r_hand.png" alt="" onclick="location.href='/arm'"></div>
            <div class="l_leg"><img src="./src/color_img/l_leg.png" alt="" onclick="location.href='/leg'"></div>
            <div class="l_foot"><img src="./src/color_img/l_foot.png" alt="" onclick="location.href='/leg'"></div>
            <div class="r_leg"><img src="./src/color_img/r_leg.png" alt="" onclick="location.href='/leg'"></div>
            <div class="r_foot"><img src="./src/color_img/r_foot.png" alt="" onclick="location.href='/leg'"></div>
            </div>
            <div class="title ">
            <h2>내 몸의 해쉬태그.</h2>
            <h1>Health tag</h1>
            </div>
        </div>
        </div>
        <footer>
            <object class="footer_obj" data="./pages/footer.html" type="text/html"></object>
        </footer>
    </body>
    </html>`,

    head : `<!DOCTYPE html>
    <html lang="kr">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>머리</title>
      <link rel="stylesheet" href="/css/font.css">
      <link rel="stylesheet" href="/css/footer.css">
      <link rel="stylesheet" href="/css/part.css">
    </head>
    <body>
      <div class="__contents">
        <div class="title">
          <img src="/src/part/head.png" alt="Head">
          <div class="title_content">
            <h1>머리</h1>
            <!-- #발열#두통#피로#구토#어지러움#발작#기억력감퇴#수면장애#인지기능저하 -->
            <div class="tags">
              <input type="checkbox" name="tags" id="fever" value="발열">
              <label for="fever">#발열</label>
    
              <input type="checkbox" name="tags" id="headache" value="두통">
              <label for="headache">#두통</label>
    
              <input type="checkbox" name="tags" id="fatigue" value="피로">
              <label for="fatigue">#피로</label>
              
              <input type="checkbox" name="tags" id="vomiting" value="구토">
              <label for="vomiting">#구토</label>
              
              <input type="checkbox" name="tags" id="dizziness" value="어지러움">
              <label for="dizziness">#어지러움</label>
              
              <input type="checkbox" name="tags" id="seizure" value="발작">
              <label for="seizure">#발작</label>
              
              <input type="checkbox" name="tags" id="memory" value="기억력감퇴">
              <label for="memory">#기억력감퇴</label>
              
              <input type="checkbox" name="tags" id="sleep" value="수면장애">
              <label for="sleep">#수면장애</label>
              
              <input type="checkbox" name="tags" id="cognitive" value="인지기능저하">
              <label for="cognitive">#인지기능저하</label>
    
            </div>
          </div>
        </div>
        
        <div class="list">
          <div class="list_item">
            <div class="base_info">
              <h1>편두통</h1>
              <h2>#발열 #두통 #피로 #구토</h2>
              <label for="desc">+</label>
            </div>
            <input type="checkbox" id="desc" class="desc_check">
            <div class="more_info">
              <h2>한줄설명~~~~~</h2>
              <a href="https://www.naver.com">더 알아보기 ></a>
            </div>
          </div>
          <div class="list_item">
            <div class="base_info">
              <h1>편두통</h1>
              <h2>#발열 #두통 #피로 #구토</h2>
              <label for="desc2">+</label>
            </div>
            <input type="checkbox" id="desc2" class="desc_check">
            <div class="more_info">
              <h2>한줄설명~~~~~</h2>
              <a href="https://www.naver.com">더 알아보기 ></a>
            </div>
          </div>
          <div class="list_item">
            <div class="base_info">
              <h1>편두통</h1>
              <h2>#발열 #두통 #피로 #구토</h2>
              <label for="desc3">+</label>
            </div>
            <input type="checkbox" id="desc3" class="desc_check">
            <div class="more_info">
              <h2>한줄설명~~~~~</h2>
              <a href="https://www.naver.com">더 알아보기 ></a>
            </div>
          </div>
        </div>
      </div>
    
      <footer>
        <object class="footer_obj" data="/pages/footer.html" type="text/html"></object>
      </footer>
    </body>
    <script src="/js/parse_tag.js"></script>
    </html>`,

    admin : `<!DOCTYPE html>
    <html lang="kr">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>머리</title>
      <link rel="stylesheet" href="./css/font.css">
      <link rel="stylesheet" href="./css/footer.css">
      <link rel="stylesheet" href="./css/admin.css">
    </head>
    <body>
      <div class="__contents">
        <h1 class="title"> 관리자 페이지 </h1>
        <div class="addDisease block">
          <h1>질병 추가</h1>
          <input type="text" name="addDisease_name" placeholder="name">
          <input type="text" name="addDisease_desc" placeholder="description">
          <input type="text" name="addDisease_url" placeholder="url">
          <button>추가하기</button>
        </div>
        <div class="addPart block">
          <h1>질병 부위 추가</h1>
          <input type="text" name="addPart_name" placeholder="name">
          <div class="radiodiv">
            <input type="radio" name="addPart_part" value="head">머리
            <input type="radio" name="addPart_part" value="neck">목
            <input type="radio" name="addPart_part" value="chest">가슴
            <input type="radio" name="addPart_part" value="stomach">배
            <input type="radio" name="addPart_part" value="arm">팔
            <input type="radio" name="addPart_part" value="leg">다리
          </div>
          <input type="text" name="addPart_tags" placeholder="tag (띄어쓰기로 표시)">
          <button>추가하기</button>
        </div>
        <div class="delDisease block">
          <h1>질병 삭제</h1>
          <input type="text" name="delDisease_name" placeholder="name">
          <button>삭제하기</button>
        </div>
        <div class="delPart block">
          <h1>질병 부위 삭제</h1>
          <input type="text" name="delPart_name" placeholder="name">
          <div class="radiodiv">
            <input type="radio" name="delPart_part" value="head">머리
            <input type="radio" name="delPart_part" value="neck">목
            <input type="radio" name="delPart_part" value="chest">가슴
            <input type="radio" name="delPart_part" value="stomach">배
            <input type="radio" name="delPart_part" value="arm">팔
            <input type="radio" name="delPart_part" value="leg">다리
          </div>
          <button>삭제하기</button>
        </div>
      </div>
    
      <footer>
        <object class="footer_obj" data="./pages/footer.html" type="text/html"></object>
      </footer>
    </body>
    <script src="./js/admin.js"></script>
    </html>
    `
}