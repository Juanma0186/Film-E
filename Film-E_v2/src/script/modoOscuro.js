export function toggleDarkMode() {
  const btnSwitch = document.querySelector("#switch");

  btnSwitch.addEventListener("click", () => {
    document.documentElement.classList.toggle("dark");
    btnSwitch.classList.toggle("active");

    // Guardamos las preferencias del usuario en localStorage
    if (document.documentElement.classList.contains("dark")) {
      localStorage.setItem("dark-mode", "dark");
    } else {
      localStorage.setItem("dark-mode", "light");
    }
  });
}
