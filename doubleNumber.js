function doubleAfterEverySecond(n){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(n*2);
        },1000)
    })
}

async function display(){
    var a = await doubleAfterEverySecond(10)
    a += await doubleAfterEverySecond(20)
    a += await doubleAfterEverySecond(30)
    console.log(a)
}

display()