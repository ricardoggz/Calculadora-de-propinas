const calculador1 = document.getElementById("porcentaje-1")

const calculador2 = document.getElementById("porcentaje-2")

const calculador3 = document.getElementById("porcentaje-3")

const calculador4 = document.getElementById("porcentaje-4")

const calculador5 = document.getElementById("porcentaje-5")

const input1 = document.getElementById("cantidad")

const totalElement = document.getElementById("total")

/*--5% de propina*/

function calculo1(cantidad){
    const input1Number = parseInt (cantidad.value)
    const calcular1 = input1Number * 0.05;
    const calcular2 = calcular1 + input1Number;

    totalElement.innerHTML = "Total con propina del 5%: $" + calcular2;
}

/*--10% DE PROPINA--*/

function calculo2(cantidad){
    const input1Number = parseInt (cantidad.value)
    const calcular1 = input1Number * 0.10;
    const calcular2 = calcular1 + input1Number;

    totalElement.innerHTML = "Total con propina del 10%: $" + calcular2;
}

/*--15% de propina--*/

function calculo3(cantidad){
    const input1Number = parseInt (cantidad.value)
    const calcular1 = input1Number * 0.15;
    const calcular2 = calcular1 + input1Number;

    totalElement.innerHTML = "Total con propina del 15%: $" + calcular2;
}

/*--25% de propina--*/

function calculo4(cantidad){
    const input1Number = parseInt (cantidad.value)
    const calcular1 = input1Number * 0.25;
    const calcular2 = calcular1 + input1Number;

    totalElement.innerHTML = "Total con propina del 25%: $" + calcular2;
}

/*--50% de propina--*/

function calculo5(cantidad){
    const input1Number = parseInt (cantidad.value)
    const calcular1 = input1Number * 0.50;
    const calcular2 = calcular1 + input1Number;

    totalElement.innerHTML = "Total con propina del 50%: $" + calcular2;
}




/*--Eventos--*/

calculador1.addEventListener("click",()=> calculo1(input1)) 
calculador2.addEventListener("click",()=> calculo2(input1))
calculador3.addEventListener("click",()=> calculo3(input1))
calculador4.addEventListener("click",()=> calculo4(input1))
calculador5.addEventListener("click",()=> calculo5(input1))

