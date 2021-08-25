//convert number to string
let age=20;
console.log(typeof(age));//number
age =String(age);
console.log(typeof(age),age);//string

//convert string to number
let nAME="pravallika";
alert(typeof nAME);//string
nAME=Number(nAME);
alert(typeof nAME);//number

//convert Boolean  to string
let value=true;
alert(typeof value);//boolean
value=String(value);
alert(typeof value);//string

//convert String to Boolean
let personName="satya";
console.log(typeof(personName));//string
personName=Boolean(personName);
console.log(typeof(personName),personName);//Boolean

//convert Boolean to Number
let number=true;
console.log(typeof(number));//boolean
number=Number(number);
console.log(typeof(number),number);//number

//convert Number to Boolean
let num=0;
console.log(typeof(num));//number
num=Boolean(num);
console.log(typeof(num),num);//boolean

//undefined value
let num1;
console.log(typeof(num1));
let name1="";
console.log(typeof(name1),name1);
