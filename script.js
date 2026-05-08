const button = document.querySelector("#themeBtn");
const text = document.querySelector("#introText");

let isDark = false;

button.addEventListener("click", () => {
  if (isDark === false) {
    document.body.style.backgroundColor = "#121212";
    text.style.color = "white";
    button.innerText = "Light Mode";
    isDark = true;
  } else {
    document.body.style.backgroundColor = "white";
    text.style.color = "black";
    button.innerText = "Dark Mode";
    isDark = false;
  }

  console.log("Theme changed");
});