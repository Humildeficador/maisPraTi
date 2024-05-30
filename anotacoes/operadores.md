# Operadores em JavaScript

JavaScript oferece diversos tipos de operadores que podem ser usados para realizar diferentes operações. Esses operadores podem ser classificados em várias categorias, como unários, binários, aritméticos, comparação, lógicos, atribuição, e bitwise.

## Operadores Unários

### typeof
Retorna uma string indicando o tipo do operando.
```javascript
let x = 'Hello';
console.log(typeof x); // 'string'
```

### delete
Remove uma propriedade de um objeto.
```javascript
let obj = { a: 1, b: 2 };
delete obj.a;
console.log(obj); // { b: 2 }
```

### void
Avalia uma expressão e retorna `undefined`.
```javascript
let x = 3;
console.log(void x); // undefined
```

### Unary plus (`+`)
Tenta converter o operando em um número.
```javascript
let y = '42';
console.log(+y); // 42
```

### Unary negation (`-`)
Tenta converter o operando em um número e nega-o.
```javascript
let z = '42';
console.log(-z); // -42
```

## Operadores Binários

### Aritméticos

- **Adição (`+`)**
  ```javascript
  let a = 5;
  let b = 10;
  console.log(a + b); // 15
  ```

- **Subtração (`-`)**
  ```javascript
  console.log(b - a); // 5
  ```

- **Multiplicação (`*`)**
  ```javascript
  console.log(a * b); // 50
  ```

- **Divisão (`/`)**
  ```javascript
  console.log(b / a); // 2
  ```

- **Módulo (`%`)**
  ```javascript
  console.log(b % a); // 0
  ```

### Comparação

- **Igualdade (`==` e `===`)**
  ```javascript
  let a = 5;
  console.log(a == '5'); // true (conversão de tipo)
  console.log(a === '5'); // false (sem conversão de tipo)
  ```

- **Desigualdade (`!=` e `!==`)**
  ```javascript
  console.log(a != '5'); // false
  console.log(a !== '5'); // true
  ```

### Lógicos

- **AND (`&&`)**
  ```javascript
  console.log(true && false); // false
  ```

- **OR (`||`)**
  ```javascript
  console.log(true || false); // true
  ```

- **NOT (`!`)** (unário)
  ```javascript
  console.log(!true); // false
  ```

### Atribuição

- **Atribuição simples (`=`)**
  ```javascript
  let c = 3;
  ```

- **Atribuição com operadores (`+=`, `-=`, `*=`, `/=`, `%=`)**
  ```javascript
  let d = 2;
  d += 3; // d = d + 3; agora d é 5
  ```

### Bitwise

- **AND (`&`)**
  ```javascript
  console.log(5 & 1); // 1 (0101 & 0001 = 0001)
  ```

- **OR (`|`)**
  ```javascript
  console.log(5 | 1); // 5 (0101 | 0001 = 0101)
  ```

- **XOR (`^`)**
  ```javascript
  console.log(5 ^ 1); // 4 (0101 ^ 0001 = 0100)
  ```

- **NOT (`~`)**
  ```javascript
  console.log(~5); // -6 (inverte todos os bits de 5)
  ```

- **Left shift (`<<`)**
  ```javascript
  console.log(5 << 1); // 10 (0101 << 1 = 1010)
  ```

- **Right shift (`>>`)**
  ```javascript
  console.log(5 >> 1); // 2 (0101 >> 1 = 0010)
  ```

## Comparação entre `typeof` e Funções

- `typeof` é um operador, não uma função, por isso não requer parênteses.
  ```javascript
  console.log(typeof 'hello'); // 'string'
  ```

- `Number` é uma função que converte seu argumento para um número e, portanto, requer parênteses.
  ```javascript
  let str = '123';
  console.log(Number(str)); // 123
  ```

### Exemplos completos

**Usando `typeof` para verificar tipos de propriedade de um objeto:**
```javascript
const obj = {
  a: 1,
  b: 'string1',
  c: true,
  d: null,
  e: 'string2'
};

for (const key in obj) {
  console.log(`${key}: ${typeof obj[key]}`);
}

// Saída esperada:
// a: number
// b: string
// c: boolean
// d: object
// e: string
```