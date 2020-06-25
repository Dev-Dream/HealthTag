let tags;

function getData(check){
  let result = [];
  check.forEach((ele,idx)=>{
    if(ele.checked) result.push(ele.value); 
  })
  return result;
}


let changeTags = async (data)=>{
  let str = "";
  data.forEach((el)=>{str+="@"+(el)});
  let filename = document.URL.substring(document.URL.lastIndexOf("/") + 1, document.URL.length).split('.')[0];
  // console.log(filename)
  let url = '/part/'+filename+"/"+str;
  let result = await fetchData(url);
  // let result = {
  //   list:[{
  //     name:"이름",  //String
  //     tags:["태그1","태그2"], //Array
  //     desc:"한줄평", //String
  //     url:"www.naver.com"  //String
  //   },{
  //     name:"편두통",
  //     tags:["어지러움","두통"],
  //     desc:"편두통은 ~~~ (한줄평)",
  //     url:"(편두통 문서 링크)"
  //   },{
  //     name:"뇌출혈",
  //     tags:["어지러움","두통","메스꺼움","무력감"],
  //     desc:"뇌출혈은 ~~~ (한줄평)",
  //     url:"(뇌출혈 문서 링크)"
  //   }]
  // };
  removeData();
  setData(result.list);
}

function fetchData(url='/tag/'){
  return fetch(url,{
    method:'GET'
  }).then((res)=>{
    return res.json();
  }).then(json=>json);
}

function removeData(){
  document.querySelector('.list').innerHTML="";
}

function setData(result){
  // console.log(result.list);
  result.forEach((element,index)=>{
    let listItem = document.createElement("div");
    listItem.innerHTML=`
    <div class="base_info">
      <h1>${element.name}</h1>
      <h2>#${element.tags.join(" #")}</h2>
      <label for="desc${index}">+</label>
    </div>
    <input type="checkbox" id="desc${index}" class="desc_check">
    <div class="more_info">
      <h2>${element.desc}</h2>
      <a href="${element.url}" target='blank'>더 알아보기 ></a>
    </div>`;
    listItem.classList.add('list_item');
    document.querySelector('.list').appendChild(listItem);
  })
}


tags = document.querySelectorAll('input[name="tags"]');

tags.forEach((ele,idx)=>{
  ele.addEventListener('change', ()=>{
    let data = getData(tags);
    changeTags(data);
  })
})

let data = getData(tags);
changeTags(data);