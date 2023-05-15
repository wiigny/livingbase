export async function getPost(page = 0){
    const response = await fetch(`https://m2-api-living.herokuapp.com/news?page=${page}`)

    const responseJson = await response.json()

    return responseJson
}

export async function getPostId(id){
    const response = await fetch(`https://m2-api-living.herokuapp.com/news/${id}`)

    const responseJson = await response.json()

    return responseJson
}