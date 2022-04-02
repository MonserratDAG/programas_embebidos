function enviar_datos() {
    let nota1 = document.fdatos.dato1.value;
    let nota2 = document.fdatos.dato2.value;
    let nota3 = document.fdatos.dato3.value;
    let media, resultado;

    d1 = parseInt(nota1);
    d2 = parseInt(nota2);
    d3 = parseInt(nota3);

    media = (d1 + d2 + d3) / 3;

    console.log(media);
    if (media < 5) {
        resultado = "Suspendido";
    } else {
        resultado = "Aprobado";
    }

    document.writeln(`<h3>La nota final es: ${resultado} </h3>`);
}