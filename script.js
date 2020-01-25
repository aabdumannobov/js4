var a = +prompt('Введите число a');
var b = +prompt('Введите число b');
var c = +prompt('Введите число c');
if(a < b && b < c){
    alert('Среднее число '+ b);

}else if(c < b && b < a){
    alert('Среднее число ' + b);

}else if(b < c && c < a){
    alert('Среднее число ' + c);

}else if(a < c && c < b){
    alert('Среднее число ' + c);

}else if(c < a && a < b){
    alert('Среднее число ' + a);

}else if(b < a && a < c){
    alert('Среднее число ' + a);

}else if(a == b && a == c){
    alert('числа равны ' );

}else{
    alert('Ошибка');
}
