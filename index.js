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

  if (!movies.length) {
    dropdown.classList.remove("is-active");
    return;
  }

  result.innerHTML = "";
  dropdown.classList.add("is-active");

  for (let movie of movies) {
    const poster = movie.Poster === "N/A" ? "" : movie.Poster;

    let option = document.createElement("a");

    option.classList.add("dropdown-item");
    option.innerHTML = `
    <img src=  '${poster}'>
    ${movie.Title} `;

    result.appendChild(option);
  }
};

const root = document.querySelector(".autocomplete");

root.innerHTML = `
<h1> Enter Name</h1>
<input type = "text" class = "input">
    <div class="dropdown  ">
        <div class = "dropdown-menu">
             <div class = "dropdown-content">
             </div>
        </div>
    </div> 


`;

const dropdown = document.querySelector(".dropdown");
const result = document.querySelector(".dropdown-content");
const input = document.querySelector("input");

input.addEventListener("input", debounce(oninput, 1000));
document.addEventListener("click", (event) => {
  if (!root.contains(event.target)) {
    dropdown.classList.remove("is-active");
  }
});

getData(input);
