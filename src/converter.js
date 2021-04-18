//Функция конвертации десятичной системы в двоичную
export function decimalToBinary(number) {
    let convertedBinary = [];
    while (number >= 1) {
        convertedBinary.unshift(number % 2);
        number = Math.floor(number / 2);
    }
   return "Результат: " + convertedBinary.join('')
}

//Функция конвертации двоичнои системы в десятичную
export function binaryToDecimal(str) {
    let convertedDecimal = null;
    const input = String(str);
    const binary = String(str)
      .split('')
      .filter(i => i === '1' || i === '0');

    // Валидация на двоичную систему
    if (input.length !== binary.length) {
        return convertedDecimal ='Вы вписали не двоичный код! Исправьте пожалуйста';
    }
  
    convertedDecimal = binary.reduce((acc, curr, index, arr) => {
        return acc + Number(curr) * Math.pow(2, arr.length - 1 - index);
        // if (arr.length >= 4)  {
        //     return acc + Number(curr) * Math.pow(2, arr.length - 1 - index);
        // } else {
        //     const minLengthBinary = 4 - arr.length
        //     return convertedDecimal ='Минимальное количество чисел в бинарном коде 4, допишите ещё ' + minLengthBinary ;
        // }
    }, 0);
    return "Результат: " + convertedDecimal
  }