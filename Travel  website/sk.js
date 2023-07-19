const x= 10;
const color= x>=10 ?'red ': 'yellow';
switch (color){
    case 'red':
    console.log('x is red');
    break;
    case 'yellow':
    console.log('x is yellow');
    break;
    default :
    console.log('not either');
    break;

}
function sum(int1=67,int2=577){
    return int1+int2;
}
console.log(sum());