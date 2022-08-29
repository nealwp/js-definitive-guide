/* 3.1 */
// Any JS value that is not a number, string, boolean, symbol, null, or undefined is an OBJECT

/* 3.2 */
// JS Number === double in C++/Java/etc. 64-bit floating point
// -9,007,199,254,740,992 through 9,007,199,257,740,992; -2^53 through 2^53
// NOTE that ARRAY INDEXING and BITWISE OPERATORS use 32-bit ints!

/* 3.2.1 */
// can use hex values
0xff = 255
0xBADCAFE = 195939070
// ES6+, can use binary and octal
0b10101 = 21
0o377 = 255

/* 3.2.2 */
// floating point literal syntax
[digits][.digits][(E|e)[(+|-)]]
// so like
3.14
6.02e23 = 6.02 * 10^23

// can also use underscores for seperators in numeric
1_000_000_000
0x89_AB_CD_EF
0b0001_0110_0111

/* 3.2.3 */
// basic arithmetic operators: +, -, *, /, %, ** (ES2016)
// the rest of the math stuff = Math Object
Math.pow(2, 53)
Math.round(.6)
Math.ceil(.6)
Math.floor(.6)
Math.abs(-5)
Math.max(x, y, z)
Math.min(x, y, z)
Math.random()
Math.PI
Math.E
Math.sqrt(3)
Math.pow(3, 1/3)
Math.sin(0)
Math.log(10)
Math.log(100)/Math.LN10
Math.log(512)/Math.LN2
Math.exp(3)
// Added in ES6
Math.cbrt(27)
Math.hypot(3,4)
Math.log10(100)
Math.log2(1024)
Math.log1p(x)
Math.expm1(x)
Math.sign(x)
Math.imul(2,3)
Math.clz32(0xf)
Math.trunc(3.9)
Math.fround(x)
Math.sinh(x)
Math.asinh(x)

// NOTE: NaN cannot compare equal to any value, including itself
x === NaN // will never work correctly
x != x // works, or
Number.isNaN(x) // also works

