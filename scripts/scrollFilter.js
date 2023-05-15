function buttonScroll(){
    const anchor = document.querySelectorAll('nav ul a')

    anchor.forEach(a=>{
        a.addEventListener('click', ()=>{

            if(a.id == 'scrollFilter'){
                anchor[0].classList.remove('dspl-none')
                anchor[1].classList.add('dspl-none')
            }else{
                anchor[1].classList.remove('dspl-none')
                anchor[0].classList.add('dspl-none')
            }
        })
    })

}
buttonScroll()