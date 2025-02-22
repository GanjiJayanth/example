const xhr=new XMLHttpRequest()
xhr.open('GET','https://jsonplaceholder.typicode.com/users')
xhr.onload=function(){
    if(xhr.status>=200&&xhr.status<300){
        const users=JSON.parse(xhr.responseText);
        //console.log(users);
        users.map((r)=>{ console.log(r)})
    }
    else{
        console.log('error');
    }
}
xhr.send();