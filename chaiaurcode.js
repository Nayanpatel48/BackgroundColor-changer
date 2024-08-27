// Always do investigative study cause it is the best way to learn

//generate a random color
//this below function will generate random hex code for our
//background color
const randomColor = function () {
    const hex = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
  };
  console.log(randomColor());
  
  //declared interval id here so that it can be accessible inside
  //stopping function
  let intervalId;
  
  //start button bussines logic
  const startChangingColor = function () {
    if (!intervalId) {
      intervalId = setInterval(changeBgColor, 1000);
    }
    //above is a better code approach
  
    function changeBgColor() {
      document.body.style.backgroundColor = randomColor();
    }
  };
  
  //stop button bussiness logic
  const stopChangingColor = function () {
    clearInterval(intervalId);
    //doing null is flooshing out value not overriding it
    //good practice
    intervalId = null;
  };
  
  //tracking button clicking using eventlistners
  document.querySelector('#start').addEventListener('click', startChangingColor);
  document.querySelector('#stop').addEventListener('click', stopChangingColor);
  