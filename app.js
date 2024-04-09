var countries = new Map();
countries.set("USA", "Washington, D.C.");
countries.set("France", "Paris");
countries.set("Italy", "Rome");
countries.set("Spain", "Madrid");
countries.set("Japan", "Tokyo");
console.log(countries);
function logCapitalOfCanada(countries) {
    if (countries.has('Canada')) {
        console.log(countries.get("The capital of Canada is ".concat(countries.get("Canada"))));
    }
    else {
        console.log('Canada is not in the map');
    }
}
logCapitalOfCanada(countries);
