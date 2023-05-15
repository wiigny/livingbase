import { getPostId } from "../../scripts/api.js";

const liNav = document.querySelectorAll('nav ul li')

async function localStrg(){
    const id = JSON.parse(localStorage.getItem('@LivingKenzie: idNew'))

    const response = await getPostId(id)

    addNews(response)
    buttonHome()
}
localStrg()

function addNews(obj){
    const h1 = document.querySelector('#titleNews')
    const pDescrip = document.querySelector('#descriptionNews')
    const img = document.querySelector('.boxImg img')
    const pre = document.querySelector('#pre')

    h1.innerText = obj.title
    pDescrip.innerText = obj.description
    img.src = obj.image
    pre.innerText = obj.content
}

function buttonHome(){
    const button = document.querySelector('#home')

    button.addEventListener('click', ()=>{
        window.location.replace('../../index.html')
    })
}

function eventList(){

    liNav.forEach(li=>{
        li.addEventListener('click', (e) =>{

            localStorage.setItem('@LivingKenzie: nameFilter', JSON.stringify(li.innerText))

            window.location.replace('../../index.html')
        })
    })
}
eventList()