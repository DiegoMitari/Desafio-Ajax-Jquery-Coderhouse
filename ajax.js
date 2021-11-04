$('.btn').bind('click', function() {
    obtenerDatos();
    $('input').val('');
  });


function obtenerDatos() {

    const apis = new XMLHttpRequest();
    
    apis.open('GET', `https://pokeapi.co/api/v2/pokemon/${$('input').val()}`, true);
    apis.send();

    apis.onreadystatechange = function() {
        if(this.status == 200 && this.readyState == 4) {
            let datoPokemon = JSON.parse(this.responseText);
            console.log(datoPokemon);
            $("img").attr("src", datoPokemon.sprites.front_default);
            $("p").text(datoPokemon.name);
            console.log($('input').val());

        }
    }
}