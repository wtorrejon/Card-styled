'use strict'

const like = document.querySelector('.icons');
const btnAdd = document.querySelector('.btnAdd');
const btnAddNone = document.querySelector('.btnAddNone');
const figure = document.querySelector('.figure');

//agregar clase liked al dar click en el corazon
like.addEventListener('click', function () {
    like.classList.toggle('liked');
});

//cuando se hace hover sobre la imagen se retira la clase btnAddNone
figure.addEventListener('mouseover', function () {
    btnAddNone.classList.toggle('btnAddNone');
});

//cuando ya no se haga hover se agrega la clase btnAddNone
figure.addEventListener('mouseout', function () {
    btnAddNone.classList.add('btnAddNone');
});

//contador de btnAdd y agregar el numero de veces que se ha dado click en el div de la clase counter
let count = 0;
btnAdd.addEventListener('click', function () {
    count++;
    document.querySelector('.counter').innerHTML = count;
    //agregar el precio multipilcado por el contador si se hace click en el boton btnAdd
    document.querySelector('.price').innerHTML = 'S/.'+ count * 1800;
});

