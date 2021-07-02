const baseUrl = 'https://api.github.com/users';
export async function getMemesByPopular() {
    const pageIndex = 0; // buscar usuario 
    const response = await fetch(`${baseUrl}`);
    const responseJson = await response.json()
    return responseJson;
}


export async function getMemesBySearch(q) {
    const response = await fetch(`${baseUrl}/${q}`);
    const responseJson = await response.json()
    return responseJson
}

export default {
    getMemesByPopular,
    getMemesBySearch
}
