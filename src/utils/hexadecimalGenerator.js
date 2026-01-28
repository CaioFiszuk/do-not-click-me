export function hexadecimalGenerator() {
   const values = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f']; 
   const one = values[Math.floor(Math.random() * values.length)];
   const two = values[Math.floor(Math.random() * values.length)];
   const three = values[Math.floor(Math.random() * values.length)];
   const four = values[Math.floor(Math.random() * values.length)];
   const five = values[Math.floor(Math.random() * values.length)];
   const six = values[Math.floor(Math.random() * values.length)];


    return `#${one}${two}${three}${four}${five}${six}`;
}