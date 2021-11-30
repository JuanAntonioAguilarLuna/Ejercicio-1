const dividir = (num1,num2)=>{
    return parseInt(num1) / parseInt(num2);
}
const multiplicar = (num1,num2)=>{
    return parseInt(num1) * parseInt(num2);
}
const sumar = (num1,num2)=>{
    return parseInt(num1) + parseInt(num2);
}
const restar = (num1,num2)=>{
    return parseInt(num1) - parseInt(num2);
}


alert("   ¿que operacion deseas realizar    ");
operacion = prompt("1: suma, \n2: resta, \n3: division, \n4: multiplicacion");





if(operacion == 1){
    let numero1 = prompt("primer numero a sumar");
    let numero2 = prompt("segundo numero a sumar");
    resultado = sumar(numero1,numero2)    
}