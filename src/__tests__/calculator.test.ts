import calculator from "../calculator";

// each of the objects in the dataset array has the pieces of a math problem.
// "add": x + y
// "subtract": x - y
// "multiply": x * y
// "divide": x / y

let dataset = [
  { x: 5, y: 10, method: "add", expectedResult: 15 },
  { x: 5, y: 10, method: "subtract", expectedResult: -5 },
  { x: 5, y: 10, method: "multiply", expectedResult: 50 },
  { x: 5, y: 10, method: "divide", expectedResult: 0.5 },
  { x: -12, y: 10000, method: "add", expectedResult: 9988 },
  { x: -12, y: 10000, method: "subtract", expectedResult: -10012 },
  { x: -12, y: 10000, method: "multiply", expectedResult: -120000 },
  { x: -12, y: 10000, method: "divide", expectedResult: -0.0012 },
  { x: 42, y: 0, method: "add", expectedResult: 42 },
  { x: 42, y: 0, method: "subtract", expectedResult: 42 },
  { x: 42, y: 0, method: "multiply", expectedResult: 0 },
  { x: 42, y: 0, method: "divide", expectedResult: Infinity },
  { x: 81, y: 227, method: "add", expectedResult: 308 },
  { x: 81, y: 227, method: "subtract", expectedResult: -146 },
  { x: 81, y: 227, method: "multiply", expectedResult: 18387 },
  { x: 81, y: 227, method: "divide", expectedResult: 0.3568281938 },
];

describe("Calculator", () => {
  dataset.forEach(data => {
    test(`${data.x} ${data.method} ${data.y} = ${data.expectedResult}`, () => {
      const result = calculator[data.method](data.x, data.y); 
      expect(result).toBeCloseTo(data.expectedResult);  
    });
  });

  dataset.forEach(data => {
    test(`${data.x} ${data.method} ${data.y} = ${data.expectedResult}`, () => {
      let result: number; 
      switch(data.method) {
        case "add": 
          result = calculator.add(data.x, data.y);
          break; 
        case "subtract": 
          result = calculator.subtract(data.x, data.y); 
          break; 
        case "multiply": 
          result = calculator.multiply(data.x, data.y); 
          break; 
        case "divide": 
          result = calculator.divide(data.x, data.y); 
          break; 
        default: 
          result = Infinity; 
      }
      expect(result).toBeCloseTo(data.expectedResult);
    });     
  })
});

