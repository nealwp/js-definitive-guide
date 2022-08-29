/* 2.1 */
// JS is case sensitive: while <> While <> WHILE <> wHiLe.

/* 2.2 */
// hmmm, I wonder if I know how comments work 

/* 2.3 */
// literals
42
3.14
"hello, world"
'Hal'
true
false
null

/* 2.4 */
// identifiers. naming things - one of those problems CS has already solved
i
my_variable_name // ew
v99
_dunder         // feels private, but probly not
$str            // oh hi, bash! (...and powershell :P)
// ^ these are legal identifiers
&crow = 'steve';
23andme 
!johncena = undefined;
// ^ these are illegal identifiers

/* 2.4 */
// reserved words. 
//There's a bunch but not too many

/* 2.5 */
// Charset
// U - NI - COOOODEE. This book says no emojis, but I'm pretty sure we can use those now.
// At least, Fireship does 🤷

/* 2.5.2 */
// note to self: create some funky bugs with 'unicode can use different escape sequences for the
// same glyph' chaos powers.
café = 'café'  // caf\u{e9}
café = 'café'  // cafe\u{301}
// therefore
café === café // => false. hee hee

/* 2.6 */
// semi-colons are optional. But we can always pretend