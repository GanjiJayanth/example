fetch('https://jsonplaceholder.typicode.com/posts')
.then(Response=>Response.json())
.then(data => {
    data.map(ele=> { console.log(ele.body)})
})