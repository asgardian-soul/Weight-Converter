document.getElementById('kilograms').addEventListener("input", function(e){
    let kg = e.target.value;
    document.getElementById('gramsOutput').innerHTML = kg*1000;

    document.getElementById('poundsOutput').innerHTML= kg*2.20462;

    document.getElementById('ozOutput').innerHTML= kg*35.274;
});
