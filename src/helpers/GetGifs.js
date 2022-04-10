export const getGift = async ( category ) =>{
  const url = `https://api.giphy.com/v1/gifs/search?api_key=awr7eu1hR0HrER0ONEukOHtaDA86H4QS&q=${encodeURI(category)}&limit=5`;
  const response  = await fetch(url);
  const { data } = await response.json();

  const gifs = data.map( img =>{
    return {
      id:img.id,
      title:img.title,
      url:img.images?.downsized_medium.url,
    }
  });
  return(gifs);
  console.log(gifs);
}