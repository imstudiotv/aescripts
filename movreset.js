/**
* Crea un movimiento horizontal repetible en base al tamaño de la composición
**/
vel=300;
space=50;
displacement=(thisComp.layer(index).index*space);
posX0=space;
posY0=250;
posX1=thisComp.width-space;
[posX0+((time*vel+displacement)%(posX1-posX0)),posY0];
