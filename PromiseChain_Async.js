function feachUserData(id){
    console.log('Fetching user data...')
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log(`User Id is ${id}`);
            const userData = {id:id,name:'John Doe',age:30,type:"premium"}
            console.log('User data fetched successfully')
            resolve(userData)
        },1000)
    })
}

function feachUserSetting(type){
    console.log('Fetching user settings...')
    return new Promise((resolve,reject)=>{
        console.log(`User type is ${type} `)
        setTimeout(()=>{
            const setting = type==="premium"?{mode:"dark",notification:true,access:true}:{mode:"light",notification:false,access:true}
            console.log('User settings fetched successfully')
            resolve(setting)
        },1000)
    });
}

async function display() {
    console.log('Displaying user data and settings...')
    let f1 = await feachUserData(1)
    console.log(`User data: ${JSON.stringify(f1)}`)
    let f2 = await feachUserSetting(f1.type)
    console.log(`User settings: ${JSON.stringify(f2)}`)
    console.log('Display completed')
}

display()