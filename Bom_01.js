let btn1=document.getElementById("btn1")
let a;
btn1.addEventListener('click',function(){
    a=window.open("","","width=200 height=100")
})

let btn2=document.getElementById("btn2")
btn2.addEventListener('click',function(){
    a.window.close()
        // alert("vnn")
})