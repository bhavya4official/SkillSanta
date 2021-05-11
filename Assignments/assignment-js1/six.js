function firstFun(x) {
    alert(x);
}
function SecondFun(func) {
    func("Hello World!");
}

//alerts "Hello World!"
SecondFun(firstFun);