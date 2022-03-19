
function consultafetchPokemon (){
    const pokenombre = document.getElementById("pokenombre");
    let pokeInput = pokenombre.value.toLowerCase();
    const direccioon = `https://pokeapi.co/api/v2/pokemon/${pokeInput}`;
    fetch(direccioon).then(function (respuesta) {
            if (respuesta.status != "200") {
                console.log(respuesta);
                pokeimage("img/missing.jpg");
                nameError();
                poketype("####");
                pokeAttack("##");
                pokeSpeed("##");
                pokeDefensa("##");
                pokeEspecial("##");
                mov1("##");
                mov2("##");
                mov3("##");
                mov4("##");
                mov5("##");


                
            }
            else {
                return respuesta.json();
            }
        })
    .then(function (informacion) {
            // console.log(informacion);
            let imagenmon = informacion.sprites.front_default;
            console.log(imagenmon);
            pokeimage(imagenmon);
            // prueba de otra informacion
            let tipopkmn = informacion.types['0'].type.name;
            console.log(tipopkmn);
            poketype(tipopkmn);

            let attackmon = informacion.stats['1'].base_stat;
            pokeAttack(attackmon);
            console.log(attackmon);

            let speedmon = informacion.stats['5'].base_stat;
            pokeSpeed(speedmon);

            let defensemon = informacion.stats['2'].base_stat;
            pokeDefensa(defensemon);
            
            let specialmon = informacion.stats['3'].base_stat;
            pokeEspecial(specialmon);

            let pokeMov1 = informacion.abilities['0'].ability.name;
            mov1(pokeMov1);

            let pokeMov2 = informacion.abilities['1'].ability.name;
            mov2(pokeMov2);

            let pokeMov3 = informacion.abilities['2'].ability.name;
            mov3(pokeMov3);

            let pokeMov4 = informacion.abilities['3'].ability.name;
            mov4(pokeMov4);

            let pokeMov5 = informacion.abilities['4'].ability.name;
            mov5(pokeMov5);
        })
}

// consultafetchPokemon();
function pokeimage (url){
    const pokeimage = document.getElementById("pokeimage");
    pokeimage.src = url;
}
function poketype (url){
    const poketype = document.getElementById("poketype");
    poketype.value = url;
}
function pokeAttack (url){
    const pokeAttack = document.getElementById("pokeAttack");
    pokeAttack.value = url;
}
function pokeSpeed (url) {
    const pokeSpeed = document.getElementById("pokeSpeed");
    pokeSpeed.value = url;
}
function pokeDefensa (url){
    const pokeDefensa = document.getElementById("pokeDefensa");
    pokeDefensa.value = url;
}
function pokeEspecial (url){
    const pokeEspecial = document.getElementById("pokeEspecial");
    pokeEspecial.value= url

}
function nameError (){
    let nameError = document.getElementById("pokenombre");
    nameError.value = "";
    poketype(" ")
}
function mov1(url){
    const mov1 = document.getElementById("mov1");
    mov1.value = url;
}
function mov2(url){
    const mov2 = document.getElementById("mov2");
    mov2.value = url;   
}
function mov3(url){
    const mov3 = document.getElementById("mov3");
    mov3.value = url;
}
function mov4(url){
    const mov4 = document.getElementById("mov4");
    mov4.value = url;
}
function mov5(url){
    const mov5 = document.getElementById("mov5");
    mov5.value = url;
}

// pokeimage("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/43.png")
// esto se uso en la funcion consultafetchPokemon para obtener el nombre del text input en html
//  function Imprime (){
//      const pokenombre = document.getElementById("pokenombre");
//      let pokeInput = pokenombre.value;

//      console.log("Mensaje: " + pokeInput);
//  }
