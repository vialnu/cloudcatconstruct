document.addEventListener("DOMContentLoaded", function() {


  let count = 0;

  let shapesCount = 1;
  let colorsCount = 1;
  let eyesCount = 1;
  let hornsCount = 1;
  let earsCount = 1;
  
  colors = {1: "white", 2: "blue", 3: "green", 4: "grey", 5: "magenta",
  6: "orange", 7: "purple", 8: "red", 9: "turquoise"}
  
  let flag = true;
  
  function secondPage() {
    let a = document.getElementById(`hihi`);
    a.addEventListener("click", function(e) {
      console.log(e.target.id)
      if (e.target.id == "styles1") {
        if (shapesCount < 10) {
          shapesCount += 1;
          let color = colors[colorsCount];
          document.getElementById("cloud").style.backgroundImage=`url(./constructor/shape${shapesCount}${color}.png)`;
        } else { 
          shapesCount = 1;
          let color = colors[colorsCount];
          document.getElementById("cloud").style.backgroundImage=`url(./constructor/shape${shapesCount}${color}.png)`;
        }
      }
  
      if (e.target.id == "styles2") {
        if (colorsCount < 9) {
          colorsCount += 1;
          let color = colors[colorsCount];
          document.getElementById("cloud").style.backgroundImage=`url(./constructor/shape${shapesCount}${color}.png)`;  
        } else {
          colorsCount = 1;
          let color = colors[colorsCount];
          document.getElementById("cloud").style.backgroundImage=`url(./constructor/shape${shapesCount}${color}.png)`;
        }
      }
  
      if (e.target.id == "styles3") {
        if (eyesCount < 10) {
          eyesCount += 1
          document.getElementById("eyes").style.backgroundImage=`url(./constructor/eyes${eyesCount}.png)`;  
        } else {
          eyesCount = 1;
          document.getElementById("eyes").style.backgroundImage=`url(./constructor/eyes${eyesCount}.png)`;  
        }
      }
  
      if (e.target.id == "styles4") {
        if (hornsCount < 10) {
          hornsCount += 1;
          document.getElementById("horns").style.backgroundImage=`url(./constructor/horns${hornsCount}.png)`;  
        } else {
          hornsCount = 1;
          document.getElementById("horns").style.backgroundImage=`url(./constructor/horns${hornsCount}.png)`;  
        }
      }
  
      if (e.target.id == "styles5") {
        if (earsCount < 10) {
          earsCount += 1;
          document.getElementById("ears").style.backgroundImage=`url(./constructor/ears${earsCount}.png)`;  
        } else {
          earsCount = 1;
          document.getElementById("ears").style.backgroundImage=`url(./constructor/ears${earsCount}.png)`; 
        }
      }
      if (e.target.id == "styles6") {
        let a = document.getElementById("paint");
        if (flag) {
          a.style.display="flex";
          flag = false;
        } else {
          a.style.display="none";
          flag = true;
        }
      }
    })
  
  }
  
  function countPages() {
    reset();
    count += 1;
    console.log(count);
    if (count <= document.querySelectorAll('section').length) {
      document.getElementById("page" + count).style.display="flex";
      document.getElementById("button" + count).addEventListener("click", clickButton);
    } else {
      count = 0;
      countPages();
    }
    if (count == 2) {
      secondPage();
    }
  }
  
  function clickButton() {
      console.log("нажато");
          document.getElementById("button" + count).removeEventListener("click", function() {}, false);
          countPages();
  }
  
  function reset() {
    for (let i = 1; i <= document.querySelectorAll('section').length; i++) {
      document.getElementById("page" + i).style.display="none";
      document.getElementById("button" + i).removeEventListener("click", function() {}, false);
    }
  }
  
  window.onload = function() {
      countPages();
  };
  
  
  
let  buttonk = document.getElementById("button3");
buttonk.addEventListener("click", (e) => {
  console.log("432432342");
let panel2 = document.getElementById("stikery");
let panel1 = document.getElementById("editWindow");
let panel3 = document.getElementById("hihi");
panel2.style.display="none";
panel3.style.display="none";
panel1.style.height="45vw"

})
  
});


$(document).ready(function() {
$( function() {
  $( ".drag" ).draggable();
} );
});


