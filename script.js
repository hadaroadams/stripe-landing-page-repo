console.log('hello wr')
const btns = document.querySelectorAll('button')
const nav =document.querySelector('nav')


btns.forEach((item)=>{
    item.onclick=()=>{
        if(item.id == "menu"){
            nav.classList.remove("noShowing")
            nav.classList.remove('clear')
            nav.classList.add('showing')
        }
        if(item.id == "close"){
            nav.classList.add("noShowing")
        }
    }
})