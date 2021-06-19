const getData = async (eventData) => {
  const api_key = "71eb41d3";
  const response = await axios.get(`http://www.omdbapi.com/`, {
    params: {
      apikey: api_key,
      s: eventData.toString(),
      //   i: eventData.toString(),
    },
  });

  if (response.data.Error) {
    return [];
  }
  //   console.log(response.data.Search);
  return response.data.Search;
};

// = null
// let timeoutid;
// const oninput = (event) => {
//   // to prevent setTimeout from work
//   // every seTimeout has time identifire  1 - 2 - 3 ....
//   // if u want to cancel setimeout before execut function
//   if (timeoutid) {
//     clearTimeout(timeoutid);
//   }
//   timeoutid = setTimeout(() => {
//     getData(event.target.value);
//   }, 500);
// };

const oninput = async (event) => {
  movies = await getData(event.target.value);

  for (let movie of movies) {
    let div = document.createElement("div");

    div.innerHTML = `
    <h1> ${movie.Title}</h1>
     
      <br>
      <img src=  '${movie.Poster}'>
     
      `;
    document.querySelector(" .details").appendChild(div);
  }
};

const input = document.querySelector("input");
input.addEventListener("input", debounce(oninput, 1000));

getData(input);
