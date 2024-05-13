function ToggleLightMode() {
  const body = document.documentElement;
  body.classList.toggle(`light`);

  const img = document.querySelector("#profile img")

  if (body.classList.contains(`light`))
    {
      img.setAttribute("src", "./assets/avatar-light.png");
    }
    else
    {
      img.setAttribute("src", "./assets/avatar.png", alt="Mayk Brito de óculos ao fundo azul sorrindo");
    }
}