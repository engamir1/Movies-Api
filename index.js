const getData = async (eventData) => {
  const api_key = "71eb41d3";
  const response = await axios.get(`http://www.omdbapi.com/`, {
    params: {
      apikey: api_key,
      s: eventData.toString(),
      //   i: eventData.toString(),
    },
  });
  console.log(response.data);
};
// = null

const debounce = (func) => {
  let timeoutid;
  return (...args) => {
    if (timeoutid) {
      clearTimeout(timeoutid);
    }
    timeoutid = setTimeout(() => {
      //       func.apply(null, args);  .apply () take all args and add to func as seperate arguments

      func.apply(null, args);
    }, 1000);
  };
};

let timeoutid;
const oninput = (event) => {
  // to prevent setTimeout from work
  // every seTimeout has time identifire  1 - 2 - 3 ....
  // if u want to cancel setimeout before execut function
  if (timeoutid) {
    clearTimeout(timeoutid);
  }
  timeoutid = setTimeout(() => {
    getData(event.target.value);
  }, 500);
};

const input = document.querySelector("input");
input.addEventListener("input", debounce(oninput));

getData(input);
