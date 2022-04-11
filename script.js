/*
    Какое будет выведено значение: let x = 5; alert( x++ ); ?
    Чему равно такое выражение: [ ] + false - null + true ?
    Что выведет этот код: let y = 1; let x = y = 2; alert(x); ?
    Чему равна сумма [ ] + 1 + 2?
    Что выведет этот код: alert( &quot;1&quot;[0] )?
    Чему равно 2 &amp;&amp; 1 &amp;&amp; null &amp;&amp; 0 &amp;&amp; undefined ?
    Есть ли разница между выражениями? !!( a &amp;&amp; b ) и (a &amp;&amp; b)?
    Что выведет этот код: alert( null || 2 &amp;&amp; 3 || 4 ); ?
    a = [1, 2, 3]; b = [1, 2, 3]; Правда ли что a == b ?
    Что выведет этот код: alert( +&quot;Infinity&quot; ); ?
    Верно ли сравнение: &quot;Ёжик&quot; &gt; &quot;яблоко&quot;?
    Чему равно 0 || &quot;&quot; || 2 || undefined || true || falsе ?
*/

'use strict';

// let x = 5;
// console.log(x++); - 5

// console.log([ ] + false - null + true); - NaN

// let y = 1; 
// let x = y = 2;

// console.log(x); - 2

// console.log([] + 1 + 2); = "12"

// console.log( "1"[0] ); - 1

// console.log(2 && 1 && null && undefined); = null

// console.log( !!(a && b) и (a && b) ); = false

// console.log(null || 2 && 3 || 4); = 3

// a = [1, 2, 3]; b = [1, 2, 3]; Правда ли что a == b ?  false

// Что выведет этот код: alert( +"Infinity" ); ?  infinity

// console.log("Ёжик" > "яблоко"); false

// console.log(0 || "" || 2 || undefined || true || falsе);  2