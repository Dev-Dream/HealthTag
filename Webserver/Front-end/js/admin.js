
document.querySelector('.addDisease button').addEventListener('click',()=>{
  let data = {};
  data["name"] = document.querySelector('.addDisease input[name="addDisease_name"').value;
  data["description"] = document.querySelector('.addDisease input[name="addDisease_desc"').value;
  data["url"] = document.querySelector('.addDisease input[name="addDisease_url"').value;
  putData('/disease',data);
})

document.querySelector('.addPart button').addEventListener('click',()=>{
  let data = {};
  let name = document.querySelector('.addPart input[name="addPart_name"').value;
  data["part"] = document.querySelector('.addPart input[name="addPart_part"').value;
  let tags = document.querySelector('.addPart input[name="addPart_tags"').value;
  tags = "@"+tags.split(" ").join("@");
  data["tag"] = tags;
  putData(`/disease/${name}`,data);
})

document.querySelector('.delDisease button').addEventListener('click',()=>{
  let name = document.querySelector('.delDisease input[name="delDisease_name"').value;
  deleteData(`/disease/${name}`);
})

document.querySelector('.delPart button').addEventListener('click',()=>{
  let name = document.querySelector('.delPart input[name="delPart_name"').value;
  let part = document.querySelector('.delPart input[name="delPart_part"').value;
  deleteData(`/disease/${name}/${part}`);
})

function putData(url,data){
  return fetch(url,{
    method:'PUT',
    body: new URLSearchParams(data),
    headers: new Headers({
      'Content-Type':'application/x-www-form-urlencoded'
    })

  }).then((res)=>{
    return res.json();
  }).then(json=>json);
}
function deleteData(url){
  return fetch(url,{
    method:'DELETE'
  }).then((res)=>{
    return res.json();
  }).then(json=>json);
}