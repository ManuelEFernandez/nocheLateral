const botonNarrativa = document.querySelector(".boton-narrativa");
const botonEnsayos = document.querySelector(".boton-ensayos");
const botonExotopías = document.querySelector(".boton-exotopías");
const botonTodos = document.querySelector(".boton-todos");


class libro {
  constructor(titulo, autor, año, paginas, precio, coleccion, id) {
    this.titulo = titulo;
    this.autor = autor;
    this.año = año;
    this.paginas = paginas;
    this.precio = precio;
    this.coleccion = coleccion;

    this.id = id;
  }
}

const dosVueltas = new libro(
  "Dos vueltas",
  "Fernando Loy",
  2019,
  170,
  1800,
  "Narrativa",
  1
);
const unaAdvertencia = new libro(
  "Una Advertencia",
  "Paula Visser",
  2019,
  146,
  1800,
  "Narrativa",
  2
);
const informaciónAnticipada = new libro(
  "Información Anticipada",
  "Carlos Herrera Sien",
  2019,
  192,
  1800,
  "Narrativa",
  3
);
const nubesQueVuelanBajo = new libro(
  "Nubes que vuelan bajo",
  "Lorena Paula",
  "2019",
  124,
  1800,
  "Narrativa",
  4
);
const unaCasaComoLasDeAntes = new libro(
  "Una casa com olas de antes",
  "Miguel Eyt",
  2019,
  259,
  2100,
  "Narrativa",
  5
);
const elProblemaDeLaInfinitud = new libro(
  "El problema de la infinitud",
  "Katja Boyd",
  2019,
  418,
  2300,
  "Narrativa",
  6
);
const comoSiLaNocheBastara = new libro(
  "Como si la noche bastara",
  "Santiago Ribón",
  2020,
  130,
  1800,
  "Narrativa",
  7
);
const hemosHablado = new libro(
  "Hemos hablado",
  "Vilma Zubiría",
  2020,
  104,
  1800,
  "Narrativa",
  8
);
const losCambiosEsperados = new libro(
  "Los cambios esperados",
  "Nicolás Finch",
  2020,
  140,
  1800,
  "Narrativa",
  9
);
const siempreQueHayaTiempoParaElEspectáculo = new libro(
  "Siempre que haya tiempo para el espectáculo",
  "Marco Biondi",
  2021,
  470,
  2300,
  "Narrativa",
  10
);
const losReportes = new libro(
  "Los reportes",
  "Dominique Demound",
  2021,
  185,
  1800,
  "Narrativa",
  11
);
const yoAlguien = new libro(
  "Yo, Alguien",
  "Lucas Ducaux",
  2022,
  200,
  2100,
  "Narrativa",
  12
);
const saltosEntreLíneas = new libro(
  "Saltos entre líneas",
  "Katja Boyd",
  2019,
  220,
  2100,
  "Ensayos",
  13
);
const otrosLados = new libro(
  "Otros lados",
  "Nicolás Hernández",
  2020,
  120,
  1800,
  "Ensayos",
  14
);
const literaturasNoVistas = new libro(
  "Literaturas no-vistas",
  "Fernán Vinetti",
  2020,
  240,
  2100,
  "Ensayos",
  15
);
const laInexistenciaDeLaLectura = new libro(
  "La inexistencia de la lectura",
  "Fernán Vinetti",
  2020,
  177,
  1800,
  "Ensayos",
  16
);
const movidas = new libro(
  "Movidas",
  "Laura Sint",
  2021,
  185,
  1800,
  "Ensayos",
  17
);
const musicaDelTexto = new libro(
  "Música del texto",
  "Jimena Sirvén",
  2022,
  140,
  1800,
  "Ensayos",
  18
);
const asincronías = new libro(
  "Asincronías",
  "Claudio Boes",
  2021,
  210,
  2300,
  "Exotopías",
  19
);
const ruidoFiebre = new libro(
  "Ruido Fiebre",
  "Mariana Streick",
  2021,
  530,
  2800,
  "Exotopías",
  20
);
const reverberaciones = new libro(
  "Reverberaciones",
  "Mariana Streick",
  2022,
  610,
  2800,
  "Exotopías",
  21
);
const distanciaFluvial = new libro(
  "Distancia fluvial",
  "Don Lloyd",
  2022,
  305,
  2300,
  "Exotopías",
  22
);
const unAbismo = new libro(
  "Un abismo",
  "Francisco Ciguera",
  2022,
  340,
  2300,
  "Exotopías",
  23
);
const elAuscultado = new libro(
  "El Auscultado",
  "Fabián Groisman",
  2022,
  356,
  2800,
  "Exotopías",
  24
);

arrayCatalogoLibros = [];
arrayCatalogoLibros.push(
  dosVueltas,
  unaAdvertencia,
  informaciónAnticipada,
  nubesQueVuelanBajo,
  unaCasaComoLasDeAntes,
  elProblemaDeLaInfinitud,
  comoSiLaNocheBastara,
  hemosHablado,
  losCambiosEsperados,
  siempreQueHayaTiempoParaElEspectáculo,
  losReportes,
  yoAlguien,
  saltosEntreLíneas,
  otrosLados,
  literaturasNoVistas,
  laInexistenciaDeLaLectura,
  movidas,
  musicaDelTexto,
  asincronías,
  ruidoFiebre,
  reverberaciones,
  distanciaFluvial,
  unAbismo,
  elAuscultado
);

const agruparporCriterio = (array, criterio) => {
  let posibilidades = [];
  for (let index = 0; index < array.length; index++) {
    if (!posibilidades.some((valor) => valor === array[index][criterio])) {
      posibilidades.push(array[index][criterio]);
    }
  }

  let valoresAgrupacion = posibilidades.reduce((accumulator, value) => {
    return { ...accumulator, [value]: 0 };
  }, {});

  let resultado = arrayCatalogoLibros.reduce((acumulador, value) => {
    for (let index = 0; index < posibilidades.length; index++) {
      if (value[criterio] === posibilidades[index]) {
        acumulador[posibilidades[index]]++;
      }
    }

    return acumulador;
  }, valoresAgrupacion);

  return resultado;
};

console.log(agruparporCriterio(arrayCatalogoLibros, "coleccion"));
console.log(agruparporCriterio(arrayCatalogoLibros, "año"));

// const agruparporAños = (array) =>
//   array.reduce(
//     (acumulador, currentValue) => {
//       if (currentValue.año === 2019) {
//         acumulador.año2019++;
//       } else if (currentValue.año === 2020) {
//         acumulador.año2020++;
//       } else if (currentValue.año === 2021) {
//         acumulador.año2021++;
//       } else {
//         acumulador.año2022++;
//       }

//       return acumulador;
//     },
//     { año2019: 0, año2020: 0, año2021: 0, año2022: 0 }
//   );

// console.log(agruparporAños(arrayCatalogoLibros));

let catalogoLibros = document.querySelector(".catalogo-libros");

const datosLibros = (id, dato) => {

 let libroBuscado = arrayCatalogoLibros.find(libroA => libroA.id === id);

 let arrayDatos = [];

 arrayDatos.push(libroBuscado.año, libroBuscado.precio, libroBuscado.coleccion, libroBuscado.paginas);

 if (dato === "precio") {

  return libroBuscado.precio;
 }

 else if (dato === "coleccion") {

  return libroBuscado.coleccion;
 }


 else if (dato === "año") {

  return libroBuscado.año;
 }

 else {

  return libroBuscado.paginas;
 }
}


const librosCatalogo = (mostrar) => {
  let librosParaCatalogo = [];

  if (mostrar === "todos") {
    for (let index = 1; index < 25; index++) {
      librosParaCatalogo.push(
        `<div class="item"><img src="/libros/libroid${index}.jpg" alt="libroid${index}"></div>`
      );
    }
  }
  
  else if (mostrar === "Narrativa") {
    for (let index = 1; index < 13; index++) {
      librosParaCatalogo.push(
        `<div class="flip-card item">
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <img src="/libros/libroid${index}.jpg" alt="Avatar" style="width:300px;height:300px;">
          </div>
          <div class="flip-card-back">
            
            <p class="cita-tarjeta">Precio: ${datosLibros(index, "precio")}</p>
            <p class="cita-tarjeta">Año: ${datosLibros(index, "año")}</p>
            <p class="cita-tarjeta">Colección: ${datosLibros(index, "coleccion")}</p>
            <p class="cita-tarjeta">Páginas: ${datosLibros(index, "paginas")}</p>
            
          </div>
        </div>
      </div>
       `
      );
    }
  }

  else if (mostrar === "Ensayos") {
    for (let index = 13; index < 19; index++) {
      librosParaCatalogo.push(
        `<div class="flip-card item">
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <img src="/libros/libroid${index}.jpg" alt="Avatar" style="width:300px;height:300px;">
          </div>
          <div class="flip-card-back">
            
            <p class="cita-tarjeta">Precio: ${datosLibros(index, "precio")}</p>
            <p class="cita-tarjeta">Año: ${datosLibros(index, "año")}</p>
            <p class="cita-tarjeta">Colección: ${datosLibros(index, "coleccion")}</p>
            <p class="cita-tarjeta">Páginas: ${datosLibros(index, "paginas")}</p>
            
          </div>
        </div>
      </div>
       `
      );
    }
  }

  else if (mostrar === "Exotopías") {
    for (let index = 19; index < 25; index++) {
      librosParaCatalogo.push(
        `<div class="flip-card item">
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <img src="/libros/libroid${index}.jpg" alt="Avatar" style="width:300px;height:300px;">
          </div>
          <div class="flip-card-back">
            
            <p class="cita-tarjeta">Precio: ${datosLibros(index, "precio")}</p>
            <p class="cita-tarjeta">Año: ${datosLibros(index, "año")}</p>
            <p class="cita-tarjeta">Colección: ${datosLibros(index, "coleccion")}</p>
            <p class="cita-tarjeta">Páginas: ${datosLibros(index, "paginas")}</p>
            
          </div>
        </div>
      </div>
       `
      );
    }
  }

  catalogoLibros.innerHTML = librosParaCatalogo.join("");
};

librosCatalogo("todos");


botonNarrativa.addEventListener("click", function(){librosCatalogo("Narrativa")});
botonEnsayos.addEventListener("click", function(){librosCatalogo("Ensayos")});
botonExotopías.addEventListener("click", function(){librosCatalogo("Exotopías")});
botonTodos.addEventListener("click", function(){librosCatalogo("todos")});