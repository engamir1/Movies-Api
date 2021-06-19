const debounce = (func, delay = 1000) => {
    let timeoutid;
    return (...args) => {
      if (timeoutid) {
        clearTimeout(timeoutid);
      }
      timeoutid = setTimeout(() => {
        //       func.apply(null, args);  .apply () take all args and add to func as seperate arguments
        func.apply(null, args);
      }, delay);
    };
  };
  