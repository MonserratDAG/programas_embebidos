function enviar_datos() {
    let num1 = document.datos_form.dato1.value;
    let num2 = document.datos_form.dato2.value;
    let resultado;

    if(num1 > num2){
        resultado="el primero";
    }
    else{
        resultado="el segundo";
    }
    document.writeln(`El mayor es ${resultado}`);
}