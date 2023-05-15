import { getPost } from "../../scripts/api.js";
import { renderAllPosts } from "../../scripts/render.js";

const ulMain = document.querySelector('main > ul')
const liNav = document.querySelectorAll('nav ul li')
let page = 0

function filterLocalStrg(){
    const filter = JSON.parse(localStorage.getItem('@LivingKenzie: nameFilter'))
    localStorage.removeItem('@LivingKenzie: nameFilter')
    
    if(filter){
        liNav.forEach(li=>{
            li.classList.remove('listFilterFocus')
            if(li.innerText == filter){
                li.classList.add('listFilterFocus')
                filterNews(li.innerText, page)
            }
        })

    }else{
        allPosts(page)
    }

}
filterLocalStrg()

function acessPost(){
   const acess = document.querySelectorAll('.acessPost')

    let id = ''

    acess.forEach(btn=>{
        btn.addEventListener('click', (e)=>{
        
            id = e.target.parentNode.parentNode.id
            localStorage.setItem('@LivingKenzie: idNew', JSON.stringify(id)) 

            window.location.replace('./pages/post/post.html')
        })
    
    })
}

async function allPosts(numPage){
    
    const posts = await getPost(numPage)
    
    renderPost(posts.news)
}

function renderPost(news, name){
    
    if(news.length == 0 && page < 3){
        page++
        filterNews(name, page)
    }
    

    news.forEach(obj => {
        ulMain.insertAdjacentHTML('beforeend', renderAllPosts(obj))

    })

    acessPost()
}

function eventList(){

    liNav.forEach(li=>{
        li.addEventListener('click', async () =>{

            liNav.forEach(li=>{
                li.classList.remove('listFilterFocus')
            })  
            li.classList.add('listFilterFocus')
            
            window.scrollTo(0, 450)
            page = 0

            if(li.innerText == 'Todos'){
                ulMain.innerHTML = ''

                allPosts(page)
            }else{
                
                await filterNews(li.innerText)
                
                const newsFiltered = JSON.parse(localStorage.getItem('@LivingKenzie: newsFiltered'))
                
                ulMain.innerHTML = ''

                renderPost(newsFiltered)
            }
        })
    })
}
eventList()


async function filterNews(name, page){
    const response = await getPost(page)

    const filter = response.news.filter(elt => elt.category == name)

    localStorage.setItem('@LivingKenzie: newsFiltered', JSON.stringify(filter))

    renderPost(filter, name)
}

function intersection(){
    const footer = document.querySelector('#observer')
    // const options = {
    //     threshold: 0,
    // }
    const observer = new IntersectionObserver(entries =>{
        if(entries[0].isIntersecting == true){
            page++
            liNav.forEach(tag => {
                if(tag.classList.contains('listFilterFocus') && page < 3){
                    if(tag.innerText == 'Todos'){
                        allPosts(page)
                    }else{
                        filterNews(tag.innerText, page)
                    }
                }
            })
        }
    })
    
    observer.observe(footer)
}
intersection()

