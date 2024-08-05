let url = 'https://script.google.com/macros/s/AKfycbwiuY4jb84BOX3XgQ2ADau2ICGUeB0hCKRNCLDcHfxoVl2sVbWMbg0HP9UrcP59-8dhvA/exec'
let form = document.querySelector("#dataForm")
let btn = document.getElementById("#btn")
form.addEventListener("submit",(e)=>{
    e.target.btn.innerHTML="Submitting....";
    let d =new FormData(dataForm);
    fetch(url,{
        method: "POST",
        body: d
    }).then((res)=>res.text()).then((finalRes)=>{
        e.target.btn.innerHTML="Submit";
        document.getElementById("res").innerHTML=finalRes;
            form.reset();
        setTimeout(()=> {
            document.getElementById("#res").innerHTML="";   
        }, 3000)})
    e.preventDefault();
})