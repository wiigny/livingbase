
export function renderAllPosts(obj){
    const li = `
    <li id="${obj.id}" class="dspl-flex flex__direc-column gap20 boxNews">
        <div id="${obj.category}" class="boxImgNews">
            <img src="${obj.image}" alt="">
        </div>
        
        <h3 class="text3 font-w600 grey100">${obj.title}</h3>
        <p class="text4 font-w400 grey200">${obj.description}</p>
        <a class="text4 font-w600 acessPost"><span>Acessar conteúdo</span></a>
    </li>
    `  

    return li
}