function calculadora(num1, num2, operacion) {
  switch (operacion) {
    case "+":
      return num1 + num2;
    
      case "-":
      return num1 - num2;
    
      case "*":
      return num1 * num2;
   
      case "/":
      if (num2 === 0) {
        return "No se puede dividir por cero";
      }
      return num1 / num2;
   
      case "sqrt":
      if (num1 < 0) {
        return "No se puede calcular la raíz cuadrada de un número negativo";
      }
      return Math.sqrt(num1);
   
      case "USD-EUR":
      return num1 * 0.85; // Tasa de cambio fija de dólares a euros (1 USD = 0.85 EUR)
    default:
      return "Operación no encontrada";
  }
}


const resultados = []; // Array para almacenar los resultados de cada operación

let continuar = true;

while (continuar) {
  const numero1 = parseFloat(prompt("Ingrese el número uno"));
  const numero2 = parseFloat(prompt("Ingrese el número dos"));
  const operacion = prompt(
    "Ingrese la operación (+ para suma, - para resta, * para multiplicación, / para división, sqrt para raíz cuadrada, USD-EUR para convertir de dólares a euros, o escriba 'salir' para terminar)"
  );

  if (operacion.toLowerCase() === "salir") {
    continuar = false;
  } else {
    const resultado = calculadora(numero1, numero2, operacion);
    resultados.push(`Resultado (${numero1} ${operacion} ${numero2}): ${resultado}`);
  }
}

// Mostrar todos los resultados almacenados al final
const resultadosCompletos = resultados.join("\n");
alert(`Resultados de cada operación:\n${resultadosCompletos}`);
  