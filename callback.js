function greet(name, myFunction) {
    console.log('Hello world');
    myFunction(name);
}
function sayName(name) {
    console.log('Hello' + ' ' + name);
}

greet("karthik",sayName)

