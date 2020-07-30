export default async query => {
    const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=Ts1LO3RsTBLJ0VTVUl1xqvXPdgvFAgBr&q=${query}&offset=0&rating=g&lang=en`);
    const searchResults = await response.json();
    return searchResults.data.map(item => ({ 
        thumb: item.images.downsized_still.url,
        full: item.images.original.url
    }));
}

