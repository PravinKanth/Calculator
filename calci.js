var fin = "";
function func(e) {
  var display = document.querySelector("#display");
  if (e == "C") {
    fin = "";
    display.value = "";
  } else if (e == "er") {
    fin = display.value.slice(0, display.value.length - 1);
    display.value = fin;
    // console.log(fin);
  } else if (e == "=") {
    try {
      display.style.color = "black";
      fin = eval(fin);
      if (fin == undefined) {
        display.value = fin;
        fin = "";
      } else {
        display.value = fin;
      }
    } catch (err) {
      display.value = "ERROR";
      fin = "";
      display.style.color = "red";
    }
  } else {
    fin += e;
    display.value = fin;
    display.style.color = "black";
  }
}
var count = 0;
function tfunc() {
  const cl = document.querySelector(".out");
  const btn = document.getElementById("toggle");
  cl.classList.toggle("black1");
  // btn.addEventListener("click", function () {
  //   console.log("check");

  // });
  count++;
  if (count % 2 == 0) {
    btn.style.backgroundColor = "rgb(90, 90, 90)";
    btn.style.color = "white";
    // btn.textContent = "Black";
  } else {
    btn.style.backgroundColor = "rgb(229, 228, 228)";
    btn.style.color = "black";
    // btn.textContent = "White";
  }
}
