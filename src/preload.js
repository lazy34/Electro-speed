window.addEventListener("DOMContentLoaded", () => {
  const replaceTxt = (selector, text) => {
    const element = document.getElementById(selector);
    if (element) element.innerText = text;
  };

  for(const dependency of ['chrome,node','electron']){
    replaceTxt(`${dependency}--version`,process.version[dependency])
  }
});


