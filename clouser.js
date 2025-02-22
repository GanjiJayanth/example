function outer(){
    let a=10
    let b=10
    function inner(){
        return a*b
    }
    
    return inner
}

let inner = outer()
console.log(inner())