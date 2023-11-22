export function toggleDarkMode() {
  const btnSwitch = document.querySelector("#switch");

  btnSwitch.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    btnSwitch.classList.toggle("active");

    // Guardamos las preferencias del usuario en localStorage
    if (document.body.classList.contains("dark")) {
      localStorage.setItem("dark-mode", "true");
    } else {
      localStorage.setItem("dark-mode", "false");
    }
  });

  // Obtenemos las preferencias del usuario desde localStorage
  if (localStorage.getItem("dark-mode") === "true") {
    document.body.classList.add("dark");
    btnSwitch.classList.add("active");
  } else {
    document.body.classList.remove("dark");
    btnSwitch.classList.remove("active");
  }
}
