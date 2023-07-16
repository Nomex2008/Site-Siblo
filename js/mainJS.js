const menu = document.querySelector('#menu')
const burger = document.querySelector('#burger')
const body = document.querySelector('#body')

burger.onclick =()=>{
    if(menu.classList.toggle('open')){
        menu.classList.add('active') 
        burger.classList.add('active')
    }else{
        menu.classList.remove('active')
        burger.classList.remove('active')
    }
}