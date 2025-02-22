function promise_UserData(){
    let b = true
    return new Promise((resolve, reject) => {
        if(b)
            resolve({name: 'John', age: 30})
        else
            reject("error")
    });
}

promise_UserData()
.then((res)=> console.log(res))
.catch((res)=>console.log(res))
