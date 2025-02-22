function feachUserData(id){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log(`User id is ${id}`)
            resolve({id:id,name:'John Doe',age:30,type:"premium"})
        },1000)
    })
}
function feachUserSetting(type){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log(`User type is ${type} `)
            const setting = type==="premium"?{mode:"dark",notification:true,access:true}:{mode:"light",notification:false,access:true}
            resolve(setting)
        },1000)
    });
}


feachUserData(1)
.then(result=>feachUserSetting(result.type))
.then(result=>console.log(result))
.catch(error=>console.log(error))