function foo1()
{return {bar: "hello"};
}
function foo2(){
    return{bar: "hello"};}
console.log('func1',foo1());    
console.log('func2',foo2());
/**
 * both function will return same thing because both are [Object Object]
 * func1 
Object { bar: "hello" }
​
bar: "hello"
​
<prototype>: Object { … }
debugger eval code:6:9
func2 
Object { bar: "hello" }
​
bar: "hello"
​
<prototype>: Object { … }
 *  */    