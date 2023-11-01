if('serviceWorker' in navigator)
navigator.serviceWorker.register('/sw.js');

const db = new PouchDB('Chicas_Superpoderosas');
const remoteCouch = false;

let i = 0

db.allDocs({
    include_docs: true,
    descending: true
  }).then(function (result) {
    var lastRecord = result.rows[0].doc;
    i = parseInt(lastRecord._id) + 1
  }).catch(function (err) {
    i = 1
  });

const nombre= document.getElementById("nombre")
const imgPersonajes = document.getElementById("imgPersonajes")
const personajes = document.getElementById("Personajes");
const version= document.getElementById("version")
const versiones = document.getElementById("Versiones");
const imgPersonajes2 = document.getElementById("imgPersonajes2");

const personajeNombres = {
    "bellota": "Bellota",
    "bombon": "Bombón",
    "burbuja": "Burbuja",
    "mojo": "Mojo Jojo",
    "belo": "Señorita Belo",
    "profesor": "Profesor Utonio",
    "peludito": "Peludito",
    "keane": "Señorita Keane",
    "alcalde": "El Alcalde",
    "el": "Él",
    "princesa": "Princesa Morbucks"
};

 personajes.addEventListener(
    "change",
    function () {
        const seleccion = this.value;
        if (personajeNombres[seleccion]) {
            nombre.textContent = personajeNombres[seleccion];
        } else {
            nombre.textContent = "nombre";
        }

        switch (seleccion) {
            case "bellota":
                imgPersonajes2.src = "img/bellota.jpg";
                break;
            case "bombon":
                imgPersonajes2.src = "img/bombon.jpg";
                break;
            case "burbuja":
                imgPersonajes2.src = "img/burbuja.jpg";
                break;
            case "mojo":
                imgPersonajes2.src = "img/mojo.jpg";
                break;
            case "belo":
                imgPersonajes2.src = "img/belo.jpg";
                break;
            case "keane":
                imgPersonajes2.src = "img/keane.png";
                break;
            case "profesor":
                imgPersonajes2.src = "img/profesor.jpg";
                break;
            case "peludito":
                imgPersonajes2.src = "img/peludito.jpg";
                break;
            case "alcalde":
                imgPersonajes2.src = "img/alcalde.jpg";
                break;
            case "el":
                imgPersonajes2.src = "img/el.jpg";
                break;
            case "princesa":
                imgPersonajes2.src = "img/princesa.jpg";
                break;
            default:
                imgPersonajes2.src = "img/principal.jpg";
                break;
        }
    },
    false
);


const opcionesPersonalizadas = {
    "bellota": ["Seleccione alguna", "Normal", "Butch", "Impostor bellota"],
    "bombon": ["Seleccione alguna", "Normal", "Brick", "Impostor bombon"],
    "burbuja": ["Seleccione alguna", "Normal", "Boomer", "Impostor burbuja"],
    "mojo": ["Seleccione alguna", "Normal", "Femenina", "SuperMalo", "Supertonto", "Supermono"],
    "belo": ["Seleccione alguna", "Normal", "Rostro"],
    "profesor": ["Seleccione alguna", "Normal", "Mujer", "Niño", "Al inicio", "Actual"],
    "peludito": ["Seleccione alguna", "Normal", "Enojado", "Enamorado", "Triste", "Feliz"],
    "keane": ["Seleccione alguna", "Normal", "Al principio", "Ahora"],
    "alcalde": ["Seleccione alguna", "Normal", "En combate", "Pepinillos", "Telefono"],
    "el": ["Seleccione alguna", "Normal", "Transformado", "Control mental", "Manipulacion"],
    "princesa": ["Seleccione alguna", "Normal", "Niña", "Princesa", "Villana"]
};


personajes.addEventListener(
    "change",
    function () {
        const seleccion = this.value;
        if (personajeNombres[seleccion]) {
            nombre.textContent = personajeNombres[seleccion];
        } else {
            nombre.textContent = "Nombre";
        }
        if (seleccion === "Seleccione un personaje") {
            imgPersonajes2.src = "img/principal2.png";
            versiones.innerHTML = '<option value="Seleccione alguna">Seleccione alguna</option>';
        }
        const opciones = opcionesPersonalizadas[seleccion] || [];
        versiones.innerHTML = "";
        for (const opcion of opciones) {
            const option = document.createElement("option");
            option.value = opcion;
            option.textContent = opcion;
            versiones.appendChild(option);
        }
        versiones.addEventListener("change", function () {
            const seleccion = this.value;
        
            if (seleccion !== "Seleccione alguna") {
                const personajeSeleccionado = personajes.value;
                switch (personajeSeleccionado) {
                    case "bellota":
                        imgPersonajes2.src = getImagenSegunVersion("bellota", seleccion);
                        break;
                    case "bombon":
                        imgPersonajes2.src = getImagenSegunVersion("bombon", seleccion);
                        break;
                    case "burbuja":
                        imgPersonajes2.src = getImagenSegunVersion("burbuja", seleccion);
                        break;
                    case "mojo":
                        imgPersonajes2.src = getImagenSegunVersion("mojo", seleccion);
                        break;
                    case "belo":
                        imgPersonajes2.src = getImagenSegunVersion("belo", seleccion);
                        break;
                    case "profesor":
                        imgPersonajes2.src = getImagenSegunVersion("profesor", seleccion);
                        break;
                    case "peludito":
                        imgPersonajes2.src = getImagenSegunVersion("peludito", seleccion);
                        break;
                    case "keane":
                        imgPersonajes2.src = getImagenSegunVersion("keane", seleccion);
                        break;
                    case "alcalde":
                        imgPersonajes2.src = getImagenSegunVersion("alcalde", seleccion);
                        break;
                    case "el":
                        imgPersonajes2.src = getImagenSegunVersion("el", seleccion);
                        break;
                    case "princesa":
                        imgPersonajes2.src = getImagenSegunVersion("princesa", seleccion);
                        break;
                }
            } else {
                imgPersonajes2.src = "img/principal2.png";
            }
        }, false);
        
        function getImagenSegunVersion(personaje, version) {
            const imagenes = {
                "bellota": {
                    "Seleccione alguna": "img/principal2.png",
                    "Normal": "img/bellota.jpg",
                    "Butch": "img/Butch.jpg",
                    "Impostor bellota": "img/Impostor bellota.jpg",
                },
                "bombon": {
                    "Seleccione alguna": "img/principal2.png",
                    "Normal": "img/bombon.jpg",
                    "Brick": "img/Brick.jpg",
                    "Impostor bombon": "img/Impostor bombon.jpg",
                },
                "burbuja": {
                    "Seleccione alguna": "img/principal2.png",
                    "Normal": "img/burbuja.jpg",
                    "Boomer": "img/Boomer.jpg",
                    "Impostor burbuja": "img/Impostor burbuja.jpg",
                },
                "mojo": {
                    "Seleccione alguna": "img/principal2.png",
                    "Normal": "img/mojo.jpg",
                    "Femenina": "img/Femenina.jpg",
                    "SuperMalo": "img/SuperMalo.jpg",
                    "Supertonto": "img/Supertonto.jpg",
                    "Supermono": "img/Supermono.jpg"
                },
                "belo": {
                    "Seleccione alguna": "img/principal2.png",
                    "Normal": "img/belo.jpg",
                    "Rostro": "img/Rostro.jpg",
                },
                "profesor": {
                    "Seleccione alguna": "img/principal2.png",
                    "Normal": "img/profesor.jpg",
                    "Mujer": "img/Mujer.jpg",
                    "Niño": "img/Niño.jpg",
                    "Al inicio": "img/Al inicio.jpg",
                    "Actual": "img/Actual.jpg",
                },
                "peludito": {
                    "Seleccione alguna": "img/principal2.png",
                    "Normal": "img/peludito.jpg",
                    "Enojado": "img/Enojado.jpg",
                    "Enamorado": "img/Enamorado.jpg",
                    "Triste": "img/Triste.jpg",
                    "Feliz": "img/Feliz.jpg",
                },
                "keane":{
                    "Seleccione alguna": "img/principal.png",
                    "Normal": "img/keane.png",
                    "Al principio": "img/Al principio.jpg",
                    "Ahora": "img/Ahora.jpg",
                },
                "alcalde":{
                    "Seleccione alguna": "img/principal.png",
                    "Normal": "img/alcalde.jpg",
                    "En combate": "img/En combate.jpg",
                    "Pepinillos": "img/Pepinillos.jpg",
                    "Telefono": "img/Telefono.jpg",
                },
                "el":{
                    "Seleccione alguna": "img/principal.png",
                    "Normal": "img/el.jpg",
                    "Transformado": "img/Transformado.jpg",
                    "Control mental": "img/Control mental.jpg",
                    "Manipulacion": "img/Manipulacion.jpg",
                },
                "princesa":{
                    "Seleccione alguna": "img/principal.png",
                    "Normal": "img/princesa.jpg",
                    "Niña": "img/Niña.jpg",
                    "Princesa": "img/Morbucks.jpg",
                    "Villana": "img/Villana.jpg",
                }
            };
            return imagenes[personaje][version];
        } 
    },
    false
);

imgPersonajes2.addEventListener('click', function() {
    const seleccion = personajes.value;
    if (seleccion !== 'Seleccione un personaje') {
        agregarRegistroDB()
            .then(() => {
                const url = `personaje_${seleccion}.html`;
                window.location.href = url;
            })
            .catch(error => {
                console.error('Error al guardar el registro: ', error);
            });
    }
});

const agregarRegistroDB = () => {
    return new Promise((resolve, reject) => {
        const personaje = {
            _id: ""+i,
            Nombre: personajeNombres[personajes.value],
            Imagen: imgPersonajes2.src,
            Versiones: versiones.selectedOptions[0].text
        }
        db.post(personaje, (err, result) => {
            if (!err) {
                console.log('Guardado exitosamente el registro!');
                resolve(); // Resuelve la promesa cuando se completa la operación de guardar.
            } else {
                console.error('Error al guardar el registro: ', err);
                reject(err); // Rechaza la promesa en caso de error.
            }
        });
    });
}
