function gerarNomeBranch() {
    var textoDigitado = document.getElementById('txtNomeBranch').value;
    var campoResultado = document.getElementById('resultado');

    var tituloSplitedArray = _.split(textoDigitado, ':');
    var primeiraParte = _.head(tituloSplitedArray);
    var segundaParte = _.tail(tituloSplitedArray);

    // Processamento primeira parte
    primeiraParte = primeiraParte.replace(/\D+/, "") + "_";

    // Processamento segunda parte
    var arrayWords = _.words(segundaParte);

    arrayWords = _.filter(arrayWords, function (word) {
        return word.length > 2;
    });

    segundaParte = _.camelCase(arrayWords);

    campoResultado.value = (primeiraParte + segundaParte);
}