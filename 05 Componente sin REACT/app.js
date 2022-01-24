const $app = document.getElementById("app");
const Avatar = (params) => {
  const src = `https://randomuser.me/api/portraits/women/${params.id}.jpg`;
  return `
      <picture>
          <img src="${src}" />
          ${params.name}
      </picture>
      `;
};

// COMPONENTES SIN REACT
$app.innerHTML += Avatar({ id: 1, name: "Andrea" });
$app.innerHTML += Avatar({ id: 2, name: "Manuela" });
$app.innerHTML += Avatar({ id: 3, name: "Catalina" });
$app.innerHTML += Avatar({ id: 4, name: "Araceli" });
$app.innerHTML += Avatar({ id: 5, name: "Paula" });
$app.innerHTML += Avatar({ id: 6, name: "Fernanda" });
$app.innerHTML += Avatar({ id: 7, name: "Alejandra" });
