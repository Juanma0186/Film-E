export function navItemsHover() {
  const listItem = document.querySelectorAll(".nav-items a");
  const menuBackdrop = document.querySelector("#menu-backdrop");
  const activado = document.querySelector(".nav-items .activado");

  listItem.forEach((item) => {
    item.addEventListener("mouseenter", (event) => {
      activado.classList.remove("activado");
      const { left, top, width, height } = event.target.getBoundingClientRect();

      menuBackdrop.style.setProperty("--left", `${left}px`);
      menuBackdrop.style.setProperty("--top", `${top}px`);
      menuBackdrop.style.setProperty("--width", `${width}px`);
      menuBackdrop.style.setProperty("--height", `${height}px`);

      menuBackdrop.style.opacity = "1";
      menuBackdrop.style.visibility = "visible";
    });

    item.addEventListener("mouseleave", () => {
      menuBackdrop.style.opacity = "0";
      menuBackdrop.style.visibility = "hidden";
      activado.classList.add("activado");
    });
  });
}
