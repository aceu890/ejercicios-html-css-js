// Creando y guardando un objeto en una variable CONST.

const fernando = {
    //atributo o propiedad
    nombre: "Fernando",
    apellido: "Soto",
    edad: 30,
    pasatiempos: ["futbol", "Programar", "Inventar cosas", "pasear a mis perros"],
    soltero: true,
    contacto: {
        email: "eldersoto1876@hotmail.com",
        twitter: "@pythonStart",
        movil: "+56 9 85467687"
    },

    //funcion o método
    saludar: function () {
        console.log("Hola")
    },
    // this. hace referencia al objeto en que se encuentra.
    decirMiNombre: function (){
        console.log(`Hola me llamo ${this.nombre} ${this.apellido} y tengo ${this.edad} años, y me puedes seguir como ${this.contacto.twitter}`);
    }

}

// Llamamos al objeto y sus atributos 
console.log(fernando);
console.log(fernando["nombre"]);
console.log(fernando["apellido"]);

console.log(fernando.edad);
console.log(fernando.pasatiempos);
console.log(fernando.pasatiempos[0]);
console.log(fernando.pasatiempos[1]);
console.log(fernando.pasatiempos[2]);
console.log(fernando.soltero);
console.log(fernando.contacto);
console.log(fernando.contacto.movil);
fernando.saludar();
fernando.decirMiNombre();

// Iterar las llaves del objeto.
console.log(Object.keys(fernando));
// Iterar los valores
console.log(Object.values(fernando));
//Saber si un objeto tiene una llave o propiedad x
console.log(fernando.hasOwnProperty("nombre"));
console.log(fernando.hasOwnProperty("futbol"));

//objeto OBJECT mozilla developer network