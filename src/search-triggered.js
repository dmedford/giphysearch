export default handler => {
    const searchText = document.getElementById('search-text');
    const searchBtn = document.getElementById('search-button');

    searchBtn.addEventListener('click', ()=> {
        if(!searchText.value.length){
            return
        }
        handler(searchText.value)
        searchText.value = '';
    })

    searchText.addEventListener('keyup', (e) => {
        if(!searchText.value.length || e.keyCode !== 13) {
            return;
        }
        handler(searchText.value)
        searchText.value = '';
    });
}

